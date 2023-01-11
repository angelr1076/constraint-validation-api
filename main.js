const form = document.querySelector('form');
const uname = document.getElementById('uname');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const comment = document.querySelector('#comment');
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
    clearFields();
  }
});

uname.addEventListener('input', e => {
  if (!uname.validity.patternMismatch) {
    // reset error message view
    errorMsgSpan.textContent = '';
    errorMsgSpan.className = 'error';
  } else {
    console.log(uname.validationMessage);
    showError();
  }
});

email.addEventListener('input', e => {
  if (!email.validity.patternMismatch) {
    // reset error message view
    errorMsgSpan.textContent = '';
    errorMsgSpan.className = 'error';
  } else {
    console.log(email.validationMessage);
    showError();
  }
});

phone.addEventListener('input', e => {
  if (!phone.validity.patternMismatch) {
    // reset error message view
    errorMsgSpan.textContent = '';
    errorMsgSpan.className = 'error';
  } else {
    console.log(phone.validationMessage);
    showError();
  }
});

function showError() {
  if (uname.validity.patternMismatch) {
    errorToggle();
    errorMsgSpan.textContent =
      "Must be only a single letter from 'a' to 'z', a dot, then 3 or more letters/numbers(lowercase).";
  } else if (email.validity.patternMismatch) {
    errorToggle();
    errorMsgSpan.textContent =
      'All email addresses must consist of one or more letters (lower or upper case) or numbers, followed by "@bigcorp.eu". Example: BigRed25@bigcorp.eu';
  } else if (phone.validity.patternMismatch) {
    errorToggle();
    errorMsgSpan.textContent =
      'Phone entries must be either 10 digits in a row or a pattern of three digits, three digits, then four digits, separated by either spaces, dashes, or dots';
  }
}

function clearFields() {
  uname.value = '';
  email.value = '';
  phone.value = '';
  comment.value = '';
}

function errorToggle() {
  errorMsgSpan.classList.add('active');
}
