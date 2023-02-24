var sliderImages = document.querySelectorAll('#slider img');
var currentImage = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  sliderImages[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % sliderImages.length;
  sliderImages[currentImage].classList.add('active');
}



function changeImage(imageName) {
  document.getElementById("mainImage").src = imageName;
}