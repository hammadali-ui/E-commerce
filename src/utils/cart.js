
export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
  return cart;
};

export const addToCart = (product) => {
  const cart = getCart();
  const item = cart.find(i => i.id === product.id);

  if (item) item.quantity += 1;
  else cart.push({ ...product, quantity: 1 });

  return saveCart(cart);
};

export const increaseQty = (id) => {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) item.quantity += 1;
  return saveCart(cart);
};

export const decreaseQty = (id) => {
  let cart = getCart();
  const item = cart.find(i => i.id === id);

  if (item) item.quantity -= 1;
  cart = cart.filter(i => i.quantity > 0);

  return saveCart(cart);
};

export const removeFromCart = (id) => {
  const cart = getCart().filter(i => i.id !== id);
  return saveCart(cart);
};

export const clearCart = () => {
  localStorage.removeItem("cart");
  return [];
};
