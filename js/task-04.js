let counterValue = 0;
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

const changeValue = (i) => {
    counterValue += i;
    value.textContent = counterValue;
};

const decrement = () => changeValue(-1);
const increment = () => changeValue(1);

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);