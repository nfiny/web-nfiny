jQuery(document).ready(function($) {
    "use strict";

  // Captcha
  grecaptcha.ready(function() {
    grecaptcha.execute('6LcpMmUfAAAAACyGT5nkxsPx7Q2aGTsDU2AGQj_M', {action:'validate_captcha'})
              .then(function(token) {
        // add token value to form
        document.getElementById('g-recaptcha-response').value = token;
    });
  });

  // Contact
  $('form.contactForm').submit(function(e) {
    e.preventDefault();

    var action = $(this).attr('action');
    var str = $(this).serialize();

    $('input.submit-loading').removeAttr('hidden');
    $('#submitBtn').hide();

    alert(str)  
    $.ajax({
      type: "POST",
      url: action,
      data: str,
      success: function(msg) {
        $('.submit-success').removeAttr('hidden')
        $('#submitBtn').hide()
      },
      error: function(msg) {
        alert(JSON.stringify(msg));
        $('.submit-error').removeAttr('hidden');
        $('#submitBtn').hide();
        $('input.submit-loading').hide();
      }
    });
    return false;
  });

});