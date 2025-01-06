const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName() {
  const fullName = document.getElementById("full-name").value;
  if (fullName.length === 0) {
    nameError.textContent = "Name required.";
    return false;
  } else if (!/^[A-Za-z]+(?:\s[A-Za-z]+)+$/.test(fullName)) {
    nameError.textContent = "Enter a valid full name.";
    return false;
  } else {
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}

function validatePhone() {
  const phoneNumber = document.getElementById("phone-number").value;
  if (phoneNumber.length === 0) {
    phoneError.textContent = "Phone number required.";
    return false;
  } else if (!/^\d{10}$/.test(phoneNumber)) {
    phoneError.textContent = "Phone number should be exactly 10 digits.";
    return false;
  } else {
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}

function validateEmail() {
  const email = document.getElementById("email").value;
  if (email.length === 0) {
    emailError.textContent = "Email required.";
    return false;
  } else if (!/^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(email)) {
    emailError.textContent = "Invalid email.";
    return false;
  } else {
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}

function validateMessage() {
  const message = document.getElementById("message").value;
  const charactersRequired = 30;
  let charactersRemaining = charactersRequired - message.length;
  if (charactersRemaining > 0) {
    messageError.textContent =
      charactersRemaining + " more characters required.";
    return false;
  } else {
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.textContent =
      "Oops! There are some issues. Please fix them and try again.";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
  return true;
}
