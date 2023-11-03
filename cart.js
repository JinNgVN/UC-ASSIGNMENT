document.addEventListener("DOMContentLoaded", (event) => {
  loadCartFromLocalStorage();
  updateCartUI();
  updateTotalPrice();
});

let listCards = new Map();

function loadCartFromLocalStorage() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  listCards.clear();
  cart.forEach(item => {
      listCards.set(item.productName, item);
  });
}

function addToCart(productName, price, imageUrl) {
  let product = listCards.get(productName);
  if (product) {
    product.quantity += 1;
  } else {
    product = { productName, price, imageUrl, quantity: 1 };
    listCards.set(productName, product);
  }
  localStorage.setItem("cart", JSON.stringify(Array.from(listCards.values())));
  updateCartUI();
  updateTotalPrice();
}

function updateCartUI() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let listCard = document.querySelector(".listCard");
  let totalElement = document.querySelector(".total");
  let quantityElement = document.querySelector(".quantity"); // Thêm dòng này nếu bạn muốn hiển thị tổng số lượng sản phẩm

  listCard.innerHTML = "";
  let totalPrice = 0;
  let totalQuantity = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
    totalQuantity += item.quantity;

    let listItem = document.createElement("li");
    listItem.innerHTML = `
    <div class="cart_container">
    <div class="line cart_line"></div>
    <div class="cart_detail">
        <img class="cart_image_product" src="${
            item.imageUrl
          }"/>
        <div class="cart_info">
          <div class="cart_name">${item.productName}</div>
          <div>${item.price.toLocaleString()}$</div>
        </div>
        <div class="count">${item.quantity}</div>
        <button class="btn_cart cart_discard" onclick="changeQuantity('${item.productName}', ${
          item.quantity - 1
        })"> - </button>
        <button class="btn_cart" onclick="changeQuantity('${item.productName}', ${
        item.quantity + 1
        })"> + </button>
    </div>
</div>
    `;
    listCard.appendChild(listItem);
  });

  if (totalElement) {
    totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
  }

  if (quantityElement) {
    quantityElement.textContent = `Quantity: ${totalQuantity}`;
  }
}

function updateTotalPrice() {
  let total = Array.from(listCards.values()).reduce((sum, item) => sum + item.price * item.quantity, 0);
  let totalElement = document.querySelector(".total");
  if (totalElement) {
      totalElement.textContent = `Total: $${total.toFixed(2)}`;
  }
}

function changeQuantity(productName, newQuantity) {
  let product = listCards.get(productName);
  if (product) {
    if (newQuantity > 0) {
      product.quantity = newQuantity;
    } else {
      listCards.delete(productName);
    }
    localStorage.setItem(
      "cart",
      JSON.stringify(Array.from(listCards.values()))
    );
    updateCartUI();
    updateTotalPrice();
  }
}
