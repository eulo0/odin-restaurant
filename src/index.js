import { home, homeRef } from "./home.js";
import { menu, menuRef } from "./menu.js"; 
import { about } from "./about.js";
import "./styles.css";

(() => {
    const navBtns = document.querySelectorAll(".nav-btn");
    const content = document.getElementById("content");
    const content2 = document.getElementById("content2");
    const homeBtn = document.getElementById("Home");
    const menuBtn = document.getElementById("Menu");

    for (const btn of navBtns){
        btn.addEventListener("click", () => {
            content.textContent = "";
            content2.textContent = "";
        }); 
    }

    homeBtn.addEventListener("click", () => {
        content.append(home());
        content2.append(homeRef());
    });

    menuBtn.addEventListener("click", () => {
        content.append(menu());
        content2.append(menuRef());
    });

    content.append(home());
    content2.append(homeRef());
})(); 