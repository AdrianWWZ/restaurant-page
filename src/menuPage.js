const menuPage = document.createElement("div");
menuPage.setAttribute("class", "main");

const title = document.createElement("h1");
title.setAttribute("class", "title");
title.innerText = "Menu";

const menuItem1 = document.createElement("div");
menuItem1.setAttribute("class", "menu-item");
let img = document.createElement("img");
img.setAttribute("class", "food-img food1");
img.src =
  "https://images.unsplash.com/photo-1587339144367-f1cacbecac82?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
img.alt = "Pancakes with Fruits on top";
let description = document.createElement("div");
description.setAttribute("class", "description");
let itemTitle = document.createElement("h3");
itemTitle.innerText = "Berry Pancake Stack";
let itemText = document.createElement("p");
itemText.innerText =
  "A towering stack of fluffy pancakes, topped with a generous handful of fresh rasberries and blueberries, dusted with powdered sugar and served with a side of warm maple syrup.";
let itemPrice = document.createElement("h4");
itemPrice.innerText = "$5";
description.append(itemTitle, itemText, itemPrice);
menuItem1.append(img, description);

const menuItem2 = document.createElement("div");
menuItem2.setAttribute("class", "menu-item");
img = document.createElement("img");
img.setAttribute("class", "food-img food2");
img.src =
  "https://images.unsplash.com/photo-1606851093094-3d3c3e541ee9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
img.alt = "Fried bacon and Eggs on an Iron Skillet";
description = document.createElement("div");
description.setAttribute("class", "description");
itemTitle = document.createElement("h3");
itemTitle.innerText = "Bacon & Eggs Skillet";
itemText = document.createElement("p");
itemText.innerText =
  "Two sunny-side-up eggs paired with crispy strips of bacon, served straight from the skillet.";
itemPrice = document.createElement("h4");
itemPrice.innerText = "$7";
description.append(itemTitle, itemText, itemPrice);
menuItem2.append(img, description);

const menuItem3 = document.createElement("div");
menuItem3.setAttribute("class", "menu-item");
img = document.createElement("img");
img.setAttribute("class", "food-img food3");
img.src =
  "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
img.alt = "Cheeseburger";
description = document.createElement("div");
description.setAttribute("class", "description");
itemTitle = document.createElement("h3");
itemTitle.innerText = "Classic Cheeseburger";
itemText = document.createElement("p");
itemText.innerText =
  "A grilled beef patty layered with cheddar cheese, lettuce, tomatoes, pickles, and sweet onions. Nestled in between sesame seed buns and finished with a spread off kethcup and mayonaise.";
itemPrice = document.createElement("h4");
itemPrice.innerText = "$4";
description.append(itemTitle, itemText, itemPrice);
menuItem3.append(img, description);

const footer = document.createElement("div");
footer.setAttribute("class", "footer");
const creditText1 = document.createElement("p");
creditText1.innerHTML = `Food Images from
            <a href="https://unsplash.com/@tata186">Tatiana Rodriguez </a>,
            <a href="https://unsplash.com/@wrightbrand">Wright Brand Bacon</a>,
            <a href="https://unsplash.com/@mashkov">Ilya Mashkov</a>`;
const creditText2 = document.createElement("p");
creditText2.innerHTML = `Background Image from
          <a href="https://unsplash.com/@scohron">Shelby Cohron</a>`;
const creditText3 = document.createElement("p");
creditText3.innerHTML = `Made by <a href="https://github.com/AdrianWWZ">Adrian Wong</a>`;
footer.append(creditText1, creditText2, creditText3);

menuPage.append(title, menuItem1, menuItem2, menuItem3, footer);

export { menuPage };
