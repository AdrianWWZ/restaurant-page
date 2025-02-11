import "./style.css";
import { homePage } from "./homePage.js";
import { menuPage } from "./menuPage.js";

let currPage = "homePage";
const currentContent = document.querySelector("#content");

const r = document.querySelector(":root");

const removePage = () => {
  while (currentContent.firstChild)
    currentContent.removeChild(currentContent.firstChild);
};

document.querySelector(".home-button").addEventListener("click", () => {
  if (currPage !== "homePage") {
    currPage = "homePage";
    removePage();
    currentContent.appendChild(homePage);
    r.style.setProperty("--main-color", "#f1f5f9");
    r.style.setProperty("--sub-color", "#cad5e2");
    r.style.setProperty("--page-height", "125%");
  }
});

document.querySelector(".menu-button").addEventListener("click", () => {
  if (currPage !== "menuPage") {
    currPage = "menuPage";
    removePage();
    currentContent.appendChild(menuPage);
    r.style.setProperty("--main-color", "#ffccd3");
    r.style.setProperty("--sub-color", "#ffa2a2");
    r.style.setProperty("--page-height", "140%");
  }
});

currentContent.appendChild(homePage);
