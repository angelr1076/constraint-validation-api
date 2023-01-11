const form = document.querySelector('form');
const email = document.querySelector('#email');
const errorMsgSpan = document.querySelector('.error');

// event listeners for each element
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.checkValidity()) {
    console.log(e);
    showError();
  } else {
    errorToggle();
    errorMsgSpan.textContent = 'Form submitted.';
    email.value = '';
  }
});

email.addEventListener('input', e => {
  if (email.validity.tooShort || email.validity.patternMismatch) {
    console.log(email.validationMessage);
    showError();
  } else {
    // reset error message view
    errorMsgSpan.textContent = '';
    errorMsgSpan.className = 'error';
  }
});

function showError() {
  if (email.validity.tooShort) {
    errorToggle();
    errorMsgSpan.textContent =
      'Your email address must be at least 10 characters long';
  } else if (email.validity.patternMismatch) {
    errorToggle();
    errorMsgSpan.textContent =
      'All email addresses must contain an @ symbol... Example: BigRed25@bigcorp.eu';
  }
}

function errorToggle() {
  errorMsgSpan.classList.add('active');
}
