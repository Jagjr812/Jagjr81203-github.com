let currentIndex = 0;
let slides = document.getElementsByClassName("slide");

// Show slide
function showSlide(index) {

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    // Show current slide
    slides[currentIndex].classList.add("active");
}

// Button controls
function changeSlide(direction) {
    showSlide(currentIndex + direction);
}

// Auto-play every 3 seconds
setInterval(function () {
    showSlide(currentIndex + 1);
}, 3000);

// Initialize
showSlide(currentIndex);
