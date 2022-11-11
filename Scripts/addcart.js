import {navbar,footer} from './top_components.js'
document.getElementById("navbar").innerHTML=navbar();
let data= JSON.parse(localStorage.getItem("cardata"))

let formdata=document.getElementById("tax_data")
let clickcount=0;
formdata.onclick=()=>{
    clickcount++;
    if(clickcount%2==0){
        document.getElementById("cart_form").style.display="none";
    } else
    document.getElementById("cart_form").style.display="block";
}

let discount=document.getElementById("applydiscount")
let clickcount2=0;
discount.onclick=()=>{
    clickcount2++
    if(clickcount2%2==0){
        document.getElementById("discount").style.display="none"
    } else {
        document.getElementById("discount").style.display="block"
    }
}
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




let body=document.querySelector("#products>table>tbody")
const append=(data)=>{
    body.innerHTML=null;
    data.forEach((el)=>{
let td1=document.createElement("td")
td1.innerText=el.data;




    })

}





document.getElementById("footer").innerHTML=footer();
window.onload = ()=>{
  let sum = (localStorage.getItem("paisa")) || 0;
  document.getElementById("cart2").innerText = `₹`+sum
}