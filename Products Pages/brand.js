import { navbar,footer } from "/-puny-corn-6420/Scripts/top_components.js";
 document.getElementById("navbar").innerHTML=navbar();
// document.getElementById("navbar").innerHTML=footer();


    import { displayLists,displaySkins,displayHair,displayPerosnal,displayMom,displayFrag,displayAyur,displayBrand} from "/-puny-corn-6420/Scripts/dropdown.js"


import {showlist, showskin,showcolor,showprice,showbrand,showshades,showfom,side} from "./com/sidebar.js"
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
document.getElementById("brand").style.backgroundColor = "#b7026f";
document.getElementById("makeup").style.backgroundColor = "#dd0285";