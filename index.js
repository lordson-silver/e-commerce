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

// --------- js for product gallery ------------
var ProductImg = document.getElementById("product-img");
var SmallImg = document.getElementsByClassName("small-img");


for (let i = 0; i < SmallImg.length; i++) {
    SmallImg[i].onclick = () => {
    ProductImg.src = SmallImg[i].src;
    };
};