import {navbar,footer} from './top_components'
document.getElementById("navbar").innerHTML=navbar();
let data= JSON.parse(localStorage.getItem("cardata"))

let body=document.querySelector("#products>table>tbody")
const append=(data)=>{
    body.innerHTML=null;
    data.forEach((el)=>{
let td1=document.createElement("td")
td1.innerText=el.data;




    })

}





document.getElementById("footer").innerHTML=footer();