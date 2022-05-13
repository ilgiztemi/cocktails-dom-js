import { cocktails } from "./data.js";
const data = cocktails;

const section = document.querySelector(".flex");
const input = document.querySelector("#search");
const buttonsDiv = document.querySelector(".buttons-div");

// rendering all data
function renderData(cocktails) {
  section.innerHTML = "";
  for (let cocktail of cocktails) {
    createDrinks(cocktail);
  }
}
renderData(data);

// creating cocktail cards
function createDrinks(cocktail) {
  const drink = `
    <div id=${cocktail.idDrink}  class="items">
    <img src=${cocktail.strDrinkThumb} alt="cocktail">
    <span id=${cocktail.strCategory}></span>
    <h2>${cocktail.strDrink}</h2>
    <p><strong>${cocktail.strGlass}</strong></p>
    <p>${cocktail.strAlcoholic}</p>
    </div>
    `;
  section.innerHTML += drink;
}

// search input
input.addEventListener("keyup", () => {
  const inputValue = input.value;
  const filteredData = data.filter((drink) =>
    drink.strDrink.toLowerCase().includes(inputValue)
  );
  renderData(filteredData);
});
