!function(){function t(t,n){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,i=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){i=!0,l=t},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw l}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var n=document.querySelector(".btn-toggle-theme"),r=document.querySelectorAll(".header-svg-btn"),o=localStorage.getItem("psFruitShoptheme"),a=document.querySelectorAll(".btn-wishlist");if("dark"==o){document.documentElement.classList.add("dark-theme");var l,c=t(r);try{for(c.s();!(l=c.n()).done;){l.value.classList.add("dark-theme")}}catch(t){c.e(t)}finally{c.f()}}n.addEventListener("click",(function(){document.documentElement.classList.toggle("dark-theme");var e,n=t(r);try{for(n.s();!(e=n.n()).done;){e.value.classList.toggle("dark-theme")}}catch(t){n.e(t)}finally{n.f()}var o="light";document.documentElement.classList.contains("dark-theme")&&(o="dark"),localStorage.setItem("psFruitShoptheme",o)}));var i,u=t(a);try{var s=function(){var t=i.value;t.addEventListener("click",(function(){t.classList.toggle("selected")}))};for(u.s();!(i=u.n()).done;)s()}catch(t){u.e(t)}finally{u.f()}}();
//# sourceMappingURL=products.df21bae3.js.map
