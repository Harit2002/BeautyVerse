const navbar = () =>{
  return `<div id="top-img">
  <img src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg">
  </div>
  <div id="navbar-1">
  <div id="logo">
  <a href="index.html">
  <img  alt="logo"  src="./images/image.png"/>
  </a>
  </div>
  <div id="btns">
      <div id="cat">
  <select id="opt" name="select">
      <option value="all">All Categories</option>
  </select>
      </div>
  <div id="srch-bar">
  <input type="text" placeholder="Enter your search">
  </div>
  <div id="srch-btn">
  <button>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149852.png"> 
      </button>  
  </div>
  </div>
  <div id="cart-btn">
  <div id="wish">
     <button>
        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077086.png"> 
      </button> 
  </div>
  <div id="account">
      <button>
          <img style="width:10px;" src="https://cdn-icons-png.flaticon.com/512/709/709722.png"> 
        </button> 
        <h4>My Account</h4>
  </div>
  </div>
  </div>
  <div id="navbar-2">
 
      <select id="option" name="select">
          <option value="makeup">MAKEUP</option>
      </select>
      <select id="option" name="select">
          <option value="makeup">SKIN</option>
      </select>
      <select id="option" name="select">
          <option value="makeup">HAIR</option>
      </select>
      <select id="option" name="select">
          <option value="makeup">PERSONAL CARE</option>
      </select>
      <select id="option" name="select">
          <option value="makeup">MOM&BABY CARE</option>
      </select>
      <select id="option" name="select">
          <option value="makeup">FREAGNANCE</option>
      </select>
      <select id="option" name="select">
          <option value="makeup">AYURVEDA</option>
      </select>
      <select id="option" name="select">
          <option value="makeup">BRANDS</option>
      </select>
      <div id="cart-div">
      <img src="/shopping-bag-32.ico" alt="">
      <span>My Cart - </span>
      <span id="cart2">0.00</span>
  </div>
  </div>`
}

const footer = () =>{
    return ``
}

export {navbar,footer}