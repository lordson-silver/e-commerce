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
const ProductImg = document.getElementById("product-img");
const SmallImg = document.getElementsByClassName("small-img");


for (let i = 0; i < SmallImg.length; i++) {
    SmallImg[i].onclick = () => {
    ProductImg.src = SmallImg[i].src;
    };
};

// --------- js for toggle form ------------

const LoginForm = document.getElementById("LoginForm");
const RegForm = document.getElementById("RegForm");
const Indicator = document.getElementById("Indicator");

const Log = document.getElementById("log");
const Reg = document.getElementById("reg");

Log.addEventListener("click", () => {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
});
Reg.addEventListener("click", () => {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
});