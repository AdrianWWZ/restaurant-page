const homePage = document.createElement("div");
homePage.setAttribute("class", "main");

const title = document.createElement("h1");
title.setAttribute("class", "title");
title.innerText = "American Diner";

const intro = document.createElement("div");
intro.setAttribute("class", "intro");
const introText = document.createElement("p");
introText.innerText =
  "A casual eatery serving hearty meals along with a cozy and welcoming atmosphere. There is fast service and affordable prices, offering a comfortable place for a meal.";
intro.appendChild(introText);

const hours = document.createElement("div");
hours.setAttribute("class", "hours");
const hoursTitle = document.createElement("h3");
hoursTitle.innerText = "Hours";
const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Sunday 10am - 8pm";
const li2 = document.createElement("li");
li2.innerText = "Monday 8am - 10pm";
const li3 = document.createElement("li");
li3.innerText = "Tuesday 8am - 10pm";
const li4 = document.createElement("li");
li4.innerText = "Wednesday 8am - 10pm";
const li5 = document.createElement("li");
li5.innerText = "Thursday 8am - 10pm";
const li6 = document.createElement("li");
li6.innerText = "Friday 8am - 10pm";
const li7 = document.createElement("li");
li7.innerText = "Saturday 8am - 10pm";
ul.append(li1, li2, li3, li4, li5, li6, li7);
hours.append(hoursTitle, ul);

const location = document.createElement("div");
location.setAttribute("class", "location");
const locationTitle = document.createElement("h3");
locationTitle.innerText = "Location";
const locationText = document.createElement("p");
locationText.innerText = "11 Dine Road, Detroit";
location.append(locationTitle, locationText);

const footer = document.createElement("div");
footer.setAttribute("class", "footer");
const creditText1 = document.createElement("p");
creditText1.innerHTML = `Background Image from
          <a href="https://unsplash.com/@scohron">Shelby Cohron</a>`;
const creditText2 = document.createElement("p");
creditText2.innerHTML = `Made by <a href="https://github.com/AdrianWWZ">Adrian Wong</a>`;
footer.append(creditText1, creditText2);

homePage.append(title, intro, hours, location, footer);

export { homePage };
