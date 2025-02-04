// Site-specific JavaScript goes here

var grid = document.querySelector('.grid');
var iso = new Isotope( grid, {
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

// element argument can be a selector string
//   for an individual element
var iso = new Isotope( '.grid', {
  // options
});
// bind filter on select change
$('.filters-select').on( 'change', function() {
  // get filter value from option value
  var filterValue = this.value;
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
