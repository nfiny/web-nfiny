jQuery(document).ready(function($) {
    "use strict";
  
    //Contact
    $('form.contactForm').submit(function() {
      var action = $(this).attr('action');
      var str = $(this).serialize();

      $('.submit-success').removeAttr('hidden')
      $('#submitBtn').hide()

      $.ajax({
        type: "POST",
        url: action,
        data: str,
        success: function(msg) {
        },
        error: function(msg) {
          alert('There was an error submitting the request. Try again.')
        }
      });
      return false;
    });
  
  });
  