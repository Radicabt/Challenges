document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "img/image1.jpg",
    "img/image2.jpg",
    "img/image3.jpg",
    "img/image4.jpg",
  ];
  const imageDisplay = document.getElementById("imageDisplay");
  const previousBtn = document.getElementById("previousBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  function updateImage() {
    imageDisplay.src = images[currentIndex];
    previousBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
  }
  previousBtn.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    updateImage();
  });

  nextBtn.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    updateImage();
  });

  updateImage();
});
