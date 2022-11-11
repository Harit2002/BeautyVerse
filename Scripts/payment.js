



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