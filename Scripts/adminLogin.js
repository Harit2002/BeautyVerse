import { navbar, footer } from "./top_components.js";
let nav_div = document.getElementById('navbar');
nav_div.innerHTML = navbar();


let go_to_register = document.getElementById("go_to_register");

go_to_register.addEventListener("click", () => {
    window.location.href = "./adminRegister.html"
})

let lsdata = JSON.parse(localStorage.getItem("admin_data"));

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let email = document.getElementById("email").value;
    let employeeCode = document.getElementById("employeeCode").value;
    let password = document.getElementById("password").value;
    if (lsdata.email == email) {
        if (lsdata.password == password && lsdata.employeeCode == employeeCode) {
            alert("Sign in Succesfull")
            window.location.href = "/-puny-corn-6420/Admin_page/index.html"
        } else if (lsdata.password == null) {
            alert("Plese Enter Password")
        } else {
            alert("Please Enter Correct Password")
        }
    } else {
        alert("Invalid Details")
    }
})
