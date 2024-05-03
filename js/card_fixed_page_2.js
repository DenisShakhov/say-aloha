document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('fixedCard');
    const lastElement = document.querySelector('.last_element_for_fixed');

    function updateCardPosition() {
        const lastElementRect = lastElement.getBoundingClientRect();
        const lastElementBottom = window.scrollY + lastElementRect.bottom;
        const cardHeight = card.offsetHeight;
        const stopPosition = lastElementBottom - cardHeight - 100;
        
        if (window.scrollY >= 1100 && window.scrollY <= stopPosition) {
            card.classList.add('top-24', 'fixed');
            card.classList.remove('absolute');
            card.style.top = null;
        } else if (window.scrollY > stopPosition) {
            card.classList.add('absolute');
            card.style.top = `${stopPosition - cardHeight - 420}px`;
            card.classList.remove('fixed', 'top-24');
        } else {
            card.classList.remove('absolute', 'fixed', 'top-24');
            card.style.top = null;
        }
    }

    window.addEventListener('scroll', updateCardPosition);
    updateCardPosition(); // Initialize on load
});
