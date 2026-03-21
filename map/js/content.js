const contentArea = document.getElementById('content-area');
const contentSection = document.getElementById('content-section');

const DEFAULT_WELCOME_HTML = `
  <div class="content-welcome">
    <p class="panel-kicker">Interactive Fishing Map</p>
    <h2>Regions first. Then destinations or target species.</h2>
    <p>Choose a region above to focus the map. From there you can hunt specific destination pins like Key West or switch to fish targets like marlin, tuna, bonefish, and GT.</p>
    <div class="content-stats">
      <div class="stat"><span class="stat-num" id="stat-destinations">27</span><span class="stat-label">Destinations</span></div>
      <div class="stat"><span class="stat-num" id="stat-species">12</span><span class="stat-label">Species</span></div>
      <div class="stat"><span class="stat-num" id="stat-regions">13</span><span class="stat-label">Regions</span></div>
    </div>
  </div>
`;

let currentKey = null;

function formatLabel(value) {
  return value.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
}

function renderDestinationCards(destinations) {
  return destinations.map(dest => `
    <article class="mini-card">
      <div class="mini-card-thumb" style="background-image:url(${dest.thumbnail})"></div>
      <div class="mini-card-body">
        <p class="mini-card-kicker">${dest.region_label || formatLabel(dest.region)}</p>
        <h3>${dest.title}</h3>
        <p>${dest.teaser}</p>
        <div class="mini-card-tags">${dest.species.slice(0, 4).map(species => `<span>${formatLabel(species)}</span>`).join('')}</div>
      </div>
    </article>
  `).join('');
}

function renderFishTargetCards(speciesEntries) {
  return speciesEntries.map(item => `
    <article class="feature-card fish-target-card">
      <p class="panel-kicker">Fish this zone for</p>
      <h3>${item.label}</h3>
      <p>${item.description || `${item.label} opportunities inside this region.`}</p>
      <div class="fish-target-meta">
        <span>${item.matchingDestinations.length} supporting destination${item.matchingDestinations.length === 1 ? '' : 's'}</span>
      </div>
    </article>
  `).join('');
}

export function renderWelcomeContent() {
  currentKey = null;
  contentArea.innerHTML = DEFAULT_WELCOME_HTML;
}

export function renderRegionContent(region, destinations, speciesEntries) {
  currentKey = `region:${region.id}`;
  contentArea.innerHTML = `
    <div class="content-article region-overview">
      <p class="panel-kicker">${region.label}</p>
      <h1>${region.label}</h1>
      <p class="article-subtitle">${region.description}</p>
      <p>${region.hero}</p>

      <div class="feature-grid">
        <div class="feature-card">
          <h2>${destinations.length} destination pins</h2>
          <p>Switch the map to <strong>Destination pins</strong> to drill into place-specific guides, charter bases, and geographic hotspots.</p>
        </div>
        <div class="feature-card">
          <h2>${speciesEntries.length} fish targets</h2>
          <p>Switch to <strong>Fish targets</strong> to browse the species this region is best known for, then work backward to matching destinations.</p>
        </div>
      </div>

      <h2>Fish this region for</h2>
      <div class="feature-grid fish-target-grid">
        ${renderFishTargetCards(speciesEntries)}
      </div>

      <div class="explore-pill-grid fish-target-pill-grid">
        ${speciesEntries.map(item => `<span class="explore-pill">${item.label} <strong>${item.matchingDestinations.length}</strong></span>`).join('')}
      </div>

      <h2>Destination lineup</h2>
      <div class="mini-card-grid">
        ${renderDestinationCards(destinations)}
      </div>
    </div>
  `;
}

export function renderSpeciesContent(species, region, destinations) {
  currentKey = `species:${region.id}:${species.id}`;
  contentArea.innerHTML = `
    <div class="content-article species-overview">
      <p class="panel-kicker">${region.label} · Fish Target</p>
      <h1>${species.label}</h1>
      <p class="article-subtitle">${destinations.length} matching destinations in ${region.label}</p>
      <p>${species.description || `${species.label} opportunities inside ${region.label}.`}</p>
      <div class="explore-pill-grid fish-target-pill-grid">
        <span class="explore-pill">${species.label}</span>
        <span class="explore-pill">${region.label}</span>
        <span class="explore-pill"><strong>${destinations.length}</strong> destination${destinations.length === 1 ? '' : 's'}</span>
      </div>

      <h2>Where to look first</h2>
      <div class="mini-card-grid">
        ${renderDestinationCards(destinations)}
      </div>
    </div>
  `;
  contentSection.scrollIntoView({ behavior: 'smooth' });
}

export async function loadDestinationContent(dest) {
  const nextKey = `destination:${dest.id}`;
  if (currentKey === nextKey) {
    contentSection.scrollIntoView({ behavior: 'smooth' });
    return;
  }
  currentKey = nextKey;

  contentArea.innerHTML = `
    <div class="content-article" style="text-align:center;padding:60px 0;">
      <p style="color:var(--text-muted)">Loading ${dest.title}...</p>
    </div>
  `;
  contentSection.scrollIntoView({ behavior: 'smooth' });

  try {
    const resp = await fetch(dest.content_file);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const html = await resp.text();
    contentArea.innerHTML = `
      <div class="content-article">
        <h1>${dest.title}</h1>
        <p class="article-subtitle">${dest.subtitle}</p>
        ${html}
      </div>
    `;
  } catch (error) {
    const months = dest.best_months.map(month => ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][month - 1]).join(', ');
    contentArea.innerHTML = `
      <div class="content-article">
        <h1>${dest.title}</h1>
        <p class="article-subtitle">${dest.subtitle}</p>
        <p>${dest.teaser}</p>
        <h2>Quick Facts</h2>
        <ul>
          <li><strong>Region:</strong> ${dest.region_label || formatLabel(dest.region)}</li>
          <li><strong>Target species:</strong> ${dest.species.map(formatLabel).join(', ')}</li>
          <li><strong>Fishing types:</strong> ${dest.type.map(formatLabel).join(', ')}</li>
          <li><strong>Best months:</strong> ${months}</li>
        </ul>
      </div>
    `;
  }
}
