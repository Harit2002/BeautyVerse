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
