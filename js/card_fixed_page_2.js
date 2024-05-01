document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('fixedCard');
    const lastElement = document.querySelector('.last_element_for_fixed');

    function updateCardPosition() {
        const lastElementRect = lastElement.getBoundingClientRect();
        const lastElementBottom = window.scrollY + lastElementRect.bottom;
        const cardHeight = card.offsetHeight;
        const stopPosition = lastElementBottom - cardHeight;
        const top_px = parseInt(stopPosition - cardHeight - cardHeight + 250)  // Высчитываем позицию остановки так, чтобы низ карточки совпадал с низом последнего элемента

        if (window.scrollY >= 1100 && window.scrollY <= stopPosition) {
            card.classList.add('top-24', 'fixed', 'top-24') ; 
            card.classList.remove('absolute', `top-[${top_px}px]`)
        } else if (window.scrollY > stopPosition) {
            card.classList.add('absolute' , 'static', `top-[${top_px}px]`) ; 
            // card.classList.add('absolute' , 'static', `top-[${parseInt(stopPosition - cardHeight - cardHeight - 10)}px]`) ; 
            card.classList.remove('fixed', 'top-24')
        } else {
            card.classList.remove('absolute', 'fixed', `top-[${top_px}px]`)
        }
    }

    window.addEventListener('scroll', updateCardPosition);
    updateCardPosition(); // Вызываем функцию при загрузке для инициализации
});
