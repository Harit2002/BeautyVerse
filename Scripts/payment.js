
import {navbar,footer} from './top_components.js'
document.getElementById("navbar").innerHTML=navbar();


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
        
    }
}
let data=JSON.parse(localStorage.getItem("addressdata"))

document.getElementById("name").innerText=data[data.length-1].name;
document.getElementById("address").innerText=data[data.length-1].address;
document.getElementById("city").innerText=data[data.length-1].city;
document.getElementById("pin").innerText=data[data.length-1].pin;
