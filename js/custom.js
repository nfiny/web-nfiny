jQuery(document).ready(function($) {
    "use strict";

    // Open secondary menu
    $('.nav-item .nav-link').on('click',function() {
      var id = $(this).attr('open-tab');
      if (!id) return;

      // Tab Buttons
      $(`.nav-item a[tab=${id}]`).addClass('active');
      $('a[data-bs-toggle="tab"]').not(`.nav-item a[tab=${id}]`).removeClass('active');

      // Tab Content
      $(`div[tab=${id}]`).addClass('active').addClass('show');
      $('div.tab-content div[tab-type="content"]').not(`div[tab=${id}]`).removeClass('active').removeClass('show');

    });

    // CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
      lazyLoad: true, 
	    loop:true,
	    margin:10,
	    nav:true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      responsiveClass: true,
      autoHeight: true,
      autoplayTimeout: 7000,
      smartSpeed: 800,
	  });

    // Carousel Content
    $('.owl-carousel').on('changed.owl.carousel', function () {
      setTimeout(function() {
        var contentId = $('#dapp .owl-stage > .active').attr('content-id');
        $(`#${contentId}`).addClass('active')
        $('#dapp .carousel-sub-content > .content').not(`#${contentId}`).removeClass('active')

        var contentId = $('#integrations .owl-stage > .active').attr('content-id');
        $(`#${contentId}`).addClass('active')
        $('#integrations .carousel-sub-content > .content').not(`#${contentId}`).removeClass('active')

                var contentId = $('#consulting .owl-stage > .active').attr('content-id');
        $(`#${contentId}`).addClass('active')
        $('#consulting .carousel-sub-content > .content').not(`#${contentId}`).removeClass('active')
      }, 100)
     
    }); 

});
  