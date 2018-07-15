var visibleScreenshotsCount = 7;
var cardStyles = [];
var currentFirstScreenshort = 0;

function initPage() {
    addEventListeners();
}

function addEventListeners() {
    addMouseoverMousoutEventListeners(".social_links", "social_links_hover");
    addMouseoverMousoutEventListeners(".download_button_big", "download_button_hover");
    addMouseoverMousoutEventListeners(".arrow_background", "arrow_background_hover");
    addMouseoverMousoutEventListeners(".testimonial", "testimonial_hover");
    addMouseoverMousoutEventListeners(".pricing_card", "pricing_card_hover");

    addOnClickEventListeners(".navigation", "show_nav_dropdown");
    addScroll();
}

function addMouseoverMousoutEventListeners(targetElementsSelector, onMouseoverMousoutClassName) {
    Array.from(document.querySelectorAll(targetElementsSelector)).forEach(elem => {
        elem.addEventListener("mouseover", e => {
            e.currentTarget.classList.add(onMouseoverMousoutClassName);
        }, true);
    });

    Array.from(document.querySelectorAll(targetElementsSelector)).forEach(elem => {
        elem.addEventListener("mouseout", e => {
            e.currentTarget.classList.remove(onMouseoverMousoutClassName);
        }, true);
    });
}

function addOnClickEventListeners(targetElementsSelector, onClickClassName) {
    Array.from(document.querySelectorAll(targetElementsSelector)).forEach(elem => {
        elem.addEventListener("click", e => {
            if (e.currentTarget.classList.contains(onClickClassName)) {
                e.currentTarget.classList.remove(onClickClassName);
            } else {
                e.currentTarget.classList.add(onClickClassName);
            }
        }, true);
    });
}

function addScroll() {
    let allCards = Array.from(document.querySelectorAll(".testimonial"));
    Array.from(document.querySelectorAll(".testimonials_block .arrow_background")).forEach(elem => {
        elem.addEventListener("click", e => {

            let currentTranslate = getComputedTranslateX(allCards[0]),
                cardWidth = parseInt(allCards[0].clientWidth),
                cardRightMargin = parseInt(getComputedStyle(allCards[0]).marginRight),
                shift = cardWidth + cardRightMargin,
                shiftDirection = e.currentTarget.classList.contains("left_arrow_background") ? -1 : 1,
                maxShift = (allCards.length - 1) * shift,
                conclusionShift = Math.abs(currentTranslate) >= maxShift ?
                0 : currentTranslate + shiftDirection * shift;

            allCards.forEach(card => {
                card.style.transform = `translateX(${conclusionShift}px)`;
            });

        }, true);
    });
}

function getComputedTranslateX(obj) {
    if (!window.getComputedStyle) return;
    var style = getComputedStyle(obj),
        transform = style.transform || style.webkitTransform || style.mozTransform;

    mat = transform.match(/^matrix\((.+)\)$/);
    return mat ? parseFloat(mat[1].split(', ')[4]) : 0;
}