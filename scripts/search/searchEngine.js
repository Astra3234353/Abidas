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
    <div class="product__name">${product.name}</div>
    <div class="product__price">$ ${product.price}</div>
  </div>

  <div class="product__second">
    <section class="wrapper">
      <i class="fa-solid fa-arrow-left button disable-select" id="prev"></i>
      <div class="image-container">
        <div class="carousel">
          <img src="../${product.getUrl()}" alt="" class="carousel__images disable-select" draggable="false"/>
          <img src="../${product.extraUrl.url1}" alt="" class="carousel__images disable-select" draggable="false"/>
          <img src="../${product.extraUrl.url2}" alt="" class="carousel__images disable-select" draggable="false"/>
          <img src="../${product.extraUrl.url3}" alt="" class="carousel__images disable-select" draggable="false"/>
        </div>
        <i class="fa-solid fa-arrow-right button disable-select" id="next"></i>
      </div>
    </section>
  </div>

  <div class="product__third">
    <div class="product__third-info">
      <p>Colores</p>
      <div class="product-colors">Mineral Green / Off White / Legend Ink</div>
      <p>${product.description}</p>
    </div>
    <div class="product__third-grid">
      <p>Tallas</p>
      <section class="product-size-grid">
        <p>MX 1</p>
        <p>MX 2</p>
        <p>MX 3</p>
        <p>MX 4</p>
        <p>MX 5</p>
        <p>MX 6</p>
        <p>MX 7</p>
        <p>MX 8</p>
        <p>MX 9</p>
        <p>MX 10</p>
        <p>MX 11</p>
        <p>MX 12</p>
        <p>MX 13</p>
        <p>MX 14</p>
        <p>MX 15</p>
        <p>MX 16</p>
        <p>MX 17</p>
        <p>MX 18</p>
        <p>MX 19</p>
        <p>MX 20</p>
        <p>MX 21</p>
        <p>MX 22</p>
      </section>
    </div>
  </div>
</div>
      `;
    } 
  })
}