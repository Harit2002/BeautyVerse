import {navbar,footer} from './top_components.js'
document.getElementById("navbar").innerHTML=navbar();
let data= JSON.parse(localStorage.getItem("cardata"))

let formdata=document.getElementById("tax_data")
let clickcount=0;
formdata.onclick=()=>{
    clickcount++;
    if(clickcount%2==0){
        document.getElementById("cart_form").style.display="none";
    } else
    document.getElementById("cart_form").style.display="block";
}

let discount=document.getElementById("applydiscount")
let clickcount2=0;
discount.onclick=()=>{
    clickcount2++
    if(clickcount2%2==0){
        document.getElementById("discount").style.display="none"
    } else {
        document.getElementById("discount").style.display="block"
    }
}
document.getElementById("footer").innerHTML=footer();

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

let product=[
    {
        image: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/7/277cf77missc00000081_1.jpg',
        title: 'Miss Claire Eyelash Glue - Clear Tone',
        weight: '(50gm)',
        quantity: 1,
        id: 'BBJ0003398',
        strikedOffPrice: '350.00',
        price: "322.00",
        discount: '8% Off',
        brand: 'Miss Claire',
        discription: `Go long and strong in your lash-game with Miss Claire Eyelash Glue. Let’s get all your falsies in their place to slay all day long. This gentle eyelash adhesive is latex free, non-toxic and pH-balanced for safe use. It is waterproof and holds your eyelashes securely in place making them look natural and flawless. It features a handy bottle with an easy-to-use applicator and a formula that blends in seamlessly. Clear tone allows seamless bond between extension and natural lashes.
                MRP : 350
                Best Before : JAN 2024
                About the Brand: Presenting an entire colorful range of face, lips and eye cosmetics that enhance your beauty and amplify your daily make-up looks. Loved by makeup fans across India, Miss Claire cosmetics are of premier quality, trendy, affordable and are formulated using the finest ingredients that care for your skin. The products are manufactured in accordance with European Standards. Choose from a huge range of Miss Claire makeup and beauty products right from lipstick, bronzers, highlighters, foundation, eyeliners to concealers all available in highly pigmented formula and textures. Miss Claire makeup products are affordably priced, long lasting and suit all skin tones.
                Origin : Made In South Korea
                Name of Mfg / Importer / Brand: Eureka Cosmo Pvt. Ltd. Address of Mfg / Importer / Brand: Eureka Cosmo Pvt. Ltd. 13, Gokul Regency-Ii, Thakur Complex, Kandivali (E), Mumbai -400 101.`,
        productCategory: 'Eyes',
        skinType: 'All Skin Type',
        shades: 'Peach Rose',
        multipleImages: ['https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/7/277cf77missc00000081_1.jpg', 'https://www.beautybebo.com/pub/media/catalog/produ…ae888adf23d57cf627ad/5/1/51ccwnye-ks._sl1094_.jpg'],
        howToUse: `Step 1: Dot a thin layer of glue straight from the applicator along the band of the false lash from corner to corner.
    Step 2: Wait 30 seconds for the adhesive to become sticky.
    Step 3: Adhere the strip to your lash line and gently press it in place.
    Step 4: Ensure the cap is secure post every use to avoid the glue from drying out.`
    },
    {
        image: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/6/3699c478906105612174-2.jpg',
        title: 'Maybelline New York Fit Me Primer - Dewy+Smooth',
        weight: '(30ml)',
        quantity: 1,
        id: 'BBJ0003397',
        strikedOffPrice: "549.00",
        price: "521.00",
        discount: '5% off',
        brand: 'Maybelline',
        discription: `Go long and strong in your lash-game with Miss Claire Eyelash Glue. Let’s get all your falsies in their place to slay all day long. This gentle eyelash adhesive is latex free, non-toxic and pH-balanced for safe use. It is waterproof and holds your eyelashes securely in place making them look natural and flawless. It features a handy bottle with an easy-to-use applicator and a formula that blends in seamlessly. Clear tone allows seamless bond between extension and natural lashes.
                MRP : 350
                Best Before : JAN 2024
                About the Brand: Presenting an entire colorful range of face, lips and eye cosmetics that enhance your beauty and amplify your daily make-up looks. Loved by makeup fans across India, Miss Claire cosmetics are of premier quality, trendy, affordable and are formulated using the finest ingredients that care for your skin. The products are manufactured in accordance with European Standards. Choose from a huge range of Miss Claire makeup and beauty products right from lipstick, bronzers, highlighters, foundation, eyeliners to concealers all available in highly pigmented formula and textures. Miss Claire makeup products are affordably priced, long lasting and suit all skin tones.
                Origin : Made In South Korea
                Name of Mfg / Importer / Brand: Eureka Cosmo Pvt. Ltd. Address of Mfg / Importer / Brand: Eureka Cosmo Pvt. Ltd. 13, Gokul Regency-Ii, Thakur Complex, Kandivali (E), Mumbai -400 101.`,
        productCategory: 'Eyes',
        skinType: 'All Skin Type',
        shades: 'Peach Rose',
        multipleImages: ['https://www.beautybebo.com/pub/media/catalog/product/cache/a19d5a96b74d37bf18297d1e71af48ed/5/b/5b990e16902395773146_3.jpg', 'https://www.beautybebo.com/pub/media/catalog/product/cache/a19d5a96b74d37bf18297d1e71af48ed/5/b/5b990e16902395773146_2.jpg', 'https://www.beautybebo.com/pub/media/catalog/product/cache/a19d5a96b74d37bf18297d1e71af48ed/5/b/5b990e16902395773146_4.jpg'],
        howToUse: `Step 1: Dot a thin layer of glue straight from the applicator along the band of the false lash from corner to corner.
    Step 2: Wait 30 seconds for the adhesive to become sticky.
    Step 3: Adhere the strip to your lash line and gently press it in place.
    Step 4: Ensure the cap is secure post every use to avoid the glue from drying out.`
    },
    {
        image: 'https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/7/277cf77missc00000081_1.jpg',
        title: 'Miss Claire Eyelash Glue - Clear Tone',
        weight: '(50gm)',
        quantity: 1,
        id: 'BBJ0003398',
        strikedOffPrice: '350.00',
        price: "322.00",
        discount: '8% Off',
        brand: 'Miss Claire',
        discription: `Go long and strong in your lash-game with Miss Claire Eyelash Glue. Let’s get all your falsies in their place to slay all day long. This gentle eyelash adhesive is latex free, non-toxic and pH-balanced for safe use. It is waterproof and holds your eyelashes securely in place making them look natural and flawless. It features a handy bottle with an easy-to-use applicator and a formula that blends in seamlessly. Clear tone allows seamless bond between extension and natural lashes.
                MRP : 350
                Best Before : JAN 2024
                About the Brand: Presenting an entire colorful range of face, lips and eye cosmetics that enhance your beauty and amplify your daily make-up looks. Loved by makeup fans across India, Miss Claire cosmetics are of premier quality, trendy, affordable and are formulated using the finest ingredients that care for your skin. The products are manufactured in accordance with European Standards. Choose from a huge range of Miss Claire makeup and beauty products right from lipstick, bronzers, highlighters, foundation, eyeliners to concealers all available in highly pigmented formula and textures. Miss Claire makeup products are affordably priced, long lasting and suit all skin tones.
                Origin : Made In South Korea
                Name of Mfg / Importer / Brand: Eureka Cosmo Pvt. Ltd. Address of Mfg / Importer / Brand: Eureka Cosmo Pvt. Ltd. 13, Gokul Regency-Ii, Thakur Complex, Kandivali (E), Mumbai -400 101.`,
        productCategory: 'Eyes',
        skinType: 'All Skin Type',
        shades: 'Peach Rose',
        multipleImages: ['https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/7/277cf77missc00000081_1.jpg', 'https://www.beautybebo.com/pub/media/catalog/produ…ae888adf23d57cf627ad/5/1/51ccwnye-ks._sl1094_.jpg'],
        howToUse: `Step 1: Dot a thin layer of glue straight from the applicator along the band of the false lash from corner to corner.
    Step 2: Wait 30 seconds for the adhesive to become sticky.
    Step 3: Adhere the strip to your lash line and gently press it in place.
    Step 4: Ensure the cap is secure post every use to avoid the glue from drying out.`
    }
]

