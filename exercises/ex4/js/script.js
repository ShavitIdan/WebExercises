(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    })()
    
    function validateFullName() {
        const fullNameInput = document.querySelector('input[name="FullName"]');
        const fullName = fullNameInput.value.trim();
        const fullNameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/; // matches strings with at least two words separated by a space
      
        if (fullName === '') {
          fullNameInput.setCustomValidity('Name field cannot be blank!');
        } else if (!fullNameRegex.test(fullName)) {
          fullNameInput.setCustomValidity('Please enter a valid full name with at least one space between two words.');
        } else {
          fullNameInput.setCustomValidity('');
        }
      }
      
      