import { navbar, footer } from "./top_components.js";


document.getElementById("navbar").innerHTML=navbar();
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



let debit=document.getElementById("debit_credit")
let change=0;
debit.onchange=()=>{
    change++;
    if(change%2==0){
        document.getElementById("debit").style.display="none"  
    } else
    document.getElementById("debit").style.display="block"
}
let cash=document.getElementById("cash")
let change2=0;
cash.onchange=()=>{
change2++
if(change2%2==0){
    document.getElementById("cash_on_delivery").style.display="none"  
} else
document.getElementById("cash_on_delivery").style.display="block"
}


document.getElementById("proceedcash").onclick=()=>{
    let otp=document.getElementById("otp").value;
    if(otp==""||otp.length!=4){
        alert("Enter valid otp")
    } else{
        alert("Payment successful")
    }
}