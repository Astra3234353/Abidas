import { products } from "../data/products.js";
import { randomArrayGenerator } from "../utils/ArrayGenerator.js";

export function randomRenderGridItems() {
  const randomArray = randomArrayGenerator(products.length);
  console.log(randomArray)

  let productsHTML = '';

  randomArray.forEach((num) => {
    let i = num - 1;

    productsHTML += `
      <div class="product-container js-product-container">
      <a href="search.html?productId=${products[i].id}">
        <div class="product-container__first-sec">
          <div class="product-container__image-cont">
            <img src="${products[i].getUrl()}" class="product-container__image disable-select" draggable="false">
            <img src="${products[i].extraUrl.url1}" class="product-container__image-hover disable-select" draggable="false" loading="lazy">
          </div>
        </div>
        <div class="product-container__second-sec">
          <p class="product-container__price">
            <strong>$${products[i].price}</strong>
          </p>
          <p class="product-container__name">
            ${products[i].name}
          </p>
          <div class="product-container__tags">
            ${products[i].ArrayToString(products[i].getTags())}
          </div>
          <div class="product-container__extra-tags">
            <p>${products[i].extra}</p>
          </div>
        </div>
      </a>
    </div>
    `;
  });

  document.querySelector('.main__grid').innerHTML += productsHTML;
}

export function renderGridItems () {
  let productsHTML = '';

  products.forEach((product) => {
    productsHTML += `
      <div class="product-container js-product-container">
      <a href="search.html?productId=${product.id}">
        <div class="product-container__first-sec">
          <div class="product-container__image-cont">
            <img src="${product.getUrl()}" class="product-container__image">
          </div>
        </div>
        <div class="product-container__second-sec">
          <p class="product-container__price">
            <strong>$${product.price}</strong>
          </p>
          <p product-container__name>
            ${product.name}
          </p>
            <div class="product-container__tags">
              ${product.ArrayToString(product.getTags())}
            </div>
            <div class="product-container__extra-tags">
              <p>${product.extra}</p>
            </div>
        </div>
        </a>
      </div>
    `
  })

  document.querySelector('.main__grid')
    .innerHTML += productsHTML;
}

export function addGridItemTest(gridItem) {
  let productsHTML = '';

  for (let i = 1; i <= gridItem; i++) {
    productsHTML += `
    <div class="product-container js-product-container">
    <a href="search.html?productId=1yq5ys18wwnexclviu">
          <div class="product-container__first-sec">
            <div class="product-container__image-cont">
                <img src="img/products/Tenis_SL_72_OG_Verde_IF1938_01_standard.avif" alt="Tenis Verde draggable="false"" class="product-container__image disable-select" loading="lazy">
                <img src="img/products/Tenis_SL_72_OG_Verde_IF1938_02_standard_hover.avif" class="product-container__image-hover disable-select" draggable="false" loading="lazy">
            </div>
          </div>
          <div class="product-container__second-sec">
            <p class="product-container__price"><strong>$300</strong></p>
            <p>Tenis SL 72 OG</p>
            <p>Mujer Originals</p>
            <p>2 colores</p>
            <p>Envio Gratis</p>
          </div>
          </a>
        </div>
    `
  }

  document.querySelector('.main__grid')
      .innerHTML += productsHTML;
};