const navbar = () => {
    return `<div id="navbar-1">
  <div id="logo">
  <a href="./index.html">
  <img  alt="logo"  src="https://i.ibb.co/MnjWFL0/image-1.png"/>
  
  </a>
  </div>
  <div id="btns">
      <div id="cat">
  <select id="opt" name="select">
      <option value="all">All Categories</option>
      <option value="3">- - Makeup</option>
 <option value="8">- - - - Face</option> 
 <option value="123">- - - - - - Foundation</option> 
 <option value="124">- - - - - - Blush</option>
  <option value="125">- - - - - - Highlighters</option> 
  <option value="126">- - - - - - Concealer</option> 
  <option value="127">- - - - - - Compact &amp; Powder</option>
   <option value="128">- - - - - - Face Primer</option> 
   <option value="129">- - - - - - Makeup Remover</option>
    <option value="130">- - - - - - Contour</option> 
    <option value="131">- - - - - - Bronzer</option> 
    <option value="132">- - - - - - BB Cream</option> 
    <option value="133">- - - - - - Loose Powder</option>
     <option value="134">- - - - - - Setting Spray</option> 
     <option value="172">- - - - - - Makeup Kits</option>
      <option value="175">- - - - - - CC Cream</option>
       <option value="9">- - - - Eye</option> 
       <option value="135">- - - - - - Eye Shadow</option> <option value="136">- - - - - - Eyeliner</option> <option value="137">- - - - - - False Eyelashes</option> <option value="138">- - - - - - Mascara</option> <option value="139">- - - - - - Eye Brow Enhancers</option> <option value="140">- - - - - - Kajal</option> <option value="141">- - - - - - Under Eye Concealer</option> <option value="142">- - - - - - Eye Makeup Remover</option> <option value="143">- - - - - - Contact Lenses</option> <option value="144">- - - - - - Eye Primer</option> <option value="145">- - - - - - Eye-Palettes</option> <option value="173">- - - - - - Eye Kit </option> <option value="10">- - - - Lips</option> <option value="146">- - - - - - Lipstick</option> <option value="147">- - - - - - Liquid Lipstick</option> <option value="148">- - - - - - Lip Liner</option> <option value="149">- - - - - - Lip Gloss</option> <option value="150">- - - - - - Lip Balm</option> <option value="151">- - - - - - Lip Crayon</option> <option value="152">- - - - - - Lip Stain</option> <option value="153">- - - - - - Lip Plumper</option> <option value="11">- - - - Nails</option> <option value="154">- - - - - - Nail Polish</option> <option value="155">- - - - - - Manicure &amp; Pedicure Kits</option> <option value="156">- - - - - - Nail Care</option> <option value="157">- - - - - - Nail Polish Sets</option> <option value="158">- - - - - - Nail Art Kits</option> <option value="159">- - - - - - Nail Polish Remover</option> <option value="12">- - - - Tools brushes</option> <option value="161">- - - - - - Face Brush</option> <option value="162">- - - - - - Makeup Pouches</option> <option value="163">- - - - - - Sponges &amp; Applicators</option> <option value="164">- - - - - - Eye Brush</option> <option value="166">- - - - - - Blush&nbsp;Brush</option> <option value="167">- - - - - - Tweezers</option> <option value="168">- - - - - - Lip Brush</option> <option value="169">- - - - - - Eyelash Curlers</option> <option value="165">- - - - - - - - Brush Sets</option> <option value="170">- - - - - - Sharpeners</option> <option value="171">- - - - - - Mirrors</option> <option value="4">- - Skin</option> <option value="13">- - - - Body care</option> <option value="77">- - - - - - Body Moisturizers</option> <option value="79">- - - - - - Kits &amp; Combos</option> <option value="81">- - - - - - Body Sun Care</option> <option value="82">- - - - - - Hand Creams</option> <option value="83">- - - - - - Body Toners</option> <option value="84">- - - - - - Hands &amp; Feet</option> <option value="85">- - - - - - Dark Circles &amp; Wrinkles </option> <option value="86">- - - - - - Neck Creams</option> <option value="87">- - - - - - Brightening Lotion</option> <option value="88">- - - - - - Foot Cream</option> <option value="90">- - - - - - Night Cream</option> <option value="92">- - - - - - Hair Remover Cream</option> <option value="95">- - - - - - All Cream</option> <option value="179">- - - - - - Day Cream</option> <option value="14">- - - - Face care</option> <option value="93">- - - - - - Facial Kits</option> <option value="96">- - - - - - Moisturizer</option> <option value="97">- - - - - - Face Wash</option> <option value="98">- - - - - - Facial Wipes</option> <option value="99">- - - - - - Brightening Cream</option> <option value="101">- - - - - - Face Cleansers</option> <option value="102">- - - - - - Face Oil</option> <option value="103">- - - - - - Mask &amp; Peels</option> <option value="105">- - - - - - Toner &amp; Astringents</option> <option value="106">- - - - - - Bleach Creams</option> <option value="107">- - - - - - Anti- Ageing Creams</option> <option value="108">- - - - - - Face Tools</option> <option value="178">- - - - - - Serum</option> <option value="207">- - - - - - Cleansing Creams</option> <option value="15">- - - - Eye Care</option> <option value="112">- - - - - - Dark Circles</option> <option value="113">- - - - - - Eye Contour Care</option> <option value="114">- - - - - - Eye Cream</option> <option value="115">- - - - - - Eye Masks</option> <option value="116">- - - - - - Eye Serums</option> <option value="117">- - - - - - Under Eye Creams</option> <option value="118">- - - - - - Under Eye Wrinkles</option> <option value="119">- - - - - - Puffiness</option> <option value="5">- - Hair</option> <option value="17">- - - - Hair Care</option> <option value="58">- - - - - - Hair Color/ Dye</option> <option value="59">- - - - - - Gels &amp; Waxes</option> <option value="60">- - - - - - Hair Spray</option> <option value="61">- - - - - - Hairfall &amp; Thinning&nbsp;</option> <option value="62">- - - - - - Dandruff</option> <option value="63">- - - - - - Color Protection</option> <option value="67">- - - - - - Hair Creams &amp; Masks&nbsp;</option> <option value="69">- - - - - - Dry Shampoo</option> <option value="70">- - - - - - Hair Styling</option> <option value="71">- - - - - - Straighteners&nbsp;</option> <option value="18">- - - - Hair Loss</option> <option value="64">- - - - - - Shampoo</option> <option value="66">- - - - - - Hair Oil</option> <option value="68">- - - - - - Hair Serum</option> <option value="72">- - - - - - Conditioner</option> <option value="76">- - - - - - Hair Growth solutions</option> <option value="6">- - Personal Care</option> <option value="19">- - - - Bath &amp; Body</option> <option value="45">- - - - - - Essential Oils</option> <option value="46">- - - - - - Ubtan &amp; Face Packs</option> <option value="51">- - - - - - Creams</option> <option value="52">- - - - - - Foot Cream</option> <option value="78">- - - - - - Body Cleansers</option> <option value="80">- - - - - - Body Massage Oil</option> <option value="89">- - - - - - Body Wash</option> <option value="100">- - - - - - Scrubs &amp; Exfoliants</option> <option value="20">- - - - Bath &amp; Shower</option> <option value="48">- - - - - - Shower Gel</option> <option value="49">- - - - - - Body Soaps</option> <option value="21">- - - - Bathing Accessories</option> <option value="53">- - - - - - Bath Brushes</option> <option value="54">- - - - - - Shower Caps</option> <option value="55">- - - - - - Sponges</option> <option value="56">- - - - - - Loofahs</option> <option value="7">- - Mom &amp; Baby  Care</option> <option value="22">- - - - Baby Care</option> <option value="24">- - - - - - Lotions &amp; Creams</option> <option value="25">- - - - - - Oils</option> <option value="26">- - - - - - Shampoo</option> <option value="27">- - - - - - Soaps</option> <option value="28">- - - - - - Wipes</option> <option value="29">- - - - - - Sterilizer &amp; Cleaners</option> <option value="30">- - - - - - Powder</option> <option value="31">- - - - - - Diapers</option> <option value="32">- - - - - - Bath time </option> <option value="33">- - - - - - Rash Cream</option> <option value="23">- - - - Mom Care</option> <option value="34">- - - - - - Lotions &amp; Creams</option> <option value="35">- - - - - - personal Care</option> <option value="174">- - Fragrance</option> <option value="94">- - - - Perfumes</option> <option value="180">- - - - Deodorants-roll-ons</option> <option value="181">- - - - Body Mist /Spray</option> <option value="177">- - Ayurveda</option> <option value="182">- - - - Natural Skin Care </option> <option value="185">- - - - - - Body Wash </option> <option value="186">- - - - - - Body Lotion</option> <option value="187">- - - - - - Sun Protection</option> <option value="188">- - - - - - Face Wash </option> <option value="189">- - - - - - Mask </option> <option value="190">- - - - - - Eye Care</option> <option value="191">- - - - - - Scrub</option> <option value="198">- - - - - - Lip Care </option> <option value="202">- - - - - - Cream</option> <option value="203">- - - - - - Cleansers</option> <option value="204">- - - - - -  Gel</option> <option value="205">- - - - - -  Pack</option> <option value="183">- - - - Natural Hair Care </option> <option value="192">- - - - - - Hair Oils</option> <option value="193">- - - - - - Hair Serum</option> <option value="196">- - - - - - Hair Gel </option> <option value="197">- - - - - - Shampoo </option> <option value="201">- - - - - - Conditioner </option> <option value="206">- - Latest Offer </option>
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
     <button >
        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077086.png"> 
      </button> 
  </div>
  <div id="account"  class = "dropdown">
      <button class = "dropbtn">
          <img src="https://cdn-icons-png.flaticon.com/512/709/709722.png"> 
        </button>
        <div class="dropdown-content">
        <a href="signin.html">User Login</a>
        <a href="register.html">User Register</a>
        <a href="adminLogin.html">Admin Login</a>
        <a href="adminRegister.html">Admin Register</a>
        </div> 
        <div id="Uname"><h4>My Account</h4></div>
  </div>
  </div>
  </div>
  <nav id="navbar3">
        <div class="option">
            <a id="makeup" href = "../Products Pages/makeup.html"><span >MAKEUP</span></a>
            <a  id="skin" href = "../Products Pages/skin.html"><span>SKIN</span></a>
            <a id="hair" href = "../Products Pages/hair.html"><span >HAIR</span></a>
            <a id="personal" href = "../Products Pages/personal.html"><span >PERSONAL CARE</span></a>
            <a id="mom" href = "../Products Pages/mom.html"><span >MOM & BABY CARE</span></a>
           <a id="frag" href = "../Products Pages/fragrance.html"> <span >FRAGRANCE</span></a>
           <a  id="aurveda" href = "../Products Pages/ayurveda.html"> <span>AYURVEDA</span></a>
            <a id="brand" href = "../Products Pages/brand.html"><span >BRAND</span></a>
        </div>
        <div id="cart-div">

        <a href="./addcart.html">

            <img src="https://findicons.com/files/icons/1579/devine/48/cart.png" alt="">
            <span class = "span">My Cart - </span>
            <span class = "span" id="cart2">0.00</span>
            </a>
        </div>
    </nav>
    <div class="open-div"></div>`
}
const footer = () => {
    return `<div id="sect">
     <div id="first">
     <h3 class="hdng">CONTACT INFO</h3>
     <ul class="list">
     <li>(+91) 7877061041</li>
     <li>support@beautyverse.com</li>
     <li>sales@beautyverse.com</li>
     <li>Open time: 10:00AM - 7:00PM</li>
     <button class="fb">
         <img src="https://cdn-icons-png.flaticon.com/512/4628/4628653.png"> 
     </button>
     <button class="fb">
         <img src="https://cdn-icons-png.flaticon.com/512/1419/1419647.png"> 
      </button>
 
 </ul>
     </div>
     <div id="second">
         <h3 class="hdng">QUICK LINKS</h3>
         <ul class="list">
         <li>About us</li>
         <li>Contact Us</li>
         <li>Terms & Conditions</li>
         <li>Privacy Policy</li>
         <li>Return and Refund Policy</li>
         <li>Shipping Policy</li>
     </ul>
     </div>
     <div id="third">
         <h3 class="hdng"> CUSTOMER INFO</h3>
         <ul class="list">
         <li>My Account</li>
         <li>Track your Order</li>
         <li>Order Returns</li>
         <li>Wishlist</li>
         <li>News & Events</li>
         <li>FAQ</li>
     </ul>
     </div>
     <div id="fourth">
         <h3 class="hdng">CATEGORIES </h3>
         <ul class="list">
         <li>Makeup</li>
         <li>Skin</li>
         <li>Hair</li>
         <li>Personal Care</li>
         <li>Mom & Baby Care</li>
         <li>Fragrance</li>
         <li>Ayurveda</li>
     </ul>
     </div>
    </div>
    <div id="bottom">
     <div id="paycards"> 
     <img src="https://www.beautybebo.com/pub/media/wysiwyg/payment.png">
     </div>
     <div id="newsletter">
     <h4>Signup for Newsletter</h4>
     <input type="text" placeholder="SignUp for Newsletter">
     <button>Subscribe</button>
     </div>`
}

export { navbar, footer }