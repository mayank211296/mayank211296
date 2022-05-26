var clothing = document.getElementById("clothing");
clothing.innerHTML = `<h2 class="section-heading">Clothing for Men and Women</h2>`;
document.body.prepend(clothing);
var div = document.createElement("div");
div.innerHTML = `<div id="card-container"></div>`;
clothing.appendChild(div);
var cardbox = document.getElementById("card-container");
cardbox.innerHTML =
  `<div class="card" id="1"><a href="product.html?product_id=1"><div class="img"><img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"></div><div class="details"><h3>Men Navy Blue Solid Sweatshirt</h3><h4>United Colors of Benetton</h4><h5>Rs 2599</h5></div></a></div>` +
  '<div class="card" id="2"><a href="product.html?product_id=2"><div class="img"><img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg"></div><div class="details"><h3>Men Black MAMGP T7 Sweat Sporty Jacket</h3><h4>Puma</h4><h5>Rs 7999</h5></div></a></div>' +
  `<div class="card" id="3"><a href="product.html?product_id=3"><div class="img"><img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg"></div><div class="details"><h3>Men Black Action Parkview Lifestyle Shoes</h3><h4>Hush Puppies</h4><h5>Rs 6999</h5></div></a></div>` +
  `<div class="card" id="4"><a href="product.html?product_id=4"><div class="img"><img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg"></div><div class="details"><h3>Women Black Solid Lightweight Leather Jacket</h3><h4>BARESKIN</h4><h5>Rs 9999</h5></div></a></div>` +
  `<div class="card" id="5"><a href="product.html?product_id=5"><div class="img"><img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg"></div><div class="details"><h3>Women Blue Solid Shirt Dress</h3><h4>SASSAFRAS</h4><h5>Rs 5299</h5></div></a></div>`;

var accessories = document.getElementById("accessories");
accessories.innerHTML = `<h2 class="section-heading">Accessories for Men and Women</h2>`;
var div = document.createElement("div");
div.innerHTML = `<div id="card-container1"></div>`;
accessories.append(div);
var cardbox = document.getElementById("card-container1");
cardbox.innerHTML =
  `<div class="card" id="6"><a href="product.html?product_id=6"><div class="img"><img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg"></div><div class="details"><h3>Unisex Silver-Toned Series 3 Smart Watch</h3><h4>Apple</h4><h5>Rs 31999</h5></div></a></div>` +
  '<div class="card" id="7"><a href="product.html?product_id=7"><div class="img"><img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg"></div><div class="details"><h3>Unisex Black & Green Reflex 2.0 Smart Band</h3><h4>Fastrack</h4><h5>Rs 1999</h5></div></a></div>' +
  `<div class="card" id="8"><a href="product.html?product_id=8"><div class="img"><img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg"></div><div class="details"><h3>Unisex Black Galaxy Fit Fitness Band</h3><h4>Samsung</h4><h5>Rs 9990</h5></div></a></div>` +
  `<div class="card" id="9"><a href="product.html?product_id=10"><div class="img"><img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/de2c21f3-6731-4c29-9369-692a486a1b8c1554802772926-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-1.jpg"></div><div class="details"><h3>Gear IconX Black Cord-free Fitness Earbuds</h3><h4>Samsung</h4><h5>Rs 13990</h5></div></a></div>` +
  `<div class="card" id="10"><a href="product.html?product_id=10"><div class="img"><img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/6661d579-12ae-456b-b8f2-e78e5256a99c1558948436173-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-1.jpg"></div><div class="details"><h3>White 2nd Gen AirPods with Charging Case</h3><h4>Apple</h4><h5>Rs 14999</h5></div></a></div>`;