let submitForm = () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();
  const submit = document.getElementById("submit");

  if (
    name === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Please fill all fields");
  }

  if (password != confirmPassword){
    alert("Please ensure the passwords match!")
  }
};

submit.addEventListener("click", () => {
  submitForm();
});
