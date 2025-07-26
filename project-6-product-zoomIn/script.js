const smallImages = document.querySelectorAll(".product-image-small img");
const largeImage = document.querySelector(".product-image-large img");

smallImages.forEach((indvImg) => {
  indvImg.addEventListener("click", () => {
    largeImage.src = indvImg.src;
  });
});

/* 
// another method
const smallImagesContainer = document.querySelector(".product-image-small");
const largeImage = document.querySelector(".product-image-large img");

smallImagesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    largeImage.src = e.target.src;
  }
});
*/
