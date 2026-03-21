import { initFilters, getFilterState, clearFilters } from './filters.js';
import { showPopover, hidePopover, repositionPopover } from './popover.js';
import { loadDestinationContent, renderRegionContent, renderSpeciesContent, renderWelcomeContent } from './content.js';
import { initSearch } from './search.js';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DEFAULT_VIEW = { center: [22, -65], zoom: 3 };
const REGION_FOCUS_PADDING = [36, 36];

let map;
let data;
let clusterGroup;
let regionLayer;
let destinationLayer;
let fishLayer;
let activeMarker = null;
let selectedRegionId = null;
let exploreMode = 'destinations';
let suppressAutoRegionSync = false;

const pinIcon = L.divIcon({
  className: 'pin-icon-wrap',
  html: `<svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 20 12 20s12-11 12-20C24 5.373 18.627 0 12 0z" fill="#d4af37"/>
    <circle cx="12" cy="11" r="5" fill="#0a1628"/>
  </svg>`,
  iconSize: [24, 32],
  iconAnchor: [12, 32],
  popupAnchor: [0, -32],
  tooltipAnchor: [0, -28]
});

const pinIconActive = L.divIcon({
  className: 'pin-icon-wrap pin-icon-active',
  html: `<svg width="28" height="36" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 20 12 20s12-11 12-20C24 5.373 18.627 0 12 0z" fill="#f0d060"/>
    <circle cx="12" cy="11" r="5" fill="#0a1628"/>
  </svg>`,
  iconSize: [28, 36],
  iconAnchor: [14, 36],
  popupAnchor: [0, -36],
  tooltipAnchor: [0, -32]
});

const fishIcon = L.divIcon({
  className: 'fish-icon-wrap',
  html: `<svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30.5 13c-2.2 1.5-3.8 3.5-4.8 5.8-3.6 0-6.6-.6-9.4-2.3-1.8 1.9-4.6 3.1-8.6 3.1-2.3 0-4.4-.4-6.2-1.2 1.5-1.5 2.5-3.3 3-5.4-.5-2.1-1.5-3.9-3-5.4 1.8-.8 3.9-1.2 6.2-1.2 4 0 6.8 1.2 8.6 3.1 2.8-1.7 5.8-2.3 9.4-2.3 1 2.3 2.6 4.3 4.8 5.8Z" fill="#2ec4b6" stroke="#bff6f1" stroke-width="1.2"/>
    <circle cx="11.5" cy="11" r="1.4" fill="#0a1628"/>
  </svg>`,
  iconSize: [34, 26],
  iconAnchor: [17, 13],
  tooltipAnchor: [0, -14]
});

function formatLabel(value) {
  return value.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
}

