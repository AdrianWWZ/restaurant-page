const aboutPage = document.createElement("div");
aboutPage.setAttribute("class", "main");

const title = document.createElement("h1");
title.setAttribute("class", "title");
title.innerText = "About";

const aboutText = document.createElement("p");
aboutText.setAttribute("class", "about-text");
aboutText.innerText =
  "Founded by Bowen Higgins with a passion for classic homemade comfort food and a love for the diner experience. Began as a cozy eatery which quickly became a local favourite, know for its hearty food and nostalgic charm. Years later, we're still serving up the same delicious flavours and welcoming smiles that started it all.";

const contact1 = document.createElement("div");
contact1.setAttribute("class", "contact");
let contactName = document.createElement("h3");
contactName.innerText = "Saige Fuentes";
let contactRole = document.createElement("p");
contactRole.innerText = "Manager";
let contactNumber = document.createElement("p");
contactNumber.innerText = "999-999-999";
let contactEmail = document.createElement("p");
contactEmail.innerText = "manageremail@hotmail.com";
contact1.append(contactName, contactRole, contactNumber, contactEmail);

const contact2 = document.createElement("div");
contact2.setAttribute("class", "contact");
contactName = document.createElement("h3");
contactName.innerText = "Bowen Higgins";
contactRole = document.createElement("p");
contactRole.innerText = "Head Chef";
contactNumber = document.createElement("p");
contactNumber.innerText = "555-555-555";
contactEmail = document.createElement("p");
contactEmail.innerText = "headchefemail@hotmail.com";
contact2.append(contactName, contactRole, contactNumber, contactEmail);

const contact3 = document.createElement("div");
contact3.setAttribute("class", "contact");
contactName = document.createElement("h3");
contactName.innerText = "Leighton Kramer";
contactRole = document.createElement("p");
contactRole.innerText = "Head Waiter";
contactNumber = document.createElement("p");
contactNumber.innerText = "111-111-111";
contactEmail = document.createElement("p");
contactEmail.innerText = "headwaiteremail@hotmail.com";
contact3.append(contactName, contactRole, contactNumber, contactEmail);

const footer = document.createElement("div");
footer.setAttribute("class", "footer");
const creditText1 = document.createElement("p");
creditText1.innerHTML = `Background Image from
          <a href="https://unsplash.com/@scohron">Shelby Cohron</a>`;
const creditText2 = document.createElement("p");
creditText2.innerHTML = `Made by <a href="https://github.com/AdrianWWZ">Adrian Wong</a>`;
footer.append(creditText1, creditText2);

aboutPage.append(title, aboutText, contact1, contact2, contact3, footer);

export { aboutPage };
