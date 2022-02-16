// Open and close navbar menu for mobile screen sizes
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".nav-items");
const navbar = document.querySelector("nav");
const navBtn = document.querySelector(".nav-btn");
const mockUp = document.querySelector(".mockups");

if (window.matchMedia("(max-width:1023px)").matches) {
    let clicks = 0;
    const navMenuOpen = () => {
        if (clicks % 2 == 0) {  // open nabbar menu
            for (let i = 0; i < navItem.length; i++) {
                navItem[i].style.display = "inline-block";
            }
            hamburger.src = "./images/icon-close.svg";
            navMenu.style.display = "flex";
            navMenu.style.animation = "openNavMenu 1s ease forwards";
            navbar.style.setProperty("--displayNavShadow", "block");
            mockUp.style.marginBottom = "20%";
            navBtn.style.display = "block";
        }
        if (clicks % 2 != 0) {  // close navbar menu
            hamburger.src = "./images/icon-hamburger.svg";
            navMenu.style.animation = "closeNavMenu 1s ease forwards";
            navMenu.style.display = "none";
            navbar.style.setProperty("--displayNavShadow", "none");
            mockUp.style.marginBottom = "-20%";
            navBtn.style.display = "none";
        }

        clicks++;
    }

    hamburger.addEventListener("click", navMenuOpen);
}