import { navbar, footer } from "./top_components.js";
document.getElementById("navbar").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();

   
let carousel_div=document.getElementById("carousel");

function carousel(){

  // let images=["https://www.beautybebo.com/pub/media/ads/home-slider/Slider_banner_1-min.jpg","https://www.beautybebo.com/pub/media/ads/home-slider/Mamaearth_banner_1-min.jpg","https://www.beautybebo.com/pub/media/ads/home-slider/Ponds_Forent_Banner_6-min.jpg"];
  let images=["https://cdn.shopify.com/s/files/1/0428/8063/0937/files/proedit-1920x500_1800x.jpg?v=1667471675","https://cdn.shopify.com/s/files/1/2801/8342/collections/All-products_2000x.progressive.jpg?v=1667985003","https://www.maybelline.com/~/media/mny/us/homepage-modules/homepage-carousel/maybelline-day/homepage_hero_desktop_3.jpg"]
  let image=document.createElement("img");
  image.src=images[0];
  image.style.width = "100%"
  image.style.height = "325px"

  carousel_div.append(image);
  let i=1;
  setInterval(function(){
    if(i==images.length){
        i=0;
    }
   image.src=images[i];
   carousel_div.append(image);
   i++;
  },3000);
}

carousel();

import { displayLists,displaySkins,displayHair,displayPerosnal,displayMom,displayFrag,displayAyur,displayBrand} from "/-puny-corn-6420/Scripts/dropdown.js"


let div = document.querySelector(".open-div");
document.getElementById("makeup").addEventListener("mousemove", displayLists);
document.getElementById("makeup").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});


// for skins
document.getElementById("skin").addEventListener("mousemove", displaySkins);
document.getElementById("skin").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});

// for hair
document.getElementById("hair").addEventListener("mousemove", displayHair);
document.getElementById("hair").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});

// for personal care
document
  .getElementById("personal")
  .addEventListener("mousemove", displayPerosnal);
document.getElementById("personal").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});

// for mom care
document.getElementById("mom").addEventListener("mousemove", displayMom);
document.getElementById("mom").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});

// for fragnance
document.getElementById("frag").addEventListener("mousemove", displayFrag);
document.getElementById("frag").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});

// for ayurveda
document.getElementById("aurveda").addEventListener("mousemove", displayAyur);
document.getElementById("aurveda").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});

// for brand
document.getElementById("brand").addEventListener("mousemove", displayBrand);
document.getElementById("brand").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});
window.onload = ()=>{
  let sum = (localStorage.getItem("paisa")) || 0;
  document.getElementById("cart2").innerText = `₹`+sum
}


let secondMain = document.getElementById("midn");
let main = document.getElementById("midnavData");
document.getElementById("make2").onclick = ()=>{
        makeup(helloo)
}
document.getElementById("skin2").addEventListener("click",function(){
        skin(helloo)
})
document.getElementById("hair2").addEventListener("click",function(){
  hair(helloo)
})
document.getElementById("personal2").addEventListener("click",function(){
  personal(helloo)
})
document.getElementById("mom2").addEventListener("click",function(){
  kids(helloo)
})
document.getElementById("eye2").addEventListener("click",function(){
  ayurveda(helloo)
})
document.getElementById("frag2").addEventListener("click",function(){
  fragrance(helloo)
})

  let helloo = JSON.parse(localStorage.getItem("k")) || []
console.log(helloo)
makeup(helloo);



