document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('fixedCard');
    const lastElement = document.querySelector('.last_element_for_fixed');
    const buttons = document.getElementById('buttons_page_2');
    function updateCardPosition() {
        const lastElementRect = lastElement.getBoundingClientRect();
        const lastElementBottom = window.scrollY + lastElementRect.bottom;
        const cardHeight = card.offsetHeight;
        const stopPosition = lastElementBottom - cardHeight - 100;
        
        if (window.scrollY >= 1100 ) {
            card.classList.add('top-24', 'fixed');
            buttons.classList.add('fixed', 'top-24', 'bg-white', 'rounded-3xl', 'z-[100]', 'py-[15px]', 'px-[18px]')
        } 
        else {
            card.classList.remove('fixed', 'top-24');
            buttons.classList.remove('fixed', 'top-24', 'bg-white', 'rounded-3xl', 'z-[100]', 'py-[15px]', 'px-[18px]')
        }
    }

    window.addEventListener('scroll', updateCardPosition);
    updateCardPosition(); // Initialize on load
});
