const cocteles = document.getElementById("cocteles-list");

fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Sprite")
  .then((response) => response.json())
  .then((data) => {
    data.drinks.forEach((drink) => {
      const coct = document.createElement("div");
      coct.classList.add("main");

      const img = document.createElement("img");
      img.src = drink.strDrinkThumb;

      const name = document.createElement("h3");
      name.textContent = drink.strDrink;

      const price = document.createElement("p");
      price.textContent = drink.idDrink;

      coct.appendChild(img);
      coct.appendChild(name);
      coct.appendChild(price);

      cocteles.appendChild(coct);
    });
  })
  .catch((error) => {
    console.log(error);
  });

