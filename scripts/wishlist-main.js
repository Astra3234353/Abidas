import { renderHeaderProducts } from './products/update-header-products.js'
import { products } from './data/products.js';
import { wishlist } from './data/wishlist.js';

console.log(wishlist)

renderHeaderProducts();
renderWishlist();

function renderWishlist() {
  if (wishlist[0]) {
    document.querySelector('.wishlist-js').innerHTML = `
      <div class="wishlist-header">
        <h1>Mi lista de deseos</h1>
        <p>
          ${
            wishlist[1]? 
            wishlist.length + ' articulos' :
            wishlist.length + ' articulo'
          }
        </p>
      </div>
      <div class="wishlist__first"></div>  
    `
  }

  wishlist.forEach((id) => {
    products.forEach((product) => {
        if (product.id == id) {
          document.querySelector('.wishlist__first').innerHTML += `
                  <div class="wishlist__product">
          <a href="search.html?productId=m2ry208juz06nj45r">
            <div class="wishlist__product-img">
              <img src="${product.getUrl()}">
              <div class="wishlist__product-overlay">
                <div class="price">
                  $${product.price}
                </div>
              </div>
              <div class="whishlist__icon">
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
              </div>
            </div>
            <div class="wishlist__product-info">
              <h4>${product.name}</h4>
            </div>
          </a>
        </div>
          `
        }
    })
  })
}