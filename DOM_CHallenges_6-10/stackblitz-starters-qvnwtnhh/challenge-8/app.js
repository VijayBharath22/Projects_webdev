const cartItems = document.querySelector("#cart-items");
const totalEl = document.querySelector("#cart-total h3");

function updateTotal() {
  let total = 0;
  const items = cartItems.querySelectorAll(".cart-item");

  items.forEach((item) => {
    const price = parseFloat(item.dataset.price);
    const qty = parseInt(item.dataset.qty);
    total += price * qty;
  });

  totalEl.textContent = `Total: $${total.toFixed(2)}`;
}

function showEmptyCart() {
  if (!cartItems.querySelector(".cart-item")) {
    const div = document.createElement("div");
    div.className = "empty-cart";
    div.textContent = "Cart is empty";
    cartItems.append(div);
  }
}

function addNewItem(name, price) {
  const empty = cartItems.querySelector(".empty-cart");
  if (empty) empty.remove();

  const item = document.createElement("div");
  item.className = "cart-item";
  item.dataset.price = price;
  item.dataset.qty = 1;

  const info = document.createElement("div");
  info.textContent = `${name} - $${price}`;

  const controls = document.createElement("div");
  controls.className = "cart-content";

  const plus = document.createElement("button");
  plus.textContent = "+";

  const qty = document.createElement("span");
  qty.className = "qty";
  qty.textContent = "1";

  const minus = document.createElement("button");
  minus.textContent = "-";

  const remove = document.createElement("button");
  remove.textContent = "Remove";

  controls.append(plus, qty, minus, remove);
  item.append(info, controls);
  cartItems.append(item);

  updateTotal();
}

function addToCart(name, price) {
  const existing = [...cartItems.querySelectorAll(".cart-item")].find((item) =>
    item.firstChild.textContent.startsWith(name),
  );

  if (!existing) {
    addNewItem(name, price);
  } else {
    existing.dataset.qty++;
    existing.querySelector(".qty").textContent = existing.dataset.qty;
    updateTotal();
  }
}

cartItems.addEventListener("click", (e) => {
  const item = e.target.closest(".cart-item");
  if (!item) return;

  let qty = parseInt(item.dataset.qty);

  if (e.target.textContent === "+") {
    qty++;
  }

  if (e.target.textContent === "-") {
    qty--;
  }

  if (e.target.textContent === "Remove" || qty === 0) {
    item.remove();
    updateTotal();
    showEmptyCart();
    return;
  }

  item.dataset.qty = qty;
  item.querySelector(".qty").textContent = qty;
  updateTotal();
});
