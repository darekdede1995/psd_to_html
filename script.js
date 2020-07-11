var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    document.querySelector("header").classList.toggle("active");
    hamburger.classList.toggle("is-active");
});

if (window.innerWidth > 767) {
    const pictogramBacon = document.querySelector('.pictogram__container:nth-child(6)');
    const pictogramContainer = document.querySelector('.pictograms');

    pictogramObserver = new IntersectionObserver((entry, observer) => {
        if (entry[0].intersectionRatio > 0) {
            pictogramContainer.style.animation =
                `slide-in-left 1s forwards`;
            observer.unobserve(entry[0].target);
        }
    })

    pictogramObserver.observe(pictogramBacon);
}

document.querySelector(".select--language").addEventListener("change", changeLanguage);
window.onload = changeLanguage;

function changeLanguage() {
    const lang = document.querySelector('.select--language');
    document.documentElement.lang = lang.value;
    lang.style = `background-image:url("resources/${lang.value}.svg")`;
}