document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideArray = Array.from(slides.children);
    let currentIndex = 0;
  
    function goToSlide(index) {
      slides.style.transition = 'transform 0.5s ease'; // Установите здесь же
      slides.style.transform = `translateX(${-100 * index}%)`;
      currentIndex = index;
    }
  
    function updateButtons() {
      // Здесь можно добавить логику для обновления состояния кнопок, если нужно
    }
  
    document.querySelector('.prev').addEventListener('click', () => {
      if (currentIndex <= 0) {
        slides.style.transition = 'none'; // Убираем анимацию для мгновенного возврата
        goToSlide(slideArray.length - 1); // Переходим к последнему слайду без анимации
        setTimeout(() => { // Затем возвращаем анимацию
          slides.style.transition = 'transform 0.5s ease';
          goToSlide(slideArray.length - 1); // Переходим к предпоследнему слайду с анимацией
        }, 0);
      } else {
        goToSlide(currentIndex - 1);
      }
      updateButtons();
    });
  
    document.querySelector('.next').addEventListener('click', () => {
      if (currentIndex >= slideArray.length - 1) {
        slides.style.transition = 'none'; // Убираем анимацию для мгновенного возврата
        goToSlide(0); // Переходим к первому слайду без анимации
        setTimeout(() => { // Затем возвращаем анимацию
          slides.style.transition = 'transform 0.5s ease';
          goToSlide(0); // Переходим ко второму слайду с анимацией
        }, 0);
      } else {
        goToSlide(currentIndex + 1);
      }
      updateButtons();
    });
  });
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides_2');
    const slideArray = Array.from(slides.children);
    let currentIndex = 0;
  
    function goToSlide(index) {
      slides.style.transition = 'transform 0.5s ease'; // Установите здесь же
      slides.style.transform = `translateX(${-100 * index}%)`;
      currentIndex = index;
    }
  
    function updateButtons() {
      // Здесь можно добавить логику для обновления состояния кнопок, если нужно
    }
  
    document.querySelector('.prev_2').addEventListener('click', () => {
      if (currentIndex <= 0) {
        slides.style.transition = 'none'; // Убираем анимацию для мгновенного возврата
        goToSlide(slideArray.length - 1); // Переходим к последнему слайду без анимации
        setTimeout(() => { // Затем возвращаем анимацию
          slides.style.transition = 'transform 0.5s ease';
          goToSlide(slideArray.length - 2); // Переходим к предпоследнему слайду с анимацией
        }, 0);
      } else {
        goToSlide(currentIndex - 1);
      }
      updateButtons();
    });
  
    document.querySelector('.next_2').addEventListener('click', () => {
      if (currentIndex >= slideArray.length - 1) {
        slides.style.transition = 'none'; // Убираем анимацию для мгновенного возврата
        goToSlide(0); // Переходим к первому слайду без анимации
        setTimeout(() => { // Затем возвращаем анимацию
          slides.style.transition = 'transform 0.5s ease';
          goToSlide(0); // Переходим ко второму слайду с анимацией
        }, 0);
      } else {
        goToSlide(currentIndex + 1);
      }
      updateButtons();
    });
  });
  
  