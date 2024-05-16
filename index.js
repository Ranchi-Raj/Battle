document.addEventListener('mousemove', function(e) {
    const cursor = document.getElementById('customCursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

let slideIndex = 0;
showSlide(slideIndex);

window.addEventListener('scroll', function() {
    const distanceFromTop = window.scrollY;
    moveSlide(distanceFromTop);
});

function moveSlide(distanceFromTop) {
    const slides = document.getElementsByClassName("carousel-inner")[0].getElementsByTagName("img");
    const totalSlides = slides.length;

    const index = Math.floor((distanceFromTop / window.innerHeight) * totalSlides);
    
   const newIndex = Math.min(totalSlides - 1, Math.max(0, index));

   const xOffset = newIndex * window.innerWidth;

    document.querySelector('.carousel-inner').style.transform = `translateX(-${xOffset}px)`;
}
