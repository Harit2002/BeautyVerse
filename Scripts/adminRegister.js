
import { navbar, footer } from "./top_components.js";
let nav_div = document.getElementById('navbar');
nav_div.innerHTML = navbar();




let form = document.getElementById("form");
let AppendButtonHere = document.getElementById("AppendButtonHere")
AppendButtonHere.addEventListener("click", () => {
    window.location.href = "./adminLogin.html"
})
let lsdata = JSON.parse(localStorage.getItem("admin_data"));
form.addEventListener("submit", function (e) {
    e.preventDefault()
    AppendButtonHere.innerHTML = null
    let obj = {
        first_name: form.first_name.value,
        last_name: form.last_name.value,
        email: form.email.value,
        phone: form.phone.value,
        password: form.password.value,
        employeeCode: form.employeeCode.value,

    }

    localStorage.setItem("admin_data", JSON.stringify(obj))
    let button = document.createElement("button")
    button.innerText = "Go to Admin sign in now"
    AppendButtonHere.append(button)
})