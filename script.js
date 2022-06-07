const burgerMenu = document.getElementById("burger-menu");
const nav = document.getElementsByTagName("ul")[0];
let initialHeight = nav.clientHeight;
let width = nav.offsetWidth;
console.log(nav.clientHeight);
nav.style.height = 0;
nav.style.overflow = "hidden";
let isMenuOpen = false;
burgerMenu.addEventListener("click", () => {
    isMenuOpen ? (isMenuOpen = false) : (isMenuOpen = true);
    console.log(isMenuOpen);
    let count = nav.clientHeight;
    if (!isMenuOpen) {
        let slideUp = setInterval(() => {
            if (count > 0) {
                count -= 1;
                nav.style.height = `${count}px`;
            }
            console.log("go");
            if (count == 0) {
                clearInterval(slideUp);
            }
        }, 10);
    } else if (isMenuOpen) {
        let slideDown = setInterval(() => {
            if (count < initialHeight) {
                count += 1;
                nav.style.height = `${count}px`;
                console.log("gop");
            }
            if (count == initialHeight) {
                clearInterval(slideDown);
            }
        }, 10);
    }
});