let cartArr = JSON.parse(localStorage.getItem("cartdata")) || []
function makeup(data){
    main.innerHTML = null;
     data[0].makeup.forEach(
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
          // button.innerHTML = '<img src="cart-38-24.png" alt="">';
          button.addEventListener("click", addMoney);
          function addMoney(){
            let store = (localStorage.getItem("paisa")) || 0;
            let sum = eval(Number(el.price)+(Number(store)))
            localStorage.setItem("paisa",(sum))

            document.getElementById("cart2").innerText = `₹`+sum
          }
          window.onload = ()=>{
            let sum = (localStorage.getItem("paisa")) || 0;
            document.getElementById("cart2").innerText = `₹`+sum
          }
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
          
          card.onclick =()=>{
            cartArr.push(el)
            localStorage.setItem("cartdata", JSON.stringify(cartArr))
          }
          main.append(card);


        
        }
     )
}
function skin(data){
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
        button.addEventListener("click", addMoney);
        function addMoney(){
          let store = (localStorage.getItem("paisa")) || 0;
          let sum = eval(Number(el.price)+(Number(store)))
          localStorage.setItem("paisa",(sum))

          document.getElementById("cart2").innerText = `₹`+sum
        }
        window.onload = ()=>{
          let sum = (localStorage.getItem("paisa")) || 0;
          document.getElementById("cart2").innerText = `₹`+sum
        }

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
        card.onclick =()=>{
          cartArr.push(el)
          localStorage.setItem("cartdata", JSON.stringify(cartArr))
        }
        // window.onload = ()=>{
        //   cartArr.push(el)
        //   localStorage.setItem("cartdata", JSON.stringify(cartArr))
        // }
        
        main.append(card);

      
      }
   )
}
function hair(data){
  main.innerHTML = null;
   data[0].hair.forEach(
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
        button.addEventListener("click", addMoney);
        function addMoney(){
          let store = (localStorage.getItem("paisa")) || 0;
          let sum = eval(Number(el.price)+(Number(store)))
          localStorage.setItem("paisa",(sum))

          document.getElementById("cart2").innerText = `₹`+sum
        }
        window.onload = ()=>{
          let sum = (localStorage.getItem("paisa")) || 0;
          document.getElementById("cart2").innerText = `₹`+sum
        }
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
        card.onclick =()=>{
          cartArr.push(el)
          localStorage.setItem("cartdata", JSON.stringify(cartArr))
        }
        main.append(card);

      
      }
   )
}
function personal(data){
  main.innerHTML = null;
   data[0].personal.forEach(
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
        button.addEventListener("click", addMoney);
        function addMoney(){
          let store = (localStorage.getItem("paisa")) || 0;
          let sum = eval(Number(el.price)+(Number(store)))
          localStorage.setItem("paisa",(sum))

          document.getElementById("cart2").innerText = `₹`+sum
        }
        window.onload = ()=>{
          let sum = (localStorage.getItem("paisa")) || 0;
          document.getElementById("cart2").innerText = `₹`+sum
        }
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
        card.onclick =()=>{
          cartArr.push(el)
          localStorage.setItem("cartdata", JSON.stringify(cartArr))
        }
        main.append(card);

      
      }
   )
}
function kids(data){
  main.innerHTML = null;
   data[0].kids.forEach(
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
        button.addEventListener("click", addMoney);
        function addMoney(){
          let store = (localStorage.getItem("paisa")) || 0;
          let sum = eval(Number(el.price)+(Number(store)))
          localStorage.setItem("paisa",(sum))

          document.getElementById("cart2").innerText = `₹`+sum
        }
        window.onload = ()=>{
          let sum = (localStorage.getItem("paisa")) || 0;
          document.getElementById("cart2").innerText = `₹`+sum
        }
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
        card.onclick =()=>{
          cartArr.push(el)
          localStorage.setItem("cartdata", JSON.stringify(cartArr))
        }
        main.append(card);

      
      }
   )
}
function fragrance(data){
  main.innerHTML = null;
   data[0].perfume.forEach(
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
        button.addEventListener("click", addMoney);
        function addMoney(){
          let store = (localStorage.getItem("paisa")) || 0;
          let sum = eval(Number(el.price)+(Number(store)))
          localStorage.setItem("paisa",(sum))

          document.getElementById("cart2").innerText = `₹`+sum
        }
        window.onload = ()=>{
          let sum = (localStorage.getItem("paisa")) || 0;
          document.getElementById("cart2").innerText = `₹`+sum
        }
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
        card.onclick =()=>{
          cartArr.push(el)
          localStorage.setItem("cartdata", JSON.stringify(cartArr))
        }
        main.append(card);

      
      }
   )
}
function ayurveda(data){
  main.innerHTML = null;
   data[0].ayurveda.forEach(
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
        button.addEventListener("click", addMoney);
        function addMoney(){
          let store = (localStorage.getItem("paisa")) || 0;
          let sum = eval(Number(el.price)+(Number(store)))
          localStorage.setItem("paisa",(sum))

          document.getElementById("cart2").innerText = `₹`+sum
        }
        window.onload = ()=>{
          let sum = (localStorage.getItem("paisa")) || 0;
          document.getElementById("cart2").innerText = `₹`+sum
        }
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
        card.onclick =()=>{
          cartArr.push(el)
          localStorage.setItem("cartdata", JSON.stringify(cartArr))
        }
        main.append(card);

      
      }
   )
}
 


//fuc to update user name
let user_div = document.getElementById('Uname');
function changeName(){
  let udata = JSON.parse(localStorage.getItem('personal_data'));
  if(udata){
    user_div.innerHTML = null;
    let h4 = document.createElement('h4');
    h4.innerText=udata.first_name;
    user_div.append(h4);
  }
}
changeName();

// function person(data){
//   secondMain.innerHTML = null;
//    data[0].personal.forEach(
//       (el) =>{          
//         let card = document.createElement("div");
//         card.setAttribute("id", "card");
    
//         let img = document.createElement("img");
//         img.src = el.image;
//         // img.addEventListener("click", function () {
//         //   aariftit(elem);
//         // });
    
//         // let sale = document.createElement("div");
//         // sale.setAttribute("id", "sale");
//         // sale.innerText = "Sale";
    
//         let info = document.createElement("div");
//         info.setAttribute("id", "info");
    
//         let title = document.createElement("p");
//         title.innerText = el.title;
//         // title.addEventListener("click", function () {
//         //   aariftit(elem);
//         // });
    
//         let rating = document.createElement("div");
//         rating.setAttribute("id", "rating");
//         rating.innerHTML = `<span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>`;
    
//         let priceDiv = document.createElement("div");
//         priceDiv.setAttribute("id", "price-div");
    
