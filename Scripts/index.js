import { navbar, footer } from "./top_components.js";
document.getElementById("navbar").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();
function carousel(){
    let carousel_div=document.getElementById("carousel");
  let images=["https://www.beautybebo.com/pub/media/ads/home-slider/Slider_banner_1-min.jpg","https://www.beautybebo.com/pub/media/ads/home-slider/Mamaearth_banner_1-min.jpg","https://www.beautybebo.com/pub/media/ads/home-slider/Ponds_Forent_Banner_6-min.jpg"];
  let image=document.createElement("img");
  image.src=images[0];
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



