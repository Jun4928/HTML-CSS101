showImage(0);
const observed = document.querySelectorAll('.observed');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const element = entry.target;

    if(entry.isIntersecting) {
      element.classList.add('active');
    }
    if(!entry.isIntersecting) {
      element.classList.remove('active');
    }
  });
});

function currentSlide(index) {
  showImage(index);
}

function showImage(index) {
  const images = document.querySelectorAll('.image');
  const dots = document.querySelectorAll('.dot');

  images.forEach( (image, i) => {
    if(i === index) image.classList.add('active');
    if(i !== index) image.classList.remove('active');
  });

  dots.forEach( (dot, i) => {
    if(i === index) dot.classList.add('active');
    if(i !== index) dot.classList.remove('active');
  });
}

observed.forEach(each => {
  observer.observe(each);
});
