const Сategories = document.querySelectorAll('li.item');
const NumberOfСategories = Сategories.length;
console.log("Number of categories: " + NumberOfСategories);

for (let i = 0; i < NumberOfСategories; i += 1) {
    console.log("Category: "+ Сategories[i].firstElementChild.textContent);
    console.log("Elements: " + Сategories[i].lastElementChild.children.length);
}
