let container = document.getElementById("container");
container.innerHTML = side()

    let category = document.getElementById("ctg").addEventListener("click", showlist);
    let skin = document.getElementById("skn").addEventListener("click", showskin);
    let color = document.getElementById("color").addEventListener("click",showcolor)
    let price = document.getElementById("prc").addEventListener("click", showprice);
    let brand = document.getElementById("brnd").addEventListener("click", showbrand);
    let shades = document.getElementById("shds").addEventListener("click", showshades);
    let fomulation = document.getElementById("forml").addEventListener("click", showfom);



import {showlist, showskin,showcolor,showprice,showbrand,showshades,showfom,side} from "./com/sidebar.js"
    

let main = document.getElementById("product-list");
  let helloo = JSON.parse(localStorage.getItem("j")) || []
console.log(helloo)
  show(helloo)

function show(data){
    main.innerHTML = null;
     data[0].hair.forEach(
        (el,i) =>{          
            let div = document.createElement("div");
            let h = document.createElement("p");
            h.innerText = el.brand;
            let ing = document.createElement("img");
            ing.src = el.image;
            div.append(h,ing);
            main.append(div)
        }
     )
}














