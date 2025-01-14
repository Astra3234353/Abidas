import { cart, deleteCartItem } from "./data/cart.js";
import { addScrollEvent } from "./search/slider.js";
import { products } from "./data/products.js";
import { addComasToNumber } from "./utils/formatCurrency.js";

let totalPrice = 0;
let totalProducts = 0;

addScrollEvent();
renderCartSummary();


function renderCartSummary() {
  let mainElement = ``;

  cart.forEach((cartItem) => {
    products.forEach((product) => {
      if (product.id == cartItem.id)  {
        mainElement+= `
        <div class="cart-summary__product js-product-${product.id}">
          <img src="${product.getUrl()}" class="cart-summary__product-img disable-select" alt="Superstar" draggable="false">
          <div class="cart-summary__product-info">
            <h4>${product.name}</h4>
            <p>${product.extra}</p>
            <p> Talla: MX 11</p>
            <p class="old-product-price">$${addComasToNumber(product.price + 301)}</p>
            <p class="final-product-price">$${addComasToNumber(product.price)}</p>
            <p>Cantidad: ${cartItem.quantity}</p>
            <button class="delete-item-button js-delete-item-btn" data-product-id="${product.id}">
              <div>
                <svg fill="#000000" width="15px" height="15px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fill-rule="evenodd"></path> </g></svg>
              </div>
            </button>
          </div>
        </div>
      `;

      totalPrice += product.price * cartItem.quantity;
      totalProducts += cartItem.quantity
      } else {
        console.log('No se encontró el producto');
      }
    })
  });

  document.querySelector('.cart-summary__product-container')
    .innerHTML += mainElement;

  loadPriceElements();

  document.querySelectorAll('.js-delete-item-btn')
    .forEach((btn) => {
      btn.addEventListener('click', () => {
        const productId = btn.dataset.productId;
        deleteCartItem(productId);
        
        document.querySelector(`.js-product-${productId}`)
          .remove();
      })
    });
}


function loadPriceElements() {
  document.querySelector('.cart-summary__second')
    .innerHTML = `
              <aside class="cart-summary__aside">
           <button class="black-abidas-btn">Ir a pagar</button>
           <p class="bold-title">RESUMEN DEL PEDIDO</p>
               <div class="aside__grid">
                  <div class="aside__grid-item">
                    <p>${totalProducts} productos</p>
                    <p>$${addComasToNumber(totalPrice)}</p>
                  </div>
                  <div class="aside__grid-item">
                    <p>Precio original</p>
                    <p>$${addComasToNumber(totalPrice + (totalProducts * 301))}</p>
                  </div>
                  <div class="aside__grid-item">
                    <p>Entrega</p>
                    <p>Gratis</p>
                  </div>
                  <div class="aside__grid-item descuento-item">
                    <p>Descuento</p>
                    <p>-$${addComasToNumber(totalProducts * 301)}</p>
                  </div>
                  <div class="aside__grid-item total-item">
                    <p>Total</p>
                    <p>$${addComasToNumber(totalPrice)}</p>
                  </div>
                  <div class="aside__grid-item IVA-item">    
                    <p>IVA: [${addComasToNumber(((totalPrice * 100) * 0.16) / 100)}]</p>
                  </div>
               </div>
        </aside>
    `
}