function initMap() {
  map = L.map('map', {
    center: DEFAULT_VIEW.center,
    zoom: DEFAULT_VIEW.zoom,
    minZoom: 2,
    maxZoom: 12,
    zoomControl: true,
    maxBounds: [[-60, -200], [75, 200]],
    maxBoundsViscosity: 0.8
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  clusterGroup = L.markerClusterGroup({
    maxClusterRadius: 50,
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    iconCreateFunction(cluster) {
      const count = cluster.getChildCount();
      let size = 'small';
      if (count > 10) size = 'medium';
      if (count > 25) size = 'large';
      return L.divIcon({
        html: `<div>${count}</div>`,
        className: `marker-cluster marker-cluster-${size}`,
        iconSize: L.point(40, 40)
      });
    }
  });

  regionLayer = L.layerGroup();
  destinationLayer = L.layerGroup();
  fishLayer = L.layerGroup();

  map.addLayer(regionLayer);

  map.on('click', () => {
    hidePopover();
    clearActiveMarker();
  });

  map.on('moveend', () => {
    repositionPopover();
    syncRegionToViewport();
  });
}

async function loadData() {
  const resp = await fetch('data/destinations.json');
  data = await resp.json();
  const regionMap = new Map(data.regions.map(region => [region.id, region.label]));
  data.destinations = data.destinations.map(dest => ({
    ...dest,
    region_label: regionMap.get(dest.region) || formatLabel(dest.region)
  }));
  return data;
}

function clearActiveMarker() {
  if (!activeMarker) return;
  if (activeMarker.__iconType === 'destination') {
    activeMarker.setIcon(pinIcon);
  }
  activeMarker = null;
}

function setActiveMarker(marker, iconType = 'destination') {
  clearActiveMarker();
  activeMarker = marker;
  activeMarker.__iconType = iconType;
  if (iconType === 'destination') {
    marker.setIcon(pinIconActive);
  }
}

function getSelectedRegion() {
  return data.regions.find(region => region.id === selectedRegionId) || null;
}

function getSpeciesMeta(speciesId) {
  return data.species_list.find(species => species.id === speciesId);
}

function getFilteredDestinations() {
  if (!data) return [];
  const state = getFilterState();
  let filtered = [...data.destinations];

  if (selectedRegionId) {
    filtered = filtered.filter(dest => dest.region === selectedRegionId);
  }

  if (state.searchResults) {
    const ids = new Set(state.searchResults.map(result => result.item.id));
    filtered = filtered.filter(dest => ids.has(dest.id));
  }

  if (state.species.length > 0) {
    filtered = filtered.filter(dest => dest.species.some(species => state.species.includes(species)));
  }

  if (state.types.length > 0) {
    filtered = filtered.filter(dest => dest.type.some(type => state.types.includes(type)));
  }

  filtered = filtered.filter(dest => dest.difficulty >= state.diffMin && dest.difficulty <= state.diffMax);

  if (state.month !== null) {
    filtered = filtered.filter(dest => dest.best_months.includes(state.month));
  }

  return filtered;
}

function getRegionSpecies(regionId, destinations) {
  const speciesMap = new Map();
  destinations.forEach(dest => {
    dest.species.forEach(speciesId => {
      const meta = getSpeciesMeta(speciesId);
      if (!meta) return;
      if (!speciesMap.has(speciesId)) {
        speciesMap.set(speciesId, {
          ...meta,
          matchingDestinations: [],
          latAccumulator: 0,
          lngAccumulator: 0
        });
      }
      const entry = speciesMap.get(speciesId);
      entry.matchingDestinations.push(dest);
      entry.latAccumulator += dest.lat;
      entry.lngAccumulator += dest.lng;
    });
  });

  return [...speciesMap.values()]
    .map(entry => ({
      ...entry,
      lat: Number((entry.latAccumulator / entry.matchingDestinations.length).toFixed(4)),
      lng: Number((entry.lngAccumulator / entry.matchingDestinations.length).toFixed(4))
    }))
    .sort((a, b) => b.matchingDestinations.length - a.matchingDestinations.length || a.label.localeCompare(b.label));
}

function updateMapBadge(count, noun) {
  let badge = document.querySelector('.pin-count');
  if (!badge) {
    badge = document.createElement('div');
    badge.className = 'pin-count';
    document.getElementById('map-section').appendChild(badge);
  }
  badge.innerHTML = `<strong>${count}</strong> ${noun}`;
}

function updateSummary(filteredDestinations) {
  const region = getSelectedRegion();
  const summary = document.getElementById('region-summary');
  const visibleSpeciesCount = new Set(filteredDestinations.flatMap(dest => dest.species)).size;

  if (!region) {
    summary.innerHTML = `
      <p class="summary-eyebrow">Current view</p>
      <h2>Select a region</h2>
      <p>Start with a fishing region to focus the map. You can still layer species, type, season, and search filters on top.</p>
      <div class="summary-stats">
        <span><strong>${data.destinations.length}</strong> destinations</span>
        <span><strong>${data.species_list.length}</strong> species</span>
      </div>
    `;
    return;
  }

  const visibleFish = getRegionSpecies(region.id, filteredDestinations).slice(0, 4).map(species => species.label);
  const modeLabel = exploreMode === 'fish' ? 'Fish-first focus' : 'Map-first region focus';
  summary.innerHTML = `
    <p class="summary-eyebrow">${modeLabel}</p>
    <h2>${region.label}</h2>
    <p>${region.description}</p>
    <p class="summary-fishline"><strong>Fish this zone for:</strong> ${visibleFish.length ? visibleFish.join(', ') : 'No fish targets visible with current filters.'}</p>
    <div class="summary-stats">
      <span><strong>${filteredDestinations.length}</strong> visible destinations</span>
      <span><strong>${visibleSpeciesCount}</strong> visible fish targets</span>
      <span><strong>Pins + fish labels</strong> stay on the map</span>
    </div>
  `;
}

function withSuppressedRegionSync(fn) {
  suppressAutoRegionSync = true;
  try {
    fn();
  } finally {
    window.setTimeout(() => {
      suppressAutoRegionSync = false;
    }, 250);
  }
}

function fitRegion(region, animate = true) {
  withSuppressedRegionSync(() => {
    map.fitBounds(region.bounds, { padding: REGION_FOCUS_PADDING, animate });
  });
}

function pointInBounds(point, bounds) {
  return point[0] >= bounds[0][0] && point[0] <= bounds[1][0] && point[1] >= bounds[0][1] && point[1] <= bounds[1][1];
}

function getBestRegionForViewport() {
  const center = map.getCenter();
  const containing = data.regions.filter(region => pointInBounds([center.lat, center.lng], region.bounds));
  if (containing.length === 0) return null;

  return containing
    .map(region => ({
      region,
      distance: map.distance(center, L.latLng(region.center))
    }))
    .sort((a, b) => a.distance - b.distance)[0].region;
}

function syncRegionToViewport() {
  if (!selectedRegionId || suppressAutoRegionSync) return;
  if (map.getZoom() < 4) return;

  const nextRegion = getBestRegionForViewport();
  if (!nextRegion || nextRegion.id === selectedRegionId) return;

  selectRegion(nextRegion.id, { fit: false, renderContent: true, syncMode: false });
}

function selectRegion(regionId, { fit = true, renderContent = true, syncMode = false } = {}) {
  selectedRegionId = regionId;
  if (syncMode) {
    exploreMode = 'destinations';
  }

  const region = getSelectedRegion();
  document.querySelectorAll('.region-chip').forEach(button => {
    button.classList.toggle('active', button.dataset.region === regionId);
  });
  document.querySelectorAll('.mode-btn').forEach(button => {
    button.disabled = !regionId;
  });

  if (fit && region) fitRegion(region);
  renderCurrentView();

  if (region && renderContent) {
    const regionDestinations = getFilteredDestinations();
    renderRegionContent(region, regionDestinations, getRegionSpecies(region.id, regionDestinations));
  }
}

function resetRegionView() {
  selectedRegionId = null;
  exploreMode = 'destinations';
  document.getElementById('mode-destinations').classList.add('active');
  document.getElementById('mode-fish').classList.remove('active');
  document.querySelectorAll('.region-chip').forEach(button => button.classList.remove('active'));
  document.querySelectorAll('.mode-btn').forEach(button => { button.disabled = true; });
  hidePopover();
  clearActiveMarker();
  withSuppressedRegionSync(() => {
    map.setView(DEFAULT_VIEW.center, DEFAULT_VIEW.zoom, { animate: true });
  });
  renderWelcomeContent();
  updateTopStats();
  renderCurrentView();
}

function showDestinationPopover(dest, marker) {
  setActiveMarker(marker, 'destination');
  showPopover({
    latLng: [dest.lat, dest.lng],
    thumbnail: dest.thumbnail,
    kindLabel: 'Destination pin',
    kindClass: 'kind-destination',
    title: dest.title,
    subtitle: dest.subtitle,
    teaser: dest.teaser,
    tags: dest.species.slice(0, 5).map(formatLabel),
    metaLeft: `<span class="meta-label">Difficulty</span><strong>${dest.difficulty}/5</strong>`,
    metaRight: `<span class="meta-label">Peak</span><strong>${dest.best_months.slice(0, 3).map(month => MONTHS[month - 1]).join(', ')}</strong>`,
    ctaLabel: 'Read full guide',
    onCta: () => {
      loadDestinationContent(dest);
      withSuppressedRegionSync(() => {
        map.setView([dest.lat, dest.lng], Math.max(map.getZoom(), 5), { animate: true });
      });
    }
  }, map.latLngToContainerPoint([dest.lat, dest.lng]), map);
}

function showSpeciesPopover(speciesEntry, marker) {
  const region = getSelectedRegion();
  setActiveMarker(marker, 'fish');
  showPopover({
    latLng: [speciesEntry.lat, speciesEntry.lng],
    kindLabel: 'Fish target',
    kindClass: 'kind-fish',
    title: speciesEntry.label,
    subtitle: `${speciesEntry.matchingDestinations.length} ${speciesEntry.matchingDestinations.length === 1 ? 'destination' : 'destinations'} in ${region.label}`,
    teaser: speciesEntry.description,
    tags: speciesEntry.matchingDestinations.slice(0, 5).map(dest => dest.title),
    metaLeft: `<span class="meta-label">Region</span><strong>${region.label}</strong>`,
    metaRight: `<span class="meta-label">Coverage</span><strong>${speciesEntry.matchingDestinations.length} spots</strong>`,
    ctaLabel: 'Open supporting list',
    onCta: () => renderSpeciesContent(speciesEntry, region, speciesEntry.matchingDestinations)
  }, map.latLngToContainerPoint([speciesEntry.lat, speciesEntry.lng]), map);
}

function renderRegionMarkers() {
  regionLayer.clearLayers();
  destinationLayer.clearLayers();
  fishLayer.clearLayers();
  clusterGroup.clearLayers();
  if (!map.hasLayer(regionLayer)) map.addLayer(regionLayer);
  if (map.hasLayer(destinationLayer)) map.removeLayer(destinationLayer);
  if (map.hasLayer(fishLayer)) map.removeLayer(fishLayer);
  if (map.hasLayer(clusterGroup)) map.removeLayer(clusterGroup);

  data.regions.forEach(region => {
    const marker = L.marker(region.center, {
      icon: L.divIcon({
        className: 'region-marker-wrap',
        html: `<button class="region-marker" type="button"><span>${region.label}</span><strong>${region.destination_count}</strong></button>`,
        iconSize: [168, 58],
        iconAnchor: [84, 29]
      })
    });

    marker.on('click', event => {
      L.DomEvent.stopPropagation(event);
      selectRegion(region.id);
    });
    marker.bindTooltip(region.label, { className: 'dark-tooltip', direction: 'top', offset: [0, -10] });
    regionLayer.addLayer(marker);
  });

  updateMapBadge(data.regions.length, 'regions');
}

function attachFocusedLabel(marker, text, className) {
  marker.bindTooltip(text, {
    permanent: true,
    direction: 'right',
    offset: [10, 0],
    opacity: 1,
    interactive: false,
    className
  });
}

function renderFocusedRegionLayers(destinations, speciesEntries) {
  regionLayer.clearLayers();
  destinationLayer.clearLayers();
  fishLayer.clearLayers();
  clusterGroup.clearLayers();

  if (map.hasLayer(regionLayer)) map.removeLayer(regionLayer);
  if (map.hasLayer(clusterGroup)) map.removeLayer(clusterGroup);
  if (!map.hasLayer(destinationLayer)) map.addLayer(destinationLayer);
  if (!map.hasLayer(fishLayer)) map.addLayer(fishLayer);

  destinations.forEach(dest => {
    const marker = L.marker([dest.lat, dest.lng], { icon: pinIcon });
    attachFocusedLabel(marker, dest.title, 'map-label destination-label');
    marker.on('click', event => {
      L.DomEvent.stopPropagation(event);
      showDestinationPopover(dest, marker);
    });
    destinationLayer.addLayer(marker);
  });

  speciesEntries.forEach(entry => {
    const marker = L.marker([entry.lat, entry.lng], { icon: fishIcon });
    attachFocusedLabel(marker, entry.label, 'map-label fish-label');
    marker.on('click', event => {
      L.DomEvent.stopPropagation(event);
      showSpeciesPopover(entry, marker);
    });
    fishLayer.addLayer(marker);
  });

  if (exploreMode === 'fish') {
    fishLayer.bringToFront();
  } else {
    destinationLayer.bringToFront();
  }

  updateMapBadge(destinations.length + speciesEntries.length, `map labels live · ${destinations.length} destinations / ${speciesEntries.length} fish`);
}

function renderCurrentView() {
  hidePopover();
  clearActiveMarker();
  const filteredDestinations = getFilteredDestinations();
  updateSummary(filteredDestinations);

  if (!selectedRegionId) {
    renderRegionMarkers();
    return;
  }

  renderFocusedRegionLayers(filteredDestinations, getRegionSpecies(selectedRegionId, filteredDestinations));
}

function initRegionControls() {
  const wrap = document.getElementById('region-quick-jump');
  data.regions.forEach(region => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'region-chip';
    button.dataset.region = region.id;
    button.innerHTML = `<span>${region.label}</span><strong>${region.destination_count}</strong>`;
    button.addEventListener('click', () => selectRegion(region.id));
    wrap.appendChild(button);
  });

  document.getElementById('reset-region').addEventListener('click', resetRegionView);

  document.getElementById('mode-destinations').addEventListener('click', () => {
    if (!selectedRegionId) return;
    exploreMode = 'destinations';
    document.getElementById('mode-destinations').classList.add('active');
    document.getElementById('mode-fish').classList.remove('active');
    renderCurrentView();
  });

  document.getElementById('mode-fish').addEventListener('click', () => {
    if (!selectedRegionId) return;
    exploreMode = 'fish';
    document.getElementById('mode-fish').classList.add('active');
    document.getElementById('mode-destinations').classList.remove('active');
    renderCurrentView();
  });

  document.querySelectorAll('.mode-btn').forEach(button => {
    button.disabled = true;
  });
}

function initBackToMap() {
  const button = document.getElementById('back-to-map');
  button.addEventListener('click', () => {
    document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      button.classList.toggle('hidden', entry.isIntersecting);
    });
  }, { threshold: 0.3 });

  observer.observe(document.getElementById('map-section'));
}

function updateTopStats() {
  document.getElementById('stat-destinations').textContent = data.destinations.length;
  document.getElementById('stat-species').textContent = data.species_list.length;
  document.getElementById('stat-regions').textContent = data.regions.length;
}

async function init() {
  initMap();
  await loadData();
  initRegionControls();
  initFilters(data, renderCurrentView);
  initSearch(data.destinations, renderCurrentView);
  initBackToMap();
  updateTopStats();
  renderCurrentView();
}

window.__mapApp = {
  clearFilters,
  getMap: () => map
};

init();
