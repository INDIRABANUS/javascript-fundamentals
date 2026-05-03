let charCount = 0;
const input = document.getElementById("charInput");
const result = document.getElementById("result");
const countElt = document.getElementById("count");

input.addEventListener("input", function () {
  charCount = input.value.length;

  countElt.innerHTML = `Count: ${charCount} / 100`;

  changecolor();
});

const changecolor = () => {
  if (charCount > 100) {
    result.style.color = "red";
  } else {
    result.style.color = "black";
  }
};
