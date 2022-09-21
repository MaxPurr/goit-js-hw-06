const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsContainer = document.querySelector("ul#ingredients");
const ingredientElements = [];
for (let i = 0; i < ingredients.length;i+=1) {
  ingredientElements.push(document.createElement("li"));
  ingredientElements[i].textContent = ingredients[i];
  ingredientElements[i].classList.add("item");
}
ingredientElements.forEach((ingredientElement) => {ingredientsContainer.append(ingredientElement)});