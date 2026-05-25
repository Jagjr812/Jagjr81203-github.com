/* =========================
   Image Slider
========================= */
let currentIndex = 0;
let slides = document.getElementsByClassName("slide");

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slides[currentIndex].classList.add("active");
}

function changeSlide(direction) {
    showSlide(currentIndex + direction);
}

setInterval(function () {
    showSlide(currentIndex + 1);
}, 3000);

showSlide(currentIndex);
