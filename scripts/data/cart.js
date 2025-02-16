export let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

function saveLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function saveCartItem(productId, productSize) {
  let dupledItem;
  const correctItem = {
    id: productId,
    quantity: 1,
    productSize
  }

  cart.forEach(item => {
    if (item.id == productId && item.productSize == productSize) {
      dupledItem = item;
    }
  });

  if (dupledItem) {
    dupledItem.quantity++;
  } else {
    cart.push(correctItem);
  }

  console.log(cart);
  saveLocalStorage();
}

export function deleteCartItem(productId) {
  let newCart = [];
  cart.forEach((obj) => {
    if (obj.id === productId) {
      console.log('conincidencia')
    } else {
      newCart.push(obj)
    }
  })

  cart = newCart;
  saveLocalStorage();
}