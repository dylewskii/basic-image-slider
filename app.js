// Images
let imgs = document.querySelectorAll("img");

// Slider Buttons
const sliderBtns = document.querySelector(".buttons");
const next = document.querySelector(".next-btn");
const prev = document.querySelector(".back-btn");

const nextSlide = function() {
    const visibleImg = document.querySelector(".visible");
    const activeDot = document.querySelector(".active");

    const nextImg = visibleImg.nextElementSibling;
    const visibleImgIndex = visibleImg.dataset.imgIndex;

    const nextDot = activeDot.nextElementSibling;

    // Remove current img's active class
    visibleImg.classList.remove("visible");
    activeDot.classList.remove("active");

    // If on the last img, set first img to active
    if (visibleImgIndex === String(imgs.length - 1)){
        const firstImg = document.querySelector("[data-img-index='0']");
        firstImg.classList.add("visible");

        const firstDot = document.querySelector("[data-dot-index='0']");
        firstDot.classList.add("active");
    } else {
        nextImg.classList.add("visible");
        nextDot.classList.add("active");

    }
}

const prevSlide = function() {
    const visibleImg = document.querySelector(".visible");
    const activeDot = document.querySelector(".active");

    const prevImg = visibleImg.previousElementSibling;
    const visibleImgIndex = visibleImg.dataset.imgIndex;

    const prevDot = activeDot.previousElementSibling;

    visibleImg.classList.remove("visible");
    activeDot.classList.remove("active");

    if (visibleImgIndex === "0"){
        const lastImg = document.querySelector(`[data-img-index='${imgs.length - 1}']`);
        lastImg.classList.add("visible");

        const lastDot = document.querySelector("[data-dot-index='2']")
        lastDot.classList.add("active");
    } else {
        prevImg.classList.add("visible");
        prevDot.classList.add("active");
    }
}

next.addEventListener("click", nextSlide)
prev.addEventListener("click", prevSlide)