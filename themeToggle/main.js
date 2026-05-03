const card = document.getElementById("card");
const toggleBtn = document.getElementById("toggleTheme");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  let savedTheme = localStorage.getItem("theme");

  if (savedTheme == "dark") {
    document.body.classList.add("dark");
  }
});
