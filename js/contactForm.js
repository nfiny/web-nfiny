jQuery(document).ready(function($) {
    "use strict";

   //Contact
    $('form.contactForm').submit(function() {
      var action = $(this).attr('action');
      var str = $(this).serialize();

      $('input.submit-loading').removeAttr('hidden')
      $('#submitBtn').hide()

      $.ajax({
        type: "POST",
        url: action,
        data: str,
        success: function(msg) {
          $('.submit-success').removeAttr('hidden')
          $('#submitBtn').hide()
        },
        error: function(msg) {
          $('.submit-error').removeAttr('hidden');
          $('#submitBtn').hide();
          $('input.submit-loading').hide();
        }
      });
      return false;
    });
  
  });