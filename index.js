const hamburger = document.querySelector(".hamburger");
const MenuItemsEl = document.getElementById("MenuItems");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    MenuItemsEl.classList.toggle("active");
})

