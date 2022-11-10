





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