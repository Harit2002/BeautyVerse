import { navbar, footer } from "./top_components.js";




document.getElementById("navbar").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();

import { displayLists,displaySkins,displayHair,displayPerosnal,displayMom,displayFrag,displayAyur,displayBrand} from "./dropdown.js"


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
let addressdata=JSON.parse(localStorage.getItem("addressdata"))||[];
form.onsubmit=(el)=>{
    el.preventDefault()
userdata()

}
let count=0;
const userdata=()=>{
    // if(form.firtname.value==""||form.address.value==""||form.mobile.value==""||form.pincode.value==""){
    //     alert("Enter all details")
    //     return;
    // }
    count++
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
   if(count==1){
    document.querySelector("#leftside").append(link)
   }
   
   
}

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