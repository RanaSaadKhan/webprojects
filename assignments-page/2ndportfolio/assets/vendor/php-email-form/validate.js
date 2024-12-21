(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function (e) {
    e.addEventListener('submit', function (event) {
      event.preventDefault();

      let thisForm = this;

      let action = thisForm.getAttribute('action');
      let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');

      if (!action) {
        console.error('The form action property is not set!');
        return;
      }

      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      let formData = new FormData(thisForm);

      if (recaptcha) {
        if (typeof grecaptcha !== "undefined") {
          grecaptcha.ready(function () {
            try {
              grecaptcha.execute(recaptcha, { action: 'php_email_form_submit' })
                .then(token => {
                  formData.set('recaptcha-response', token);
                  php_email_form_submit(thisForm, action, formData);
                })
            } catch (error) {
              showSuccess(thisForm);
            }
          });
        } else {
          console.error('The reCaptcha javascript API url is not loaded!');
        }
      } else {
        php_email_form_submit(thisForm, action, formData);
      }
    });
  });

  function php_email_form_submit(thisForm, action, formData) {
    fetch(action, {
      method: 'POST',
      body: formData,
      headers: { 'X-Requested-With': 'XMLHttpRequest' }
    })
      .then(() => {
        showSuccess(thisForm);
      })
      .catch(() => {
        showSuccess(thisForm);
      });
  }

  function showSuccess(thisForm) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    const successMessage = thisForm.querySelector('.sent-message');
    successMessage.classList.add('d-block');
    thisForm.reset();

    // Make the success message disappear after 60 seconds
    setTimeout(() => {
      let opacity = 1; // Start at full opacity
      const fadeOut = setInterval(() => {
        if (opacity <= 0) {
          clearInterval(fadeOut);
          successMessage.classList.remove('d-block');
        }
        opacity -= 0.05;
        successMessage.style.opacity = opacity;
      }, 100); // Fade out gradually
    }, 10000); // Wait 60 seconds before starting fade-out
  }
})();
