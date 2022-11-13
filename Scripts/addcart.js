import {navbar,footer} from './top_components.js'
document.getElementById("navbar").innerHTML=navbar();
import { displayLists,displaySkins,displayHair,displayPerosnal,displayMom,displayFrag,displayAyur,displayBrand} from "/-puny-corn-6420/Scripts/dropdown.js"

let data= JSON.parse(localStorage.getItem("cartdata"))
let paisa=JSON.parse(localStorage.getItem("paisa"))||"";

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



let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];
let table=document.querySelector("#tbody")
let sum=0;

const append=(data)=>{
   table.innerHTML=null;
    data.forEach((el,i)=>{
        let row=document.createElement("tr")
let item=document.createElement("td")
let img=document.createElement("img")
img.src=el.image;
img.style.width="200px"
let name=document.createElement("span")
name.innerText=el.title;
item.append(img,name)
let price=document.createElement("td")
price.innerText=el.price;
let number=document.createElement("td")
number.innerText=el.quantity;
let subtotal=document.createElement("td")

subtotal.innerHTML=Number(el.quantity)*Number(el.price);
sum=sum+(Number(el.quantity)*Number(el.price));
document.getElementById("subtotal").innerText=sum+".00";
paisa=sum;
localStorage.setItem("paisa",JSON.stringify(paisa))
document.getElementById("total").innerText=(sum+50)+".00"
let btn1=document.createElement("button")
btn1.innerText="Move To Wishlist"
btn1.className="butn"
btn1.onclick=()=>{
    wishlist.push(el)
    localStorage.setItem("wishlist",JSON.stringify(wishlist))
}

let btn2=document.createElement("button")
btn2.innerText="Edit"
btn2.className="butn"
btn2.onclick=()=>{
    window.prompt
    const Enter_QTY=prompt(`Enter number of items`)
    number.innerText=Enter_QTY;
    el.quantity=Enter_QTY;
    localStorage.setItem("cartdata",JSON.stringify(data))
    subtotal.innerHTML=Number(Enter_QTY)*Number(el.price);
    sum=(Number(Enter_QTY)*Number(el.price));
    document.getElementById("subtotal").innerText=sum+".00";
document.getElementById("total").innerText=(sum+50)+".00"
paisa=sum;
window.location.reload()
localStorage.setItem("paisa",JSON.stringify(paisa))
let sum = (localStorage.getItem("paisa")) || 0;
  document.getElementById("cart2").innerText = `₹`+sum
  
}
let btn3=document.createElement("button")
btn3.innerText="Remove"
btn3.className="butn"
btn3.onclick=()=>{

  removeData(i)

}

let row2=document.createElement("tr")
row2.append(btn1,btn2,btn3)

row.append(item,price,number,subtotal)
table.append(row,row2)





    })

}


append(data)

function removeData(i){
   window.location.reload()
   data.splice(i,1);
   localStorage.setItem("cartdata",JSON.stringify(data))
   append(data);
}




document.getElementById("footer").innerHTML=footer();
window.onload = ()=>{
  let sum = (localStorage.getItem("paisa")) || 0;
  document.getElementById("cart2").innerText = `₹`+sum
}