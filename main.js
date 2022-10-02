const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuMobileLogo = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const carritoComprasIcon = document.querySelector(".navbar-shopping-cart");
const carritoCompras = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector(".product-detail-secundary");
const productDetailCloseIcon = document.querySelector(
  ".product-detail-close-secundary"
);
menuEmail.addEventListener("click", toggleDesktopMenu);
menuMobileLogo.addEventListener("click", toggleMobileMenu);
carritoComprasIcon.addEventListener("click", toggleCarritoCompras);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isCarritoClosed = carritoCompras.classList.contains("inactive");
  if (!isCarritoClosed) {
    carritoCompras.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isCarritoClosed = carritoCompras.classList.contains("inactive");
  const isProductDetailClosed = productDetail.classList.contains("inactive");
  if (!isProductDetailClosed) {
    productDetail.classList.add("inactive");
  }
  if (!isCarritoClosed) {
    carritoCompras.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoCompras() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isMenuDesktopClosed = desktopMenu.classList.contains("inactive");
  const isProductDetailClosed = productDetail.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  if (!isMenuDesktopClosed) {
    desktopMenu.classList.add("inactive");
  }
  if (!isProductDetailClosed) {
    productDetail.classList.add("inactive");
  }
  carritoCompras.classList.toggle("inactive");
}
function openProductDetailAside() {
  const isCarritoClosed = carritoCompras.classList.contains("inactive");
  if (!isCarritoClosed) {
    carritoCompras.classList.add("inactive");
  }
  productDetail.classList.remove("inactive");
}
function closeProductDetailAside() {
  productDetail.classList.add("inactive");
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: 220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: 620,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
  for (const product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
