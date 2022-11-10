let lsdata = JSON.parse(localStorage.getItem("personal_data"));

let form = document.getElementById("form");
let AppendButtonHere = document.getElementById("AppendButtonHere")
AppendButtonHere.addEventListener("click", () => {
    window.location.href = "./signin.html"
})
form.addEventListener("submit", function (e) {
    e.preventDefault()
    AppendButtonHere.innerHTML = null
    let obj = {
        first_name: form.first_name.value,
        last_name: form.last_name.value,
        email: form.email.value,
        phone: form.phone.value,
        password: form.password.value,

    }

    localStorage.setItem("personal_data", JSON.stringify(obj))
    let button = document.createElement("button")
    button.innerText = "Go to sign in now"
    AppendButtonHere.append(button)
})