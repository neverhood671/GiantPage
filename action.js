var visibleScreenshotsCount = 7;
var cardStyles = [];
var currentFirstScreenshort = 0;

function initPage() {
  createScreenshotsScroll(visibleScreenshotsCount);
  addEventListeners();
}

function addEventListeners() {
  addMouseoverMousoutEventListeners(".social_links", "social_links_hover");
  addMouseoverMousoutEventListeners(".download_button_big", "download_button_hover");
  addMouseoverMousoutEventListeners(".arrow_background", "arrow_background_hover");
  addMouseoverMousoutEventListeners(".testimonial", "testimonial_hover");
  addMouseoverMousoutEventListeners(".pricing_card", "pricing_card_hover");
  addArrowClickEventListener();
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

function addArrowClickEventListener() {
  Array.from(document.querySelectorAll(".screenshots_block .arrow_background")).forEach(arrow => {
    arrow.addEventListener("click", scrollScreenshots, true);
  });
}

function scrollScreenshots(e) {
  if (e.currentTarget.id === "left_scroll") {
    currentFirstScreenshort = (currentFirstScreenshort === (visibleScreenshotsCount - 1)) ? 0 : currentFirstScreenshort + 1;
  } else if (e.currentTarget.id === "right_scroll") {
    currentFirstScreenshort = (currentFirstScreenshort === 0) ? 6 : currentFirstScreenshort - 1;
  }

  var pictures = Array.from(document.querySelectorAll(".screenshot"));
  var j = 0,
    currentIndex = currentFirstScreenshort;
  while (j < visibleScreenshotsCount) {
    var currentIndex = (currentIndex === (visibleScreenshotsCount - 1)) ? 0 : currentIndex + 1;
    pictures[currentIndex].setAttribute("style", cardStyles[j]);
    j++;
  }
}


function createScreenshotsScroll() {
  var pictures = Array.from(document.querySelectorAll(".screenshot"));
  var centerPicture = Math.ceil(pictures.length / 2) - 1;
  var centerPictureWidth = pictures[centerPicture].width,
    centerPictureHeight = pictures[centerPicture].height;

  for (var i = 0; i <= centerPicture; i++) {
    var leftShift,
        rightShift,
        scale = 1;

    if (i !== centerPicture) {
      leftShift = Math.abs(i - centerPicture) * (-centerPictureWidth / 2);
      rightShift = Math.abs(i - centerPicture) * (centerPictureWidth / 2);
      scale = 1 - Math.abs(i - centerPicture) * 0.1;

      cardStyles[i] = "left: calc( 50% + " + rightShift + "px); height:" + (centerPictureHeight * scale) + "px; z-index:" + i + ";";
      cardStyles[2 * centerPicture - i] = "left: calc( 50% + " + leftShift + "px); height:" + (centerPictureHeight * scale) + "px; z-index:" + i + ";";
    } else {
      cardStyles[i] = "left: 50%; height:" + centerPictureHeight + "px; z-index:" + i + ";";
    }

  }

  pictures.forEach((pic, i) => {
    pic.setAttribute("style", cardStyles[i]);
  });
}
