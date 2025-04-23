document.addEventListener("DOMContentLoaded", () => {
  const sliderSections = document.querySelectorAll('.slider-container');

  sliderSections.forEach(section => {
    const track = section.querySelector('.slider-track');
    const slides = section.querySelectorAll('.slide');
    const prevBtn = section.querySelector('.slider-btn.prev');
    const nextBtn = section.querySelector('.slider-btn.next');
    let currentSlide = 0;

    prevBtn.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        track.style.transform = `translateX(-${100 * currentSlide}%)`;
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        track.style.transform = `translateX(-${100 * currentSlide}%)`;
      }
    });
  });
});

document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('active');
  });
});