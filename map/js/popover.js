const popover = document.getElementById('popover');
let currentConfig = null;
let currentMap = null;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function positionPopover(containerPoint, map) {
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    popover.style.left = '';
    popover.style.top = '';
    popover.style.right = '';
    popover.style.bottom = '';
    return;
  }

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

  popover.classList.remove('hidden');
  requestAnimationFrame(() => positionPopover(containerPoint, map));
}

export function hidePopover() {
  popover.classList.add('hidden');
  currentConfig = null;
}

document.getElementById('popover-close').addEventListener('click', (event) => {
  event.stopPropagation();
  hidePopover();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') hidePopover();
});

window.addEventListener('resize', () => {
  if (!popover.classList.contains('hidden')) repositionPopover();
});
