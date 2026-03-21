// Filter state management + DOM binding

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let state = {
  species: [],
  types: [],
  diffMin: 1,
  diffMax: 5,
  month: null,
  searchResults: null
};

let onFilterChange = null;

export function getFilterState() {
  return { ...state };
}

export function setSearchResults(results) {
  state.searchResults = results;
  if (onFilterChange) onFilterChange();
}

export function clearFilters() {
  state.species = [];
  state.types = [];
  state.diffMin = 1;
  state.diffMax = 5;
  state.month = null;
  state.searchResults = null;

  // Reset DOM
  document.querySelectorAll('.chip.active').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.month-btn.active').forEach(m => m.classList.remove('active'));
  document.getElementById('diff-min').value = 1;
  document.getElementById('diff-max').value = 5;
  document.getElementById('diff-display').textContent = '1–5';
  document.getElementById('search-input').value = '';

  if (onFilterChange) onFilterChange();
}

export function initFilters(data, onChange) {
  onFilterChange = onChange;

  // Toggle panel
  const toggle = document.getElementById('filter-toggle');
  const body = document.getElementById('filter-body');
  toggle.addEventListener('click', () => {
    body.classList.toggle('open');
    toggle.classList.toggle('active');
  });

  // Species chips
  const speciesContainer = document.getElementById('species-filters');
  data.species_list.forEach(sp => {
    const chip = document.createElement('button');
    chip.className = 'chip';
    chip.textContent = sp.label;
    chip.dataset.id = sp.id;
    chip.addEventListener('click', () => {
      chip.classList.toggle('active');
      if (chip.classList.contains('active')) {
        state.species.push(sp.id);
      } else {
        state.species = state.species.filter(s => s !== sp.id);
      }
      onFilterChange();
    });
    speciesContainer.appendChild(chip);
  });

  // Type chips
  const typeContainer = document.getElementById('type-filters');
  data.type_list.forEach(tp => {
    const chip = document.createElement('button');
    chip.className = 'chip';
    chip.textContent = tp.label;
    chip.dataset.id = tp.id;
    chip.addEventListener('click', () => {
      chip.classList.toggle('active');
      if (chip.classList.contains('active')) {
        state.types.push(tp.id);
      } else {
        state.types = state.types.filter(t => t !== tp.id);
      }
      onFilterChange();
    });
    typeContainer.appendChild(chip);
  });

  // Difficulty sliders
  const diffMin = document.getElementById('diff-min');
  const diffMax = document.getElementById('diff-max');
  const diffDisplay = document.getElementById('diff-display');

  function updateDiff() {
    let min = parseInt(diffMin.value);
    let max = parseInt(diffMax.value);
    if (min > max) { [min, max] = [max, min]; }
    state.diffMin = min;
    state.diffMax = max;
    diffDisplay.textContent = min === max ? `${min}` : `${min}–${max}`;
    onFilterChange();
  }
  diffMin.addEventListener('input', updateDiff);
  diffMax.addEventListener('input', updateDiff);

  // Month buttons
  const monthContainer = document.getElementById('month-filters');
  MONTHS.forEach((label, idx) => {
    const btn = document.createElement('button');
    btn.className = 'month-btn';
    btn.textContent = label;
    btn.dataset.month = idx + 1;

    // Pre-select current month
    if (idx + 1 === new Date().getMonth() + 1) {
      // Don't pre-select; let user opt in
    }

    btn.addEventListener('click', () => {
      const monthVal = idx + 1;
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        state.month = null;
      } else {
        monthContainer.querySelectorAll('.month-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.month = monthVal;
      }
      onFilterChange();
    });
    monthContainer.appendChild(btn);
  });

  // Clear all
  document.getElementById('clear-filters').addEventListener('click', clearFilters);
}
