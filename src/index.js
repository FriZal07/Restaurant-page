import "./css/home.css";
import "./css/menu.css"
import "./css/about.css"
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

