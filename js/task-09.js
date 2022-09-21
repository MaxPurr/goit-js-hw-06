function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const changeColorBtn =document.querySelector(".change-color");
const color = document.querySelector(".color");

const changeColor = () => {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
}

changeColorBtn.addEventListener("click",changeColor);

