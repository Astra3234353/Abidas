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

export function renderHeaderProducts() {
  renderHeaderCartProducts();
}