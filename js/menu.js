document.addEventListener('DOMContentLoaded', () => {
    // Находим кнопку меню по классу
    const menuButton = document.querySelector('.mobile-menu-button');
    // Находим блок меню по классу
    const menu = document.querySelector('.mobile-menu');
  
    // Добавляем обработчик событий клика по кнопке
    menuButton.addEventListener('click', () => {
      // Переключаем класс 'hidden', который управляет видимостью меню
      menu.classList.toggle('hidden');
    });
  });