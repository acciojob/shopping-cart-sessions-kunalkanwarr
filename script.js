const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

// Load cart from sessionStorage
function loadCart() {
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  renderCart(cart);
}

// Save cart to sessionStorage
function saveCart(cart) {
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

// Render products
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price}`;
    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.addEventListener("click", () => addToCart(product));
    li.appendChild(button);
    productList.appendChild(li);
  });
}

// Render cart
function renderCart(cart) {
  cartList.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

// Add product to cart
function addToCart(product) {
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  cart.push(product);
  saveCart(cart);
  renderCart(cart);
}

// Clear cart
clearCartBtn.addEventListener("click", () => {
  sessionStorage.removeItem("cart");
  renderCart([]);
});

// Initialize page
renderProducts();
loadCart();
