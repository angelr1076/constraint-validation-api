const form = document.querySelector('form');
const email = document.querySelector('#email');
const errorMsgSpan = document.querySelector('.error');

// event listeners for each element
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.checkValidity()) {
    console.log(e);
    showError();
  }
});

email.addEventListener('input', e => {
  if (!email.validity.tooShort && !email.validity.patternMismatch) {
    // reset error message view
    errorMsgSpan.textContent = '';
    errorMsgSpan.className = 'error';
  } else {
    console.log(email.validationMessage);
    showError();
  }
});

function showError() {
  if (email.validity.patternMismatch) {
    errorToggle();
    errorMsgSpan.textContent =
      'All email addresses must contain an @ symbol... Example: BigRed25@bigcorp.eu';
  } else if (email.validity.tooShort) {
    errorMsgSpan.textContent =
      'Your email address must be at least 10 characters long';
  }
}

function errorToggle() {
  errorMsgSpan.classList.add('active');
}
