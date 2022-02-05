jQuery(document).ready(function($) {
    "use strict";
  
    //Contact
    $('form.contactForm').submit(function() {
      var action = $(this).attr('action');
      var str = $(this).serialize();

      $('.submit-loading').removeAttr('hidden')
      $('#submitBtn').hide()

      $.ajax({
        type: "POST",
        url: action,
        data: str,
        success: function(msg) {
        },
        error: function(msg) {
            alert('Send contact form failed cos: ' + msg);
            $('.submit-loading').hide()
            $('.submit-success').removeAttr('hidden')
        }
      });
      return false;
    });
  
  });
  