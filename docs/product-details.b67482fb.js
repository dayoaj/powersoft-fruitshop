!function(){var e=document.querySelector(".btn-toggle-theme"),t=localStorage.getItem("psFruitShoptheme"),c=document.querySelector(".btn-wishlist");"dark"==t&&(document.documentElement.classList.add("dark-theme"),e.classList.add("dark-theme")),e.addEventListener("click",(function(){document.documentElement.classList.toggle("dark-theme"),e.classList.toggle("dark-theme");var t="light";document.documentElement.classList.contains("dark-theme")&&(t="dark"),localStorage.setItem("psFruitShoptheme",t)})),c.addEventListener("click",(function(){c.classList.toggle("selected")}))}();
//# sourceMappingURL=product-details.b67482fb.js.map