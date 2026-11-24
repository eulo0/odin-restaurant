import { home } from "./home.js";
import { menu } from "./menu.js"; 
import { about } from "./about.js";
import "./styles.css";

const navBtns = document.querySelectorAll(".nav-btn");
const container = document.getElementById("content");
const homeBtn = document.getElementById("Home");
const menuBtn = document.getElementById("Menu");

for (const btn of navBtns){
    btn.addEventListener("click", () => {
        container.textContent = "";
    }); 
}

homeBtn.addEventListener("click", () => {
    container.append(home());
});

menuBtn.addEventListener("click", () => {
    container.append(menu());
});

container.append(home());