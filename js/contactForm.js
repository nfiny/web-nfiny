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
            alert('success');
        },
        error: function(msg) {
            alert('Send contact form failed cos: ' + msg);
        }
      });
      return false;
    });
  
  });
  