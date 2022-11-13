


import {navbar,footer} from './top_components.js'
document.getElementById("navbar").innerHTML=navbar();


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
        document.getElementById("cash_on_delivery").style.display="none"  
    }
}
document.getElementById("proceeddebit").onclick=()=>{
    let card=document.getElementById("cardNumber").value;
    let exp=document.getElementById("Expiry").value;
    let cvv=document.getElementById("cvv").value;


    if(card==""||card.length!=16||exp==""||cvv==""){
alert("Enter all card details")
    }else{
        window.prompt
        const Enter_otp = prompt( `Enter new otp sent to your registered number`)
        alert("Payment successful")
        document.getElementById("debit").style.display="none"  
        
    }
}
let data=JSON.parse(localStorage.getItem("addressdata"))

document.getElementById("name").innerText=data[data.length-1].name;
document.getElementById("address").innerText=data[data.length-1].address;
document.getElementById("city").innerText=data[data.length-1].city;
document.getElementById("pin").innerText=data[data.length-1].pin;

let paisa=JSON.parse(localStorage.getItem("paisa"))
document.getElementById("subtotal").innerText=paisa+".00";
document.getElementById("total").innerText=paisa+49.99+11;

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