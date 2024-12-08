// main캐러셀
const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel_control.left');
const nextButton = document.querySelector('.carousel_control.right');

let currentIndex = 1;

function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.classList.remove('previous', 'current', 'next');

        if (index === currentIndex - 1) {
            slide.classList.add('previous');
        } else if (index === currentIndex) {
            slide.classList.add('current');
        } else if (index === currentIndex + 1) {
            slide.classList.add('next');
        }
    });


    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}


nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length; 
    updateCarousel();
});


prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
    updateCarousel();
});


updateCarousel();

// Region 캐러셀 
const regionTrack = document.querySelector('#region_carousel .region_carousel_track');
const regionSlides = Array.from(regionTrack.children);
const regionPrevButton = document.querySelector('#region_carousel .region_carousel_control.left');
const regionNextButton = document.querySelector('#region_carousel .region_carousel_control.right');

let regionCurrentIndex = 1; 

function updateRegionCarousel() {
    const slideWidth = regionSlides[0].getBoundingClientRect().width;

 
    regionSlides.forEach((slide, index) => {
        slide.classList.remove('previous', 'current', 'next');
        if (index === regionCurrentIndex - 1) {
            slide.classList.add('previous');
        } else if (index === regionCurrentIndex) {
            slide.classList.add('current'); 
        } else if (index === regionCurrentIndex + 1) {
            slide.classList.add('next'); 
        }
    });

 
    const offset = -(regionCurrentIndex * slideWidth);
    regionTrack.style.transform = `translateX(${offset}px)`;
}


regionNextButton.addEventListener('click', () => {
    regionCurrentIndex = (regionCurrentIndex + 1) % regionSlides.length;
    updateRegionCarousel();
});


regionPrevButton.addEventListener('click', () => {
    regionCurrentIndex = (regionCurrentIndex - 1 + regionSlides.length) % regionSlides.length;
    updateRegionCarousel();
});


updateRegionCarousel();

// navi스크롤 
document.querySelectorAll('.nav_menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', 
                block: 'start'      
            });
        }
    });
});
