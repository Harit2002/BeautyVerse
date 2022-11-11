let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;

function showlist() {
    // let category = document.getElementById("ctg").addEventListener("click", showlist);
    

    count1++;
  
    let div = document.getElementById("list");
    div.innerHTML = null;
  
    if (count1 % 2 == 0) {
      document.querySelector("#ctg>p>span").innerHTML = "+";
      div.innerHTML = null;
    } else {
      document.querySelector("#ctg>p>span").innerHTML = "&#8722;";
  
      let p1 = document.createElement("p");
      p1.innerText = "> Face";
  
      let p2 = document.createElement("p");
      p2.innerText = "> Eye";
  
      let p3 = document.createElement("p");
      p3.innerText = "> Lips";
  
      let p4 = document.createElement("p");
      p4.innerText = "> Nails";
  
      let p5 = document.createElement("p");
      p5.innerText = "> Toolbrushes";
  
      div.append(p1, p2, p3, p4, p5);
    }
  }
  
  function showskin() {
    // let skin = document.getElementById("skn").addEventListener("click", showskin);
    

    count2++;
  
    let div = document.querySelector("#skn>div");
    div.innerHTML = null;
  
    if (count2 %2 === 0) {
      document.querySelector("#skn>p>span").innerHTML = "+";
       div.innerHTML = null;
    } else {
      document.querySelector("#skn>p>span").innerHTML = "&#8722;";
  
      let flied = document.createElement("fieldset");
  
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let div3 = document.createElement("div");
      let div4 = document.createElement("div");
      let div5 = document.createElement("div");
      let div6 = document.createElement("div");
  
      let input1 = document.createElement("input");
      input1.setAttribute("id", "combination");
      input1.type = "checkbox";
  
      let label1 = document.createElement("label");
      label1.for = "combination";
      label1.innerText = "Combination";
      div1.append(input1, label1);
  
      let input2 = document.createElement("input");
      input2.setAttribute("id", "dry");
      input2.type = "checkbox";
  
      let label2 = document.createElement("label");
      label2.for = "dry";
      label2.innerText = "Dry";
      div2.append(input2, label2);
  
      let input3 = document.createElement("input");
      input3.setAttribute("id", "normal");
      input3.type = "checkbox";
  
      let label3 = document.createElement("label");
      label3.for = "normal";
      label3.innerText = "Normal";
        div3.append(input3, label3);
  
      let input4 = document.createElement("input");
      input4.setAttribute("id", "oily");
      input4.type = "checkbox";
  
      let label4 = document.createElement("label");
      label4.for = "oily";
      label4.innerText = "Oily";
      div4.append(input4, label4);
  
      let input5 = document.createElement("input");
      input5.setAttribute("id", "sensitive");
      input5.type = "checkbox";
  
      let label5 = document.createElement("label");
      label5.for = "sensitive";
      label5.innerText = "Sensitive";
      div5.append(input5, label5);
  
      let input6 = document.createElement("input");
      input6.setAttribute("id", "all");
      input6.type = "checkbox";
  
      let label6 = document.createElement("label");
      label6.for = "all";
      label6.innerText = "All Skin Type";
      div6.append(input6, label6);
  
      flied.append(div1, div2, div3, div4, div5, div6);
      div.append(flied);
    }
  }

  function showcolor(){
    // let color = document.getElementById("color").addEventListener("click",showcolor)
   

    count3++;
  
    let div = document.querySelector("#color>div");
    div.innerHTML = null;
  
    if (count3 % 2 === 0) {
      
      document.querySelector("#color>p>span").innerHTML = "+";
      div.innerHTML = null;
    } else {
      document.querySelector("#color>p>span").innerHTML = "-";
        let flied = document.createElement("fieldset");
    let div1 = document.createElement("div");
    div1.style.width = "20px";
    div1.style.height = "20px";
    div1.style.borderRadius = "50%"
    div1.style.backgroundColor = "black";

    let div2 = document.createElement("div");
    div2.style.width = "20px";
    div2.style.height = "20px";
    div2.style.borderRadius = "50%"
    div2.style.backgroundColor = "red";

    let div3 = document.createElement("div");
    div3.style.width = "20px";
    div3.style.height = "20px";
    div3.style.borderRadius = "50%"
    div3.style.backgroundColor = "green";

    let div4 = document.createElement("div");
    div4.style.width = "20px";
    div4.style.height = "20px";
    div4.style.borderRadius = "50%"
    div4.style.backgroundColor = "orange";

    let div5 = document.createElement("div");
    div5.style.width = "20px";
    div5.style.height = "20px";
    div5.style.borderRadius = "50%"
    div5.style.backgroundColor = "purple";

    let div6 = document.createElement("div");
    div6.style.width = "20px";
    div6.style.height = "20px";
    div6.style.borderRadius = "50%"
    div6.style.backgroundColor = "blue";

    let div7 = document.createElement("div");
    div7.style.width = "20px";
    div7.style.height = "20px";
    div7.style.borderRadius = "50%"
    div7.style.backgroundColor = "skyblue";

    let div8 = document.createElement("div");
    div8.style.width = "20px";
    div8.style.height = "20px";
    div8.style.borderRadius = "50%"
    div8.style.backgroundColor = "brown";

    let div9 = document.createElement("div");
    div9.style.width = "20px";
    div9.style.height = "20px";
    div9.style.borderRadius = "50%"
    div9.style.backgroundColor = "pink";

    let div10 = document.createElement("div");
    div10.style.width = "20px";
    div10.style.height = "20px";
    div10.style.borderRadius = "50%"
    div10.style.backgroundColor = "AliceBlue";

    let div11 = document.createElement("div");
    div11.style.width = "20px";
    div11.style.height = "20px";
    div11.style.borderRadius = "50%"
    div11.style.backgroundColor = "AntiqueWhite";

    let div12 = document.createElement("div");
    div12.style.width = "20px";
    div12.style.height = "20px";
    div12.style.borderRadius = "50%"
    div12.style.backgroundColor = "Beige";

    let div13 = document.createElement("div");
    div13.style.width = "20px";
    div13.style.height = "20px";
    div13.style.borderRadius = "50%"
    div13.style.backgroundColor = "Bisque";

    let div14 = document.createElement("div");
    div14.style.width = "20px";
    div14.style.height = "20px";
    div14.style.borderRadius = "50%"
    div14.style.backgroundColor = "BurlyWood";

    let div15 = document.createElement("div");
    div15.style.width = "20px";
    div15.style.height = "20px";
    div15.style.borderRadius = "50%"
    div15.style.backgroundColor = "Coral";

    let div16 = document.createElement("div");
    div16.style.width = "20px";
    div16.style.height = "20px";
    div16.style.borderRadius = "50%"
    div16.style.backgroundColor = "CornflowerBlue";

    let div17 = document.createElement("div");
    div17.style.width = "20px";
    div17.style.height = "20px";
    div17.style.borderRadius = "50%"
    div17.style.backgroundColor = "DarkSeaGreen";

    let div18 = document.createElement("div");
    div18.style.width = "20px";
    div18.style.height = "20px";
    div18.style.borderRadius = "50%"
    div18.style.backgroundColor = "DarkSlateGrey";

    let div19 = document.createElement("div");
    div19.style.width = "20px";
    div19.style.height = "20px";
    div19.style.borderRadius = "50%"
    div19.style.backgroundColor = "Gold";

    let div20 = document.createElement("div");
    div20.style.width = "20px";
    div20.style.height = "20px";
    div20.style.borderRadius = "50%"
    div20.style.backgroundColor = "IndianRed";

    let div21= document.createElement("div");
    div21.style.width = "20px";
    div21.style.height = "20px";
    div21.style.borderRadius = "50%"
    div21.style.backgroundColor = "Lavender";

    let div22 = document.createElement("div");
    div22.style.width = "20px";
    div22.style.height = "20px";
    div22.style.borderRadius = "50%"
    div22.style.backgroundColor = "Khaki";

    let div23 = document.createElement("div");
    div23.style.width = "20px";
    div23.style.height = "20px";
    div23.style.borderRadius = "50%"
    div23.style.backgroundColor = "Maroon";

    let div24 = document.createElement("div");
    div24.style.width = "20px";
    div24.style.height = "20px";
    div24.style.borderRadius = "50%"
    div24.style.backgroundColor = "MediumPurple";

    let div25 = document.createElement("div");
    div25.style.width = "20px";
    div25.style.height = "20px";
    div25.style.borderRadius = "50%"
    div25.style.backgroundColor = "Orchid";

    let div26 = document.createElement("div");
    div26.style.width = "20px";
    div26.style.height = "20px";
    div26.style.borderRadius = "50%"
    div26.style.backgroundColor = "Moccasin";

    let div27 = document.createElement("div");
    div27.style.width = "20px";
    div27.style.height = "20px";
    div27.style.borderRadius = "50%"
    div27.style.backgroundColor = "Moccasin";

    let div28 = document.createElement("div");
    div28.style.width = "20px";
    div28.style.height = "20px";
    div28.style.borderRadius = "50%"
    div28.style.backgroundColor = "Orange";

    let div29 = document.createElement("div");
    div29.style.width = "20px";
    div29.style.height = "20px";
    div29.style.borderRadius = "50%"
    div29.style.backgroundColor = "OliveDrab";

    let div30 = document.createElement("div");
    div30.style.width = "20px";
    div30.style.height = "20px";
    div30.style.borderRadius = "50%"
    div30.style.backgroundColor = "OrangeRed";

   
    flied.append(div1,div2,div3,div4,div5,div6,div7,div8,div9,div10,div11,div12,div13,div14,div15,div16,div17,div18,div19,div20,div21,div22,div23,div24,div25,div26,div27,div28,div29,div30)
    div.append(flied)
    }

  }
