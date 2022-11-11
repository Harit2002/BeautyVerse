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





let submit=document.getElementById("proceed")
submit.style.backgroundColor="#dd0285"
submit.style.color="white";
submit.style.border="none"

let form=document.getElementById("shippingform")
let addressdata=[];
form.onsubmit=(el)=>{
    el.preventDefault()
userdata()

}

const userdata=()=>{
    
    let obj={
        name:form.firtname.value,
        address:form.address.value,
        city:form.city.value,
        country:form.country.value,
        Number:form.mobile.value,
        pin:form.pincode.value,
    }
    addressdata.push(obj)
    localStorage.setItem("addressdata",JSON.stringify(addressdata))
    let link=document.createElement("a")
    link.href="payment.html"
   link.style.display="flex"
   link.style.justifyContent="center"
   link.style.margin="10px"
   link.style.textDecoration="none"
    
    let btn=document.createElement("button")
    btn.innerText="proceed to pay"
    btn.style.padding="10px"
    btn.style.background="#dd0285"
    btn.style.color="white"
    btn.style.border="none"
    
    link.append(btn)
   
    document.querySelector("#leftside").append(link)
   
}