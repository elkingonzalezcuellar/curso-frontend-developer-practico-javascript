const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuMobileLogo = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const carritoComprasIcon = document.querySelector(".navbar-shopping-cart");
const carritoCompras = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuMobileLogo.addEventListener("click", toggleMobileMenu);
carritoComprasIcon.addEventListener("click", toggleCarritoCompras);

function toggleDesktopMenu() {
  const isCarritoClosed = carritoCompras.classList.contains("inactive");
  if (!isCarritoClosed) {
    carritoCompras.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isCarritoClosed = carritoCompras.classList.contains("inactive");
  if (!isCarritoClosed) {
    carritoCompras.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoCompras() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isMenuDesktopClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  if (!isMenuDesktopClosed) {
    desktopMenu.classList.add("inactive");
  }
  carritoCompras.classList.toggle("inactive");
}
