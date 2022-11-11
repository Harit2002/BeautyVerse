import{navbar,leftSideNavbar} from "./nav_components.js"

document.getElementById('LeftSideBar').innerHTML = leftSideNavbar();
document.getElementById('navbar').innerHTML = navbar();

let name = document.getElementById("name");
let div = document.getElementById("login");
let isShown = false;
name.addEventListener("click", () => {
  if (isShown) {
    div.style.display = "none";
    isShown = false;
  } else {
    div.style.display = "block";
    isShown = true;
  }

  console.log(div);
});

let product_div = document.getElementById('product');
product_div.style.backgroundColor = "rgb(194, 0, 187)";

let home_div = document.getElementById('home');
home_div.onclick = () =>{
    window.location.href = "index.html"
  }

let order_div = document.getElementById('order');
order_div.onclick = () =>{
  window.location.href = "orderPage.html"
}