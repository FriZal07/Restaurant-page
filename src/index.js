import "./css/home.css";
import "./css/menu.css"
import "./css/about.css"
import "./img/cook.jpg"
import "./img/food1.jpg"
import "./img/food2.jpg"
import "./img/food3.jpg"
import "./img/food4.jpeg"
import { loadfrontpage } from "./frontpage";
import { loadmenupage } from "./menupage";
import { loadaboutpage } from "./aboutpage";

loadfrontpage();

const homeButton = document.querySelector("#home")
const menuButton = document.querySelector("#menu")
const aboutButton = document.querySelector("#about")

homeButton.addEventListener('click',()=>{
    clearHTML();
    loadfrontpage();
})

menuButton.addEventListener('click',()=>{
    clearHTML();
    loadmenupage();
})

aboutButton.addEventListener('click',()=>{
    clearHTML();
    loadaboutpage();
})

const clearHTML = function(){
    const content = document.querySelector("#content")
    content.innerHTML = '';
}