function showprice() {
    // let price = document.getElementById("prc").addEventListener("click", showprice);
   

    count4++;
  
    let div = document.querySelector("#prc>div");
    div.innerHTML = null;
  
    if (count4 % 2 === 0) {
      document.querySelector("#prc>p>span").innerHTML = "+";
      div.innerHTML = null;
    } else {
      document.querySelector("#prc>p>span").innerHTML = "&#8722;";
  
      let flied = document.createElement("fieldset");
  
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let div3 = document.createElement("div");
      let div4 = document.createElement("div");
  
      let input1 = document.createElement("input");
      input1.setAttribute("id", "cobination");
      input1.type = "checkbox";
  
      let label1 = document.createElement("label");
      label1.for = "cobination";
      label1.innerText = "Below ₹1,000.00";
      div1.append(input1, label1);
  
      let input2 = document.createElement("input");
      input2.setAttribute("id", "dry");
      input2.type = "checkbox";
  
      let label2 = document.createElement("label");
      label2.for = "dry";
      label2.innerText = "₹1,000.00 - ₹2,000.00";
      div2.append(input2, label2);
  
      let input3 = document.createElement("input");
      input3.setAttribute("id", "normal");
      input3.type = "checkbox";
  
      let label3 = document.createElement("label");
      label3.for = "normal";
      label3.innerText = "2,000.00 - ₹3,000.00";
      div3.append(input3, label3);
  
      let input4 = document.createElement("input");
      input4.setAttribute("id", "oily");
      input4.type = "checkbox";
  
      let label4 = document.createElement("label");
      label4.for = "oily";
      label4.innerText = "3,000.00 and above";
      div4.append(input4, label4);
  
      flied.append(div1, div2, div3, div4);
      div.append(flied);
    }
  }
  function showbrand() {
    // let brand = document.getElementById("brnd").addEventListener("click", showbrand);
    

    count5++;
    let div = document.querySelector("#brnd>div");
    div.innerHTML = null;
  
    if (count5 % 2 === 0) {
      document.querySelector("#brnd>p>span").innerHTML = "+";
      div.innerHTML = null;
    } else {
      document.querySelector("#brnd>p>span").innerHTML = "&#8722;";
  
      let flied = document.createElement("fieldset");
  
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let div3 = document.createElement("div");
      let div4 = document.createElement("div");
      let div5 = document.createElement("div");
      let div6 = document.createElement("div");
      let div7 = document.createElement("div");
      let div8 = document.createElement("div");
      let div9 = document.createElement("div");
      let div10 = document.createElement("div");
  
      let input1 = document.createElement("input");
      input1.setAttribute("id", "cobination");
      input1.type = "checkbox";
  
      let label1 = document.createElement("label");
      label1.for = "cobination";
      label1.innerText = "Lotus Organics";
      div1.append(input1, label1);
  
      let input2 = document.createElement("input");
      input2.setAttribute("id", "dry");
      input2.type = "checkbox";
  
      let label2 = document.createElement("label");
      label2.for = "dry";
      label2.innerText = "Blue Haven";
      div2.append(input2, label2);
  
      let input3 = document.createElement("input");
      input3.setAttribute("id", "normal");
      input3.type = "checkbox";
  
      let label3 = document.createElement("label");
      label3.for = "normal";
      label3.innerText = "Wow";
      div3.append(input3, label3);
  
      let input4 = document.createElement("input");
      input4.setAttribute("id", "oily");
      input4.type = "checkbox";
  
      let label4 = document.createElement("label");
      label4.for = "oily";
      label4.innerText = "Maybelline";
      div4.append(input4, label4);
  
      let input5 = document.createElement("input");
      input5.setAttribute("id", "sensitive");
      input5.type = "checkbox";
  
      let label5 = document.createElement("label");
      label5.for = "sensitive";
      label5.innerText = "LOreal Paris";
      div5.append(input5, label5);
  
      let input6 = document.createElement("input");
      input6.setAttribute("id", "all");
      input6.type = "checkbox";
  
      let label6 = document.createElement("label");
      label6.for = "all";
      label6.innerText = "Miss Claire";
      div6.append(input6, label6);
  
      let input7 = document.createElement("input");
      input7.setAttribute("id", "svn");
      input7.type = "checkbox";
  
      let label7 = document.createElement("label");
      label7.for = "svn";
      label7.innerText = "Himalaya";
      div7.append(input7, label7);
  
      let input8 = document.createElement("input");
      input8.setAttribute("id", "egt");
      input8.type = "checkbox";
  
      let label8 = document.createElement("label");
      label8.for = "egt";
      label8.innerText = "Lakeme";
      div8.append(input8, label8);
  
      let input9 = document.createElement("input");
      input9.setAttribute("id", "nine");
      input9.type = "checkbox";
  
      let label9 = document.createElement("label");
      label9.for = "nine";
      label9.innerText = "Mamaearth";
      div9.append(input9, label9);
  
      let input10 = document.createElement("input");
      input10.setAttribute("id", "ten");
      input10.type = "checkbox";
  
      let label10 = document.createElement("label");
      label10.for = "ten";
      label10.innerText = "O3+";
      div10.append(input10, label10);
  
      flied.append(div1, div2, div3, div4, div5, div6, div7, div8, div9, div10);
      div.append(flied);
    }
  }
  function showshades(){
    // let shades = document.getElementById("shds").addEventListener("click", showshades);
   

    count6++;
  
    let div = document.querySelector("#shds>div");
    div.innerHTML = null;
  
    if (count6 % 2 === 0) {
      document.querySelector("#shds>p>span").innerHTML = "+";
      div.innerHTML = null;
    } else {
      document.querySelector("#shds>p>span").innerHTML = "-";
        let flied = document.createElement("fieldset");
    let div1 = document.createElement("div");
    div1.style.width = "20px";
    div1.style.height = "20px";
    div1.style.borderRadius = "50%"
    div1.style.backgroundColor = "black";

    let div2 = document.createElement("div");
    div2.style.width = "20px";
    div2.style.height = "20px";
    div2.style.borderRadius = "50%"
    div2.style.backgroundColor = "red";

    let div3 = document.createElement("div");
    div3.style.width = "20px";
    div3.style.height = "20px";
    div3.style.borderRadius = "50%"
    div3.style.backgroundColor = "green";

    let div4 = document.createElement("div");
    div4.style.width = "20px";
    div4.style.height = "20px";
    div4.style.borderRadius = "50%"
    div4.style.backgroundColor = "orange";

    let div5 = document.createElement("div");
    div5.style.width = "20px";
    div5.style.height = "20px";
    div5.style.borderRadius = "50%"
    div5.style.backgroundColor = "purple";

    let div6 = document.createElement("div");
    div6.style.width = "20px";
    div6.style.height = "20px";
    div6.style.borderRadius = "50%"
    div6.style.backgroundColor = "blue";

    let div7 = document.createElement("div");
    div7.style.width = "20px";
    div7.style.height = "20px";
    div7.style.borderRadius = "50%"
    div7.style.backgroundColor = "skyblue";

    let div8 = document.createElement("div");
    div8.style.width = "20px";
    div8.style.height = "20px";
    div8.style.borderRadius = "50%"
    div8.style.backgroundColor = "brown";

    let div9 = document.createElement("div");
    div9.style.width = "20px";
    div9.style.height = "20px";
    div9.style.borderRadius = "50%"
    div9.style.backgroundColor = "pink";

    let div10 = document.createElement("div");
    div10.style.width = "20px";
    div10.style.height = "20px";
    div10.style.borderRadius = "50%"
    div10.style.backgroundColor = "AliceBlue";

    let div11 = document.createElement("div");
    div11.style.width = "20px";
    div11.style.height = "20px";
    div11.style.borderRadius = "50%"
    div11.style.backgroundColor = "AntiqueWhite";

    let div12 = document.createElement("div");
    div12.style.width = "20px";
    div12.style.height = "20px";
    div12.style.borderRadius = "50%"
    div12.style.backgroundColor = "Beige";

    let div13 = document.createElement("div");
    div13.style.width = "20px";
    div13.style.height = "20px";
    div13.style.borderRadius = "50%"
    div13.style.backgroundColor = "Bisque";

    let div14 = document.createElement("div");
    div14.style.width = "20px";
    div14.style.height = "20px";
    div14.style.borderRadius = "50%"
    div14.style.backgroundColor = "BurlyWood";

    let div15 = document.createElement("div");
    div15.style.width = "20px";
    div15.style.height = "20px";
    div15.style.borderRadius = "50%"
    div15.style.backgroundColor = "Coral";

    let div16 = document.createElement("div");
    div16.style.width = "20px";
    div16.style.height = "20px";
    div16.style.borderRadius = "50%"
    div16.style.backgroundColor = "CornflowerBlue";

    let div17 = document.createElement("div");
    div17.style.width = "20px";
    div17.style.height = "20px";
    div17.style.borderRadius = "50%"
    div17.style.backgroundColor = "DarkSeaGreen";

    let div18 = document.createElement("div");
    div18.style.width = "20px";
    div18.style.height = "20px";
    div18.style.borderRadius = "50%"
    div18.style.backgroundColor = "DarkSlateGrey";

    let div19 = document.createElement("div");
    div19.style.width = "20px";
    div19.style.height = "20px";
    div19.style.borderRadius = "50%"
    div19.style.backgroundColor = "Gold";

    let div20 = document.createElement("div");
    div20.style.width = "20px";
    div20.style.height = "20px";
    div20.style.borderRadius = "50%"
    div20.style.backgroundColor = "IndianRed";

    let div21= document.createElement("div");
    div21.style.width = "20px";
    div21.style.height = "20px";
    div21.style.borderRadius = "50%"
    div21.style.backgroundColor = "Lavender";

    let div22 = document.createElement("div");
    div22.style.width = "20px";
    div22.style.height = "20px";
    div22.style.borderRadius = "50%"
    div22.style.backgroundColor = "Khaki";

    let div23 = document.createElement("div");
    div23.style.width = "20px";
    div23.style.height = "20px";
    div23.style.borderRadius = "50%"
    div23.style.backgroundColor = "Maroon";

    let div24 = document.createElement("div");
    div24.style.width = "20px";
    div24.style.height = "20px";
    div24.style.borderRadius = "50%"
    div24.style.backgroundColor = "MediumPurple";

    let div25 = document.createElement("div");
    div25.style.width = "20px";
    div25.style.height = "20px";
    div25.style.borderRadius = "50%"
    div25.style.backgroundColor = "Orchid";

    let div26 = document.createElement("div");
    div26.style.width = "20px";
    div26.style.height = "20px";
    div26.style.borderRadius = "50%"
    div26.style.backgroundColor = "Moccasin";

    let div27 = document.createElement("div");
    div27.style.width = "20px";
    div27.style.height = "20px";
    div27.style.borderRadius = "50%"
    div27.style.backgroundColor = "Moccasin";

    let div28 = document.createElement("div");
    div28.style.width = "20px";
    div28.style.height = "20px";
    div28.style.borderRadius = "50%"
    div28.style.backgroundColor = "Orange";

    let div29 = document.createElement("div");
    div29.style.width = "20px";
    div29.style.height = "20px";
    div29.style.borderRadius = "50%"
    div29.style.backgroundColor = "OliveDrab";

    let div30 = document.createElement("div");
    div30.style.width = "20px";
    div30.style.height = "20px";
    div30.style.borderRadius = "50%"
    div30.style.backgroundColor = "OrangeRed";

   
    flied.append(div1,div2,div3,div4,div5,div6,div7,div8,div9,div10,div11,div12,div13,div14,div15,div16,div17,div18,div19,div20,div21,div22,div23,div24,div25,div26,div27,div28,div29,div30)
    div.append(flied)
    }

  }
  
  function showfom() {
    // let fomulation = document.getElementById("forml").addEventListener("click", showfom);
    

    count7++;
    let div = document.querySelector("#forml>div");
    div.innerHTML = null;
  
    if (count7 % 2 === 0) {
      document.querySelector("#forml>p>span").innerHTML = "+";
      div.innerHTML = null;
    } else {
      document.querySelector("#forml>p>span").innerHTML = "&#8722;";
  
      let flied = document.createElement("fieldset");
  
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let div3 = document.createElement("div");
      let div4 = document.createElement("div");
      let div5 = document.createElement("div");
      let div6 = document.createElement("div");
      let div7 = document.createElement("div");
      let div8 = document.createElement("div");
      let div9 = document.createElement("div");
      let div10 = document.createElement("div");
  
      let input1 = document.createElement("input");
      input1.setAttribute("id", "cobination");
      input1.type = "checkbox";
  
      let label1 = document.createElement("label");
      label1.for = "cobination";
      label1.innerText = "Balm";
      div1.append(input1, label1);
  
      let input2 = document.createElement("input");
      input2.setAttribute("id", "dry");
      input2.type = "checkbox";
  
      let label2 = document.createElement("label");
      label2.for = "dry";
      label2.innerText = "Blush";
      div2.append(input2, label2);
  
      let input3 = document.createElement("input");
      input3.setAttribute("id", "normal");
      input3.type = "checkbox";
  
      let label3 = document.createElement("label");
      label3.for = "normal";
      label3.innerText = "Cleansing Milk";
      div3.append(input3, label3);
  
      let input4 = document.createElement("input");
      input4.setAttribute("id", "oily");
      input4.type = "checkbox";
  
      let label4 = document.createElement("label");
      label4.for = "oily";
      label4.innerText = "Cream";
      div4.append(input4, label4);
  
      let input5 = document.createElement("input");
      input5.setAttribute("id", "sensitive");
      input5.type = "checkbox";
  
      let label5 = document.createElement("label");
      label5.for = "sensitive";
      label5.innerText = "Eye Pad";
      div5.append(input5, label5);
  
      let input6 = document.createElement("input");
      input6.setAttribute("id", "all");
      input6.type = "checkbox";
  
      let label6 = document.createElement("label");
      label6.for = "all";
      label6.innerText = "Face Wash";
      div6.append(input6, label6);
  
      let input7 = document.createElement("input");
      input7.setAttribute("id", "svn");
      input7.type = "checkbox";
  
      let label7 = document.createElement("label");
      label7.for = "svn";
      label7.innerText = "Facial Kit";
      div7.append(input7, label7);
  
      let input8 = document.createElement("input");
      input8.setAttribute("id", "egt");
      input8.type = "checkbox";
  
      let label8 = document.createElement("label");
      label8.for = "egt";
      label8.innerText = "Powder";
      div8.append(input8, label8);
  
      let input9 = document.createElement("input");
      input9.setAttribute("id", "nine");
      input9.type = "checkbox";
  
      let label9 = document.createElement("label");
      label9.for = "nine";
      label9.innerText = "Kajal";
      div9.append(input9, label9);
  
      let input10 = document.createElement("input");
      input10.setAttribute("id", "ten");
      input10.type = "checkbox";
  
      let label10 = document.createElement("label");
      label10.for = "ten";
      label10.innerText = "Liner";
      div10.append(input10, label10);
  
      flied.append(div1, div2, div3, div4, div5, div6, div7, div8, div9, div10);
      div.append(flied);
    }
  }
  function side(){
    return `
    <!-- sidebar section -->
    <div id="sidebar">
        <div id="ctg">
            <p>CATEGORY <span>&#43;</span></p>
            <div id="list"></div>
        </div>
        <div id="option">
            <h3>SHOP BY</h3>
            <div id="skn">
                <p>SKIN TYPE <span>&#43;</span></p>
                <div></div>
            </div>
            <div id="color">
                <p>COLOR <span>&#43;</span></p>
                <div></div>
            </div>
            <div id="prc">
                <p>PRICE <span>&#43;</span></p>
                <div></div>
            </div>
            <div id="brnd">
                <p>BRAND <span>&#43;</span></p>
                <div></div>
            </div>
            <div id="shds">
                <p>SHADES <span>&#43;</span></p>
                <div></div>
            </div>
            <div id="forml">
                <p>FOMULATION <span>+</span></p>
                <div></div>
            </div>
        </div>
        <img src="https://www.beautybebo.com/pub/media/free-delivery.jpg" alt="">
    </div>

    <!-- product section -->
    <div id="product-div">

        <!-- top sort section -->
        <div id="sort-div">
            <select name="sort" id="sort">
                <option value="position">Sort: Position</option>
                <option value="productName">Product Name</option>
                <option value="newArrival">New Arrivals</option>
                <option value="lth">Price: Low to high</option>
                <option value="htl">Price: High to low</option>
            </select>

            <ul>
                <li>
                    1
                </li>
                <li>
                    2
                </li>
                <li>
                    3
                </li>
                <li>
                    4
                </li>
                <li>
                    5
                </li>
                <li>
                    >
                </li>
            </ul>
        </div>

        <!-- product lists -->
        <div id="product-list">
                
        </div>

        <!-- bottom sort section -->
        <div id="sort-div">
            <select name="sort" id="sort">
                <option value="position">Sort: Position</option>
                <option value="productName">Product Name</option>
                <option value="newArrival">New Arrivals</option>
                <option value="lth">Price: Low to high</option>
                <option value="htl">Price: High to low</option>
            </select>

            <ul>
                <li id="one">
                    1
                </li>
                <li>
                    2
                </li>
                <li>
                    3
                </li>
                <li>
                    4
                </li>
                <li>
                    5
                </li>
                <li>
                    >
                </li>
            </ul>

        </div>`
}




  export {showlist, showskin,showcolor,showprice,showbrand,showshades,showfom,side}