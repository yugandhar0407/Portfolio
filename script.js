const menuOpen = document.querySelector("#menu-open-btn");
const menuClose = document.querySelector("#menu-close-btn");
const navLinks = document.querySelectorAll(".header .navbar .menu-item");

//Toggle menu visibility
menuOpen.addEventListener("click", () => {
    document.body.classList.toggle("show");
});

// close menu when click a close
menuClose.addEventListener("click", () => menuOpen.click());

//Hide menu when click a menu item
navLinks.forEach(item => {
    item.addEventListener("click", () => menuOpen.click());
});

// Hide menu when clicking outside
document.addEventListener("click", (event) => {
    if(!menuClose.contains(event.target) && event.target !== menuOpen){
        menuClose.body.classList.remove("show");
    }
})
