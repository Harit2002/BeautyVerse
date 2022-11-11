import { navbar, footer } from "./top_components.js";
let nav_div = document.getElementById('navbar');
nav_div.innerHTML = navbar();

let go_to_register = document.getElementById("go_to_register");

go_to_register.addEventListener("click", () => {
    window.location.href = "./register.html"
})