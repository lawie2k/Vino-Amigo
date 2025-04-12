const icons = document.querySelector(".icons");
const input = document.querySelector(".input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  icons.classList.toggle("active");
  input.focus();
});

const cartButton = document.getElementById("cartButton");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");
const cartItemsDiv = document.getElementById("cartItems");
const items = document.querySelectorAll(".item");

let cart = [];

cartButton.addEventListener("click", () => {
  sidebar.style.right = "0";
});

closeSidebar.addEventListener("click", () => {
  sidebar.style.right = "-500px";
});

items.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const itemName = item.dataset.name;
    const itemPrice = item.dataset.price;
    cart.push({ name: itemName, price: itemPrice });
    updateCartDisplay();
    sidebar.style.right = "0";
  });
});

function updateCartDisplay() {
  cartItemsDiv.innerHTML = "";
  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `<p>${item.name} - $${item.price}</p>`;
    cartItemsDiv.appendChild(cartItem);
  });
}
