function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector("div#controls input");
const container = document.querySelector("div#boxes");

const createBoxes = (amount) => {
  amount = Math.max(amount, 1);
  const lastItem = container.lastElementChild;
  const k = lastItem === null ? 30 : Number(lastItem.style.width.replace("px", "")) + 10;
  for (let i = 0; i < amount; i += 1){
    const item = document.createElement("div");
    item.style.height = k + i * 10 + "px";
    item.style.width = k + i * 10 + "px";
    item.style.backgroundColor = getRandomHexColor();
    container.append(item);
  }
}

const destroyBoxes = () => { 
  const items = document.querySelectorAll("div#boxes div");
  for (let item of items)
    item.remove();
}

createBtn.addEventListener("click", () => createBoxes(input.value));
destroyBtn.addEventListener("click", destroyBoxes);