let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];
let table=document.querySelector("#tbody")
let sum=0;
const append=(data)=>{
   table.innerHTML=null;
    data.forEach((el)=>{
        let row=document.createElement("tr")
let item=document.createElement("td")
let img=document.createElement("img")
img.src=el.image;
img.style.width="200px"
let name=document.createElement("span")
name.innerText=el.title;
item.append(img,name)
let price=document.createElement("td")
price.innerText=el.price;
let number=document.createElement("td")
number.innerText=el.quantity;
let subtotal=document.createElement("td")
subtotal.innerHTML=Number(el.quantity)*Number(el.price);
sum=sum+(Number(el.quantity)*Number(el.price));
let btn1=document.createElement("button")
btn1.innerText="Move To Wishlist"
btn1.className="butn"
btn1.onclick=()=>{
    wishlist.push(el)
    localStorage.setItem("wishlist",JSON.stringify(wishlist))
}
let btn2=document.createElement("button")
btn2.innerText="Edit"
btn2.className="butn"
btn2.onclick=()=>{
    window.prompt
    const Enter_QTY=prompt(`Enter number of items`)
    number.innerText=Enter_QTY;
    el.quantity=Enter_QTY;
    subtotal.innerHTML=Number(Enter_QTY)*Number(el.price);

}
let btn3=document.createElement("button")
btn3.innerText="Remove"
btn3.className="butn"
btn3.onclick=()=>{

}

let row2=document.createElement("tr")
row2.append(btn1,btn2,btn3)

row.append(item,price,number,subtotal)
table.append(row,row2)





    })

}


append(product)

document.getElementById("subtotal").innerText=sum+".00";
document.getElementById("total").innerText=(sum+50)+".00"


document.getElementById("footer").innerHTML=footer();
window.onload = ()=>{
  let sum = (localStorage.getItem("paisa")) || 0;
  document.getElementById("cart2").innerText = `₹`+sum
}