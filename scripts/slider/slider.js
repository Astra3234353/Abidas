const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel__images");
const buttons = document.querySelectorAll(".button");

let imageIndex = 1;

function slideImage () {
  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

function updateClick (e) {
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imageIndex);
};

buttons.forEach((button) => button.addEventListener("click", updateClick));

