export function renderHeaderCartProducts() {
  let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

  let cartProducts = 0;
  let cartElem =  document.querySelector('.cart-count');

  cart.forEach((product) => {
    cartProducts += product.quantity 
  })

  if (cartProducts !== 0) {
    cartElem.innerHTML = cartProducts;
    cartElem.style.display = 'block';
  } else {
    cartElem.style.display = 'none';
  }
}

export function renderHeaderWishlistProducts() {
  let wishlist = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [];

  let wishlistElem =  document.querySelector('.wishlist-count');

  console.log(wishlist.length)
  if (wishlist[0]) {
    wishlistElem.innerHTML = wishlist.length;
    wishlistElem.style.display = 'block';
  } else {
    wishlistElem.style.display = 'none';
  }
}

export function renderHeaderProducts() {
  renderHeaderCartProducts();
  renderHeaderWishlistProducts();
}