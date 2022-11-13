import { navbar, footer } from "./top_components.js";
let nav_div = document.getElementById('navbar');
nav_div.innerHTML = navbar();

let go_to_register = document.getElementById("go_to_register");

go_to_register.addEventListener("click", () => {
    window.location.href = "./register.html"
})

document.getElementById("footer").innerHTML=footer();

import { displayLists,displaySkins,displayHair,displayPerosnal,displayMom,displayFrag,displayAyur,displayBrand} from "/-puny-corn-6420/Scripts/dropdown.js"


let div = document.querySelector(".open-div");
document.getElementById("makeup").addEventListener("mousemove", displayLists);
document.getElementById("makeup").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});


// for skins
document.getElementById("skin").addEventListener("mousemove", displaySkins);
document.getElementById("skin").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});

// for hair
document.getElementById("hair").addEventListener("mousemove", displayHair);
document.getElementById("hair").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});

// for personal care
document
  .getElementById("personal")
  .addEventListener("mousemove", displayPerosnal);
document.getElementById("personal").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});

// for mom care
document.getElementById("mom").addEventListener("mousemove", displayMom);
document.getElementById("mom").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});

// for fragnance
document.getElementById("frag").addEventListener("mousemove", displayFrag);
document.getElementById("frag").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});

// for ayurveda
document.getElementById("aurveda").addEventListener("mousemove", displayAyur);
document.getElementById("aurveda").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});

// for brand
document.getElementById("brand").addEventListener("mousemove", displayBrand);
document.getElementById("brand").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});
window.onload = ()=>{
  let sum = (localStorage.getItem("paisa")) || 0;
  document.getElementById("cart2").innerText = `₹`+sum
}

let lsdata = JSON.parse(localStorage.getItem("personal_data"));

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;
    if (lsdata.email == email) {
        if (lsdata.password == password) {
            alert("Sign in Succesfull")
            window.location.href = "./index.html"
        } else if (lsdata.password == null) {
            alert("Plese Enter Password")
        } else {
            alert("Please Enter Correct Password")
        }
    } else {
        alert("Invalid Details")
    }
})

//fuc to update user name
let user_div = document.getElementById('Uname');
function changeName(){
  let udata = JSON.parse(localStorage.getItem('personal_data'));
  if(udata){
    user_div.innerHTML = null;
    let h4 = document.createElement('h4');
    h4.innerText=udata.first_name;
    user_div.append(h4);
  }
}
changeName();