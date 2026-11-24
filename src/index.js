import { home } from "./home.js";
import { menu } from "./menu.js"; 
import { about } from "./about.js";
import "./styles.css";

const navBtns = document.querySelectorAll(".nav-btn");
const container = document.getElementById("content");

for (const btn of navBtns){
    btn.addEventListener("click", () => {
        container.textContent = "";
        console.log("yessir");
    }); 
}