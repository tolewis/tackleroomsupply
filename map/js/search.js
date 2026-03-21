// Fuse.js fuzzy search wrapper

import { setSearchResults } from './filters.js';

let fuse = null;
let onSearchChange = null;

export function initSearch(destinations, onChange) {
  onSearchChange = onChange;

  fuse = new Fuse(destinations, {
    keys: [
      { name: 'title', weight: 0.4 },
      { name: 'subtitle', weight: 0.2 },
      { name: 'species', weight: 0.2 },
      { name: 'type', weight: 0.1 },
      { name: 'region_label', weight: 0.1 },
      { name: 'region', weight: 0.05 }
    ],
    threshold: 0.35,
    includeScore: true
  });

  const input = document.getElementById('search-input');
  let debounceTimer;

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = input.value.trim();
      if (query.length === 0) {
        setSearchResults(null);
      } else {
        const results = fuse.search(query);
        setSearchResults(results.length > 0 ? results : []);
      }
    }, 200);
  });
}
