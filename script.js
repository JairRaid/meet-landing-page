let header = document.querySelector(".header");
let isVisible = true;

function checkWidth() {
    let img = document.createElement("img");
    img.setAttribute("src", "./assets/desktop/image-hero-right.png")
    img.setAttribute("alt", "hero right");
    img.setAttribute("id", "right");

    if (window.innerWidth > 1024 && isVisible) {
        console.log("width > 1024");
        header.appendChild(img);
        isVisible = false;
    }
    if (window.innerWidth < 1024 && isVisible === false) {
        console.log("width < 1024");
        let child = document.getElementById("right");
        child.remove();
        isVisible = true;
    }
}

window.onload = checkWidth;

window.onresize = checkWidth;
