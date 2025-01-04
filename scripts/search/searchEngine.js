import { products } from "../data/products.js";

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
        <p>MX 9.5</p>
        <p>MX 10</p>
      </section>
    </div>
  </div>
</div>
      `;
    } 
  })
}