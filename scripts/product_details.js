import "../scss/product_details_i.scss";
import { Button, Collapse, Popover } from "bootstrap";

const themeToggler = document.querySelector(".btn-toggle-theme");
const headerSVGs = document.querySelectorAll(".header-svg-btn");
const currentTheme = localStorage.getItem("psFruitShoptheme");
const wishListBtn = document.querySelector(".btn-wishlist");

if (currentTheme == "dark") {
  document.documentElement.classList.add("dark-theme");
  for (const headerSVG of headerSVGs) {
    headerSVG.classList.add("dark-theme");
  }
}

themeToggler.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark-theme");
  for (const headerSVG of headerSVGs) {
    headerSVG.classList.toggle("dark-theme");
  }

  let theme = "light";
  if (document.documentElement.classList.contains("dark-theme")) {
    theme = "dark";
  }

  localStorage.setItem("psFruitShoptheme", theme);
});

wishListBtn.addEventListener("click", function () {
  wishListBtn.classList.toggle("selected");
});
