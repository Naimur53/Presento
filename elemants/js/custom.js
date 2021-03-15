 
    //sider js end
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      spaceBetween: 100,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    

    //filtering
    // init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
//masonry
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  percentPosition: true,
  masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-sizer'
  }
})