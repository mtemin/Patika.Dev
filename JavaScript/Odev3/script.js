"use strict";
let foodList = [
  {
    title: "Sarma Dolma",
    imgSrc: "img/sarma.jpg",
    country: "Türkiye",
    description:
      " A spoonful of minced meat, rice, several spices and sometimes currants mixture is placed on a vine leaf, folded in and carefully rolled by hand into neat little cylinders. ",
    price: 10.0,
    moneyUnit: "₺",
  },
  {
    title: "Iskender Kebab",
    imgSrc: "img/iskender.jpg",
    country: "Türkiye",
    description:
      "Thin slices of doner meat are reverently laid over pieces of plump pide bread, smothered in freshly made tomato sauce, baptized with a dash of sizzling melted butter and served with a portion of tangy yoghurt, grilled tomato and green peppers.",
    price: 35.0,
    moneyUnit: "₺",
  },
  {
    title: "Mantı",
    imgSrc: "img/manti.jpg",
    country: "Türkiye",
    description:
      "Spoonful of mince sealed into a small parcel, but they use cheese elsewhere. The manti are dropped into boiling water and topped with yoghurt and pul biber (chili flakes). ",
    price: 20.0,
    moneyUnit: "₺",
  },
  {
    title: "Lahmacun",
    imgSrc: "img/lahmacun.jpg",
    country: "Türkiye",
    description:
      "It’s a type of pastry with meat paste. The paste consists of low fat mince mixed with tomato paste, garlic and spices smeared on a thin round of pita dough and can be made spicier on request. ",
    price: 15.0,
    moneyUnit: "₺",
  },
  {
    title: "Lokum",
    imgSrc: "img/lokum.jpg",
    country: "Türkiye",
    description:
      "This simple combination of water, starch and sugar, boiled together to produce delicate cubes flavored with rose water, pistachio and other flavors continues to delight.",
    price: 10.0,
    moneyUnit: "₺",
  },
  {
    title: "Sushi",
    imgSrc: "img/sushi.webp",
    country: "Japan",
    description:
      "Sushi is raw fish served on rice seasoned lightly with vinegar. It’s in the variety of flavours and textures – like tangy, creamy uni (sea urchin roe) and plump, juicy amaebi (sweet shrimp)",
    price: 150,
    moneyUnit: "￥",
  },
  {
    title: "Tempura",
    imgSrc: "img/tempura.webp",
    country: "Japan",
    description:
      "Seafood and vegetables that have been battered and deep fried, seasoned with a sauce made with soy sauce, ginger and sugar.",
    price: 300,
    moneyUnit: "￥",
  },
  {
    title: "Ramen",
    imgSrc: "img/ramen.webp",
    country: "Japan",
    description:
      "Wheat noodles bowl served in a soy sauce or miso soup mixed with many kinds of ingredients.",
    price: 250,
    moneyUnit: "￥",
  },
  {
    title: "Yakitori",
    imgSrc: "img/yakitori.webp",
    country: "Japan",
    description:
      "Bite-sized pieces of meat (usually chicken) served on a bamboo skewer.",
    price: 150,
    moneyUnit: "￥",
  },
  {
    title: "Gyudon",
    imgSrc: "img/gyudon.jpg",
    country: "Japan",
    description:
      "Thinly sliced beef and tender onions cooked in savory-sweet sauce",
    price: 200,
    moneyUnit: "￥",
  },
  {
    title: "Karjalanpiirakka",
    imgSrc: "img/karjalanpiirakka.jpg",
    country: "Finland",
    description:
      "The rye crust is traditionally filled with rice porridge and topped with egg butter. It is eaten in Finland for breakfast, as a snack, and even served at weddings.",
    price: 10,
    moneyUnit: "€",
  },
  {
    title: "Ruisleipa",
    imgSrc: "img/ruisleipa.jpg",
    country: "Finland",
    description:
      "This bread is one of Finland's staple foods and a partof Finns' cultural identity for thousands of years. Leavened rye breads are often dried into thin crisp for open-faced sandwiches or to be snacked on with butter.",
    price: 5,
    moneyUnit: "€",
  },
  {
    title: "Leipajuusto",
    imgSrc: "img/leipajuusto.jpg",
    country: "Finland",
    description:
      "Leipajuusto is a fresh cheese traditionally made from cow's beestings - rich milk from a cow that has recently calved. It's often served alongside coffee or with cloudberry jam.",
    price: 20,
    moneyUnit: "€",
  },
  {
    title: "Kalakukko",
    imgSrc: "img/kalakukko.jpg",
    country: "Finland",
    description:
      "It is traditionally prepared with rye flour, seasoned with salt, and filled with fish, pork and bacon. When the bones of the fish soften, the meat and fish juice cook throughout the bread in the oven for hours to result in a moist filling",
    price: 30,
    moneyUnit: "€",
  },
  {
    title: "Mustikkapiirakka ",
    imgSrc: "img/mustikkapirakka.jpg",
    country: "Finland",
    description: "Blueberry pie filled with yogurt and served with fresh milk",
    price: 15,
    moneyUnit: "€",
  },
];

let countries = ["Türkiye", "Finland", "Japan"];
let foodListFiltered= [];
// let foodListTurkiye = [];
// let foodListFinland = [];
// let foodListJapan= [];

let menuDOM = document.querySelector(".menu");
function fillMenuItems() {

  for (const food of foodList) {
    let newMenuItem = `
         <article class="menu__item menu__item--night">
         <div class="menu__item__img"><img src="${food.imgSrc}" alt=""></div>
            <div class="menu__item__column">
            <div>
            <h3 class="menu__item__title font--night">${food.title}</h3>
            <div  class="menu__item__description font--night"><p>${food.description}</p></div>
            </div>
            <div class="menu__item__price font--night"><p>${food.price} ${food.moneyUnit}</p></div>
            </div>
           </article>
        `;
    menuDOM.innerHTML += newMenuItem;
  }
}

function fillNavbar() {
  let navbarDOM = document.querySelector(".navbar__list");
  for (const country of countries) {
    let newNavbarItem = `<li><a onclick="filterCountries(this.innerHTML);" class="navbar__item"href="#">${country}</a></li>`;
    navbarDOM.innerHTML += newNavbarItem;

  }

}

function filterCountries(clickedCountry) {
  let menuItems = document.querySelectorAll('.menu__item')
  for (const item of menuItems) {
    item.style.display = "none";
  }
  for (const food of foodList) {
    if (clickedCountry === food.country) {
      foodListFiltered.push(food);
      let newMenuItem = `
         <article class="menu__item menu__item--night">
         <div class="menu__item__img"><img src="${food.imgSrc}" alt=""></div>
            <div class="menu__item__column">
            <div>
            <h3 class="menu__item__title font--night">${food.title}</h3>
            <div  class="menu__item__description font--night"><p>${food.description}</p></div>
            </div>
            <div class="menu__item__price font--night"><p>${food.price} ${food.moneyUnit}</p></div>
            </div>
           </article>
        `;
      menuDOM.innerHTML += newMenuItem;
      console.log(foodListFiltered);
    }
  }
}
