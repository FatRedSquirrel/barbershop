let filtersOpen = document.querySelector('.filters-open'),
  filters = document.querySelector('.filters-mobile'),
  filtersClose = document.querySelector('.filters-mobile-close'),
  mainCatalog = document.querySelector('.main-catalog'),
  footer = document.querySelector('.footer'),
  body = document.body;

filtersOpen.onclick = function() {
  filters.classList.add('open');
  body.classList.add('filters-active');
  footer.classList.add('filters-active');
  mainCatalog.classList.add('filters-active');
}

filtersClose.onclick = function() {
  filters.classList.remove('open');
  body.classList.remove('filters-active');
  footer.classList.remove('filters-active');
  mainCatalog.classList.remove('filters-active');
}