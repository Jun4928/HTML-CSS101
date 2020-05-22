showImage(0);

function currentSlide(index) {
  showImage(index);
}

function showImage(index) {
  const images = document.querySelectorAll('.image');
  const dots = document.querySelectorAll('.dot');

  images.forEach( (image, i) => {
    console.log(image);
    if(i === index) image.classList.add('active');
    if(i !== index) image.classList.remove('active');
  });

  dots.forEach( (dot, i) => {
    if(i === index) dot.classList.add('active');
    if(i !== index) dot.classList.remove('active');
  });

}