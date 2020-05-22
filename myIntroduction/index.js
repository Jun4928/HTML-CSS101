console.log('Hi!');

showImage(0);

function currentSlide(index) {
  showImage(index);
}

function showImage(index) {
  console.log(index);
	const images = document.querySelectorAll('.image'); // NodeList

	images.forEach( (each, i) => { //forEach available
    if(i === index) each.style.display="block";
    if(i !== index) each.style.display="none";
  });
}
