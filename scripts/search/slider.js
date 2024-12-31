export function addGalleryEvent() {
  const wrapper = document.querySelector(".wrapper");
  const carousel = document.querySelector(".carousel");
  const images = document.querySelectorAll(".carousel__images");
  const buttons = document.querySelectorAll(".button");

  if (!carousel || images.length === 0 || buttons.length === 0) {
    console.error("Carousel or required elements are missing in the DOM.");
    return;
  }

  let imageIndex = 0;


  function updateCarouselPosition() {
    imageIndex = (imageIndex + images.length) % images.length; 
    carousel.style.transform = `translateX(-${imageIndex * 100}%)`;
  }

  /**
   * Handles button click events to navigate the carousel.
   * @param {Event} e - The click event.
   */
  function handleButtonClick(e) {
    const isNext = e.target.id === "next";
    imageIndex += isNext ? 1 : -1;
    updateCarouselPosition();
  }

  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });
}
