import { products } from "../data/products.js";
import { addGalleryEvent, addScrollEvent } from "./slider.js";
import { saveCartItem } from "../data/cart.js";
import { renderHeaderCartProducts, renderHeaderWishlistProducts } from '../products/update-header-products.js'
import { saveWishlistItem } from "../data/wishlist.js";

export function renderProductElement(productId) {
  const productElem = document.querySelector('.product')

  products.forEach((product) => {
    if (product.id == productId) {
      productElem.innerHTML = `
        <div class="product__container">
          <div class="product__first">
            <div class="product__tags">
              <a href="online-store.html"><span>Inicio</span></a>
                ${product.ArrayToString(product.getTags())}
            </div>
            <h1>
              <div class="product__name">${product.name}</div>
            </h1>
            <div class="product__price">$ ${product.price}</div>
          </div>

          <div class="product__second disable-select">
            <div class="wrapper__envio-status">Envío Gratis</div>
            <section class="wrapper">
              <i class="fa-solid fa-arrow-left button " id="prev"></i>
              <div class="image-container">
                <div class="carousel">
                  <img src="${product.getUrl()}" alt="${product.name}" class="carousel__images" draggable="false"/>
                  <img src="${product.extraUrl.url1}" alt="${product.name}" class="carousel__images" draggable="false" loading="lazy"/>
                  <img src="${product.extraUrl.url2}" alt="${product.name}" class="carousel__images" draggable="false" loading="lazy"/>
                  <img src="${product.extraUrl.url3}" alt="${product.name}" class="carousel__images" draggable="false" loading="lazy"/>
                </div>
                <i class="fa-solid fa-arrow-right button" id="next"></i>
              </div>
            </section>
          </div>

          <div class="product__third">
            <div class="product__third-info">
              <p>Colores</p>
              <div class="product-colors">Mineral Green / Off White / Legend Ink</div>
            </div>
            <div class="product__third-grid">
              <p>Tallas</p>
              <section class="product-size-grid disable-select">
                <p>MX 9</p>
                <p>MX 2</p>
                <p>MX 2.5</p>
                <p>MX 3</p>
                <p>MX 3.5</p>
                <p>MX 4</p>
                <p>MX 4.5</p>
                <p>MX 5</p>
                <p>MX 5.5</p>
                <p>MX 6</p>
                <p>MX 6.5</p>
                <p>MX 7</p>
                <p>MX 7.5</p>
                <p>MX 8</p>
                <p>MX 8.5</p>
                <p>MX 9</p>
              </section>
              <div class="product__third-add-cart">
                <button class="black-abidas-btn js-add-to-cart">Agregar al carrito</button>
                <button class="add-to-wishlist-buton js-add-to-wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="24px" height="24px">
                    <title>wishlist-active</title>
                    <path 
                      fill="black" 
                      stroke="black" 
                      stroke-miterlimit="10" 
                      stroke-width="2" 
                      d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"
                    ></path>
                  </svg>  
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    } 
  })

  document.querySelector('.js-add-to-cart')
    .addEventListener('click', () => {
      saveCartItem(productId);
      renderHeaderCartProducts();
    });

  document.querySelector('.js-add-to-wishlist')
    .addEventListener('click', () => {
      saveWishlistItem(productId);
      renderHeaderWishlistProducts();
    })
  
  addGalleryEvent();
  addScrollEvent();
}