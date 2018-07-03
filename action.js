function addEventListeners() {
  addMouseoverMousoutEventListeners(".social_links", "social_links_hover");
  addMouseoverMousoutEventListeners(".download_button_big", "download_button_hover");
  addMouseoverMousoutEventListeners(".arrow_background", "arrow_background_hover");
  addMouseoverMousoutEventListeners(".testimonial", "testimonial_hover");
  addMouseoverMousoutEventListeners(".pricing_card", "pricing_card_hover");
}

function addMouseoverMousoutEventListeners(targetElementsSelector, onMouseoverMousoutClassName){
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
