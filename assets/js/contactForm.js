jQuery(document).ready(function($) {
    "use strict";

    //Contact
    $('form.contactForm').submit(function() {
      var action = $(this).attr('action');
      var str = $(this).serialize();

      $.ajax({
        type: "POST",
        url: action,
        data: str,
        success: function(msg) {
          $('.submit-success').removeAttr('hidden')
          $('#submitBtn').hide()
        },
        error: function(msg) {
        }
      });
      return false;
    });
  
  });
  