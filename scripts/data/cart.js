export const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

function saveLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function saveCartItem(productId) {
  let dupledItem;
  const correctItem = {
    id: productId,
    quantity: 1
  }

  cart.forEach(item => {
    if (item.id == productId) {
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