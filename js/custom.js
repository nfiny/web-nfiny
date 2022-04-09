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
  
  });
  