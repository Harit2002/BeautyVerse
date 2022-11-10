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




let body=document.querySelector("#products>table>tbody")
const append=(data)=>{
    body.innerHTML=null;
    data.forEach((el)=>{
let td1=document.createElement("td")
td1.innerText=el.data;




    })

}





document.getElementById("footer").innerHTML=footer();