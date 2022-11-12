const hamMenu = document.querySelector(".ham-menu");
const closeMenu = document.querySelector(".x-menu");
const navMenu = document.querySelector(".topSectMenu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    closeMenu.classList.toggle("active");
    navMenu.classList.toggle("active");   
})

closeMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    closeMenu.classList.toggle("active");
    navMenu.classList.toggle("active");   
})
document.querySelectorAll(".topSectMenu").forEach(n => n.addEventListener("click", () => {
    hamMenu.classList.remove("active");
    closeMenu.classList.remove("active");
    navMenu.classList.remove("active");
}))