//         let span1 = document.createElement("div");
//         span1.setAttribute("id", "span1");
//         if (el.strikedOffPrice != "") {
//           span1.innerText = `₹${el.strikedOffPrice}`;
//         } else {
//           span1.innerText = "";
//         }
    
//         let span2 = document.createElement("div");
//         span2.setAttribute("id", "span2");
//         span2.innerText = `₹${el.price}`;
    
//         let span3 = document.createElement("div");
//         span3.setAttribute("id", "span3");
//         span3.innerText = el.discount;
    
//         let btnDiv = document.createElement("div");
//         btnDiv.setAttribute("id", "btn-div");
    
//         let button = document.createElement("button");
//         button.innerHTML = '<img src="cart-38-24.png" alt="">';
//         // button.addEventListener("click", function () {
//         //   addel(elem);
//         // });
//         button.addEventListener("click", addMoney);
//         function addMoney(){
//           let store = (localStorage.getItem("paisa")) || 0;
//           let sum = eval(Number(el.price)+(Number(store)))
//           localStorage.setItem("paisa",(sum))

//           document.getElementById("cart2").innerText = `₹`+sum
//         }
//         window.onload = ()=>{
//           let sum = (localStorage.getItem("paisa")) || 0;
//           document.getElementById("cart2").innerText = `₹`+sum
//         }
//         let spanBtn = document.createElement("span");
//         spanBtn.innerText = "Add To Cart";
//         button.append(spanBtn);
    
//         let spanfav = document.createElement("span");
//         spanfav.setAttribute("id", "fav");
//         spanfav.innerHTML = "🤍";
    
//         priceDiv.append(span1, span2, span3);
//         btnDiv.append(button, spanfav);
//         info.append(title, rating, priceDiv, btnDiv);
//         card.append(img,info);
//         card.onclick =()=>{
//           cartArr.push(el)
//           localStorage.setItem("cartdata", JSON.stringify(cartArr))
//         }
//         secondMain.append(card);

      
//       }
//    )
// }
// person(helloo)

// function kid(data){
//   secondMain.innerHTML = null;
//    data[0].kids.forEach(
//       (el) =>{          
//         let card = document.createElement("div");
//         card.setAttribute("id", "card");
    
//         let img = document.createElement("img");
//         img.src = el.image;
//         // img.addEventListener("click", function () {
//         //   aariftit(elem);
//         // });
    
//         // let sale = document.createElement("div");
//         // sale.setAttribute("id", "sale");
//         // sale.innerText = "Sale";
    
//         let info = document.createElement("div");
//         info.setAttribute("id", "info");
    
//         let title = document.createElement("p");
//         title.innerText = el.title;
//         // title.addEventListener("click", function () {
//         //   aariftit(elem);
//         // });
    
//         let rating = document.createElement("div");
//         rating.setAttribute("id", "rating");
//         rating.innerHTML = `<span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>`;
    
//         let priceDiv = document.createElement("div");
//         priceDiv.setAttribute("id", "price-div");
    
//         let span1 = document.createElement("div");
//         span1.setAttribute("id", "span1");
//         if (el.strikedOffPrice != "") {
//           span1.innerText = `₹${el.strikedOffPrice}`;
//         } else {
//           span1.innerText = "";
//         }
    
//         let span2 = document.createElement("div");
//         span2.setAttribute("id", "span2");
//         span2.innerText = `₹${el.price}`;
    
//         let span3 = document.createElement("div");
//         span3.setAttribute("id", "span3");
//         span3.innerText = el.discount;
    
//         let btnDiv = document.createElement("div");
//         btnDiv.setAttribute("id", "btn-div");
    
//         let button = document.createElement("button");
//         button.innerHTML = '<img src="cart-38-24.png" alt="">';
//         // button.addEventListener("click", function () {
//         //   addel(elem);
//         // });
//         button.addEventListener("click", addMoney);
//         function addMoney(){
//           let store = (localStorage.getItem("paisa")) || 0;
//           let sum = eval(Number(el.price)+(Number(store)))
//           localStorage.setItem("paisa",(sum))

//           document.getElementById("cart2").innerText = `₹`+sum
//         }
//         window.onload = ()=>{
//           let sum = (localStorage.getItem("paisa")) || 0;
//           document.getElementById("cart2").innerText = `₹`+sum
//         }
//         let spanBtn = document.createElement("span");
//         spanBtn.innerText = "Add To Cart";
//         button.append(spanBtn);
    
//         let spanfav = document.createElement("span");
//         spanfav.setAttribute("id", "fav");
//         spanfav.innerHTML = "🤍";
    
//         priceDiv.append(span1, span2, span3);
//         btnDiv.append(button, spanfav);
//         info.append(title, rating, priceDiv, btnDiv);
//         card.append(img, sale, info);
//         card.onclick =()=>{
//           cartArr.push(el)
//           localStorage.setItem("cartdata", JSON.stringify(cartArr))
//         }
//         secondMain.append(card);

      
//       }
//    )
// }
// kid(helloo)








