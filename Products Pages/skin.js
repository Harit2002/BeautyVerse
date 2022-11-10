import { navbar,footer } from "/-puny-corn-6420/Scripts/top_components.js";
 document.getElementById("navbar").innerHTML=navbar();
// document.getElementById("navbar").innerHTML=footer();
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
     data[0].skin.forEach(
        (el) =>{          
          let card = document.createElement("div");
          card.setAttribute("id", "card");
      
          let img = document.createElement("img");
          img.src = el.image;
          // img.addEventListener("click", function () {
          //   aariftit(elem);
          // });
      
          let sale = document.createElement("div");
          sale.setAttribute("id", "sale");
          sale.innerText = "Sale";
      
          let info = document.createElement("div");
          info.setAttribute("id", "info");
      
          let title = document.createElement("p");
          title.innerText = el.title;
          // title.addEventListener("click", function () {
          //   aariftit(elem);
          // });
      
          let rating = document.createElement("div");
          rating.setAttribute("id", "rating");
          rating.innerHTML = `<span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>`;
      
          let priceDiv = document.createElement("div");
          priceDiv.setAttribute("id", "price-div");
      
          let span1 = document.createElement("div");
          span1.setAttribute("id", "span1");
          if (el.strikedOffPrice != "") {
            span1.innerText = `₹${el.strikedOffPrice}`;
          } else {
            span1.innerText = "";
          }
      
          let span2 = document.createElement("div");
          span2.setAttribute("id", "span2");
          span2.innerText = `₹${el.price}`;
      
          let span3 = document.createElement("div");
          span3.setAttribute("id", "span3");
          span3.innerText = el.discount;
      
          let btnDiv = document.createElement("div");
          btnDiv.setAttribute("id", "btn-div");
      
          let button = document.createElement("button");
          button.innerHTML = '<img src="cart-38-24.png" alt="">';
          // button.addEventListener("click", function () {
          //   addel(elem);
          // });
          let spanBtn = document.createElement("span");
          spanBtn.innerText = "Add To Cart";
          button.append(spanBtn);
      
          let spanfav = document.createElement("span");
          spanfav.setAttribute("id", "fav");
          spanfav.innerHTML = "🤍";
      
          priceDiv.append(span1, span2, span3);
          btnDiv.append(button, spanfav);
          info.append(title, rating, priceDiv, btnDiv);
          card.append(img, sale, info);
          
          main.append(card);

        
        }
     )
}

document.getElementById("sort").addEventListener("change", function(){
                     
  let value = document.getElementById("sort").value;
    if (value === "htl") {
      helloo[0].skin.sort((a, b) => {
        return +b.price - Number(a.price);
      });

      show(helloo);
    }

    if (value === "lth") {
      helloo[0].skin.sort((a, b) => {
        return +a.price - Number(b.price);
      });

      show(helloo) ;
    }
    if (value === "productName") {
     
      helloo[0].skin.reverse();
      helloo[0].skin.sort((a, b) => {
          return a.title - b.title- b.title;
        }
      );
      show(helloo);
    }
    if (value === "position") {
     
      helloo[0].skin.reverse();
      helloo[0].skin.sort((a, b) => {
          return a.title - b.title- b.title-a.title;
        }
      );
      show(helloo);
    }
    if (value === "newArrival") {
     
      helloo[0].skin.reverse();
      helloo[0].skin.sort((a, b) => {
          return a.title - a.title;
        }
      );
      show(helloo);
    }
});
