!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body"),d=null;function n(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),t.setAttribute("disabled","true"),e.removeAttribute("disabled")}e.setAttribute("disabled","true"),t.addEventListener("click",(function(){d=setInterval(n,1e3)})),e.addEventListener("click",(function(){clearInterval(d),t.removeAttribute("disabled"),e.setAttribute("disabled","true")}))}();
//# sourceMappingURL=01-color-switcher.3fafca4b.js.map