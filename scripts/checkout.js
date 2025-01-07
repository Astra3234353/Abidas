import { cart } from "./data/cart.js";
import { addScrollEvent } from "./search/slider.js";
<<<<<<< HEAD
import { products } from "./data/products.js";

let totalPrice = 0;

addScrollEvent();
renderCartSummary();


function renderCartSummary() {
  let mainElement = ``;

  cart.forEach((cartItem) => {
    products.forEach((product) => {
      if (product.id == cartItem.id)  {
        mainElement+= `
        <div class="cart-summary__product">
          <img src="${product.getUrl()}" class="cart-summary__product-img disable-select" alt="Superstar" draggable="false">
          <div class="cart-summary__product-info">
            <h4>${product.name}</h4>
            <p>${product.extra}</p>
            <p> Talla: MX 11</p>
            <p>$${product.price}</p>
            <p>Cantidad: ${cartItem.quantity}</p>
            <div class="cross-svg">
              <svg fill="#000000" width="15px" height="15px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fill-rule="evenodd"></path> </g></svg>
            </div>
          </div>
        </div>
      `;

      totalPrice += product.price * cartItem.quantity;
      } else {
        console.log('No se encontró el producto');
      }
    })
  });

  document.querySelector('.cart-summary__product-container')
    .innerHTML += mainElement;

  console.log(totalPrice);
}
=======

addScrollEvent();

console.log(cart);
>>>>>>> ba212085bd1c3ba1cdb878dad5fd11e21275002f
