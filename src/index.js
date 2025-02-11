import "./style.css";
import { homePage } from "./homePage.js";
import { menuPage } from "./menuPage.js";

let currPage = "homePage";
const currentContent = document.querySelector("#content");
currentContent.appendChild(menuPage);
