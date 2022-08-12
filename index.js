const hamburger = document.querySelector(".hamburger");
const MenuItemsEl = document.getElementById("MenuItems");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    MenuItemsEl.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    MenuItemsEl.classList.remove("active");
}))