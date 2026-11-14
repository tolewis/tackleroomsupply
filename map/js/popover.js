const popover = document.getElementById('popover');

// Feature detection: the popover API (top layer, Escape, focus restore)
// and CSS anchor positioning (tracks the marker without rect math).
const supportsPopover = typeof popover.showPopover === 'function';
const supportsAnchor =
  typeof CSS !== 'undefined' && CSS.supports('anchor-name', '--pin');

let currentConfig = null;
let currentMap = null;

if (supportsPopover) {
  // The UA hides a closed [popover] element; the .hidden class is only
  // needed for engines without the popover attribute.
  popover.classList.remove('hidden');
}

function isOpen() {
  if (supportsPopover) return popover.matches(':popover-open');
  return !popover.classList.contains('hidden');
}

function clearAnchor() {
  if (currentConfig && currentConfig.marker) {
    const el = currentConfig.marker.getElement && currentConfig.marker.getElement();
    if (el) el.style.anchorName = '';
  }
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

// JS positioning fallback for desktop engines without anchor positioning.
// In the top layer (popover API) position:absolute references the viewport,
// so add the map's viewport offset; in-flow it references #map-section.
function positionPopover(containerPoint, map) {
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    popover.style.left = '';
    popover.style.top = '';
    popover.style.right = '';
    popover.style.bottom = '';
    return;
  }
  if (supportsAnchor) return; // CSS anchor positioning drives layout.

  const mapSection = document.getElementById('map-section');
  const mapRect = mapSection.getBoundingClientRect();
  const popRect = popover.getBoundingClientRect();
  const width = popRect.width || 380;
  const height = popRect.height || 420;
  const gutter = 14;

  let left = containerPoint.x + 20;
  if (left + width + gutter > mapRect.width) {
    left = containerPoint.x - width - 20;
  }

  let top = containerPoint.y - (height * 0.42);
  left = clamp(left, gutter, Math.max(gutter, mapRect.width - width - gutter));
  top = clamp(top, gutter, Math.max(gutter, mapRect.height - height - gutter));

  if (supportsPopover) {
    left += mapRect.left;
    top += mapRect.top;
  }

  popover.style.left = `${left}px`;
  popover.style.top = `${top}px`;
  popover.style.right = 'auto';
  popover.style.bottom = 'auto';
}

export function repositionPopover() {
  if (!currentConfig || !currentMap || !currentConfig.latLng) return;
  const point = currentMap.latLngToContainerPoint(currentConfig.latLng);
  positionPopover(point, currentMap);
}

export function showPopover(config, containerPoint, map) {
  clearAnchor(); // release the previous marker's anchor before reassigning
  currentConfig = config;
  currentMap = map;

  const thumb = document.getElementById('popover-thumb');
  const kind = document.getElementById('popover-kind');
  const title = document.getElementById('popover-title');
  const subtitle = document.getElementById('popover-subtitle');
  const tagsEl = document.getElementById('popover-tags');
  const teaser = document.getElementById('popover-teaser');
  const metaLeft = document.getElementById('popover-meta-left');
  const metaRight = document.getElementById('popover-meta-right');
  const cta = document.getElementById('popover-cta');

  thumb.style.backgroundImage = config.thumbnail ? `url(${config.thumbnail})` : '';
  thumb.classList.toggle('thumb-empty', !config.thumbnail);
  kind.textContent = config.kindLabel || '';
  kind.className = `popover-kind ${config.kindClass || ''}`.trim();
  title.textContent = config.title || '';
  subtitle.textContent = config.subtitle || '';
  teaser.textContent = config.teaser || '';
  metaLeft.innerHTML = config.metaLeft || '';
  metaRight.innerHTML = config.metaRight || '';
  cta.textContent = config.ctaLabel || 'Explore';
  cta.onclick = () => {
    if (typeof config.onCta === 'function') config.onCta();
  };

  tagsEl.innerHTML = '';
  (config.tags || []).forEach(tagText => {
    const tag = document.createElement('span');
    tag.className = 'popover-tag';
    tag.textContent = tagText;
    tagsEl.appendChild(tag);
  });

  // Anchor the detail card to the clicked marker for modern engines;
  // CSS then follows it on pan/zoom without any rect math.
  if (supportsAnchor && config.marker) {
    const el = config.marker.getElement && config.marker.getElement();
    if (el) el.style.anchorName = '--pin';
    popover.style.left = '';
    popover.style.top = '';
    popover.style.right = 'auto';
    popover.style.bottom = 'auto';
  }

  if (supportsPopover) {
    if (!isOpen()) popover.showPopover();
  } else {
    popover.classList.remove('hidden');
  }
  // positionPopover no-ops on mobile and when anchor positioning drives layout.
  requestAnimationFrame(() => positionPopover(containerPoint, map));
}

export function hidePopover() {
  if (supportsPopover) {
    if (isOpen()) popover.hidePopover();
  } else {
    popover.classList.add('hidden');
  }
  clearAnchor();
  currentConfig = null;
}

document.getElementById('popover-close').addEventListener('click', (event) => {
  event.stopPropagation();
  hidePopover();
});

// The native popover API handles Escape itself (and fires "close",
// which resets our state). Older engines need the manual listener.
popover.addEventListener('close', () => {
  clearAnchor();
  currentConfig = null;
});
if (!supportsPopover) {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') hidePopover();
  });
}

window.addEventListener('resize', () => {
  if (isOpen()) repositionPopover();
});
