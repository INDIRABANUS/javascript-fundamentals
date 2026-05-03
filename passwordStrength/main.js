const input = document.getElementById("password");
const password = input.value;
const passwordStrength = document.getElementById("strength");

//checking for specific char

let hasNum = /[0-9]/.test(password);
let haslower = /[a-z]/.test(password);
let hasUpper = /[A-Z]/.test(password);
let hasSpecialChar = /[!@#$%^&*]/.test(password);

input.addEventListener("input", function () {
  //checking for specific char
  const password = input.value; // have to check every time the input updates so should be  inside the function

  let hasNum = /[0-9]/.test(password);
  let haslower = /[a-z]/.test(password);
  let hasUpper = /[A-Z]/.test(password);
  let hasSpecialChar = /[!@#$%^&*]/.test(password);

  // in password strength case weak in the else part

  if (password.length < 6) {
    passwordStrength.textContent = `Password must contain 6 charecters minimum`;
    passwordStrength.style.color = "red";
  } else if (
    password.length >= 8 &&
    hasNum &&
    haslower &&
    hasSpecialChar &&
    hasUpper
  ) {
    passwordStrength.textContent = "Strong";
    passwordStrength.style.color = "green";
  } else if (password.length >= 6 && haslower && hasNum) {
    passwordStrength.textContent = "Medium";
    passwordStrength.style.color = "orange";
  } else {
    passwordStrength.textContent = "weak";
    passwordStrength.style.color = "red";
  }
});
