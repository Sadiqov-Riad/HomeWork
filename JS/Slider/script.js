let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const thumbnails = document.querySelectorAll('.thumbnail');
const totalSlides = slides.length;

// Обновляем счетчик
document.getElementById('total-slides').textContent = totalSlides;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
    
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    thumbnails[index].classList.add('active');
    
    document.getElementById('current-slide').textContent = index + 1;
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    }
    
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}


// Управление клавиатурой
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});