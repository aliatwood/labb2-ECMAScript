const växlingButton = document.getElementById("meny-växling");
const nav = document.querySelector(".meny");

if (växlingButton) {
    växlingButton.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

document.querySelectorAll(".bild-kort img").forEach(img => {
    img.addEventListener("click", () => {
        img.classList.toggle("large");
    });
});
