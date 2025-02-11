export let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

export function saveWishlistItem(productId) {
  let doubledProduct = false

  if (!wishlist[0]) {
    wishlist.push(productId)
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    return
  }

  wishlist.forEach(id => {
    if (id == productId) {
      doubledProduct = true;
      alert('Ya has guardado este producto!')
    }
  })

  if (!doubledProduct) {
    wishlist.push(productId)
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }
}

export function deleteWishlistItem(productId) {
  const newWishlist = wishlist.filter((id) => {
    if (id !== productId) {
      return true
    } else {
      return false
    }
  })

  localStorage.setItem('wishlist', JSON.stringify(newWishlist));
}