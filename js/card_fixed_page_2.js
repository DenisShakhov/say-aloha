

const elements = [shto_vkl, route, programma, data_i_stoimost];

function resetStyles(except) {
    elements.forEach(el => {
        if (el !== except) {
            el.classList.remove('bg-blue', 'text-white', 'font-bold');
            el.classList.add('border', 'border-blue-text', 'text-blue-text');
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('fixedCard');
    const lastElement = document.querySelector('.last_element_for_fixed');
    const buttons = document.getElementById('buttons_page_2');
    /////////////
    const programma_excursii = document.querySelector('.programma_excursii')
    const important_to_know = document.querySelector('.important_to_know')
    const mapElement = document.querySelector('.map');
    const data_i_stoimost = document.getElementById('data_i_stoimost')
    const programma = document.getElementById('programma')
    const route = document.getElementById('route')
    const shto_vkl = document.getElementById('shto_vkl')



    function isElementVisibleAndScrolledPast(element) {
        if (!element) {
            console.log(element)
            return false
        }
        var rect = element.getBoundingClientRect();
        var isVisible = (
            rect.top < window.innerHeight &&
            rect.bottom <= window.innerHeight
        );
        return isVisible;
    }
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

        if (isElementVisibleAndScrolledPast(important_to_know)) {
            resetStyles(shto_vkl);
            shto_vkl.classList.add('bg-blue', 'text-white', 'font-bold');
            shto_vkl.classList.remove('border', 'border-blue-text', 'text-blue-text');
        } else if (isElementVisibleAndScrolledPast(mapElement)) {
            resetStyles(route);
            route.classList.add('bg-blue', 'text-white', 'font-bold');
            route.classList.remove('border', 'border-blue-text', 'text-blue-text');
        } else if (isElementVisibleAndScrolledPast(programma_excursii)) {
            resetStyles(programma);
            programma.classList.add('bg-blue', 'text-white', 'font-bold');
            programma.classList.remove('border', 'border-blue-text', 'text-blue-text');

        } else {
            resetStyles(data_i_stoimost);
            data_i_stoimost.classList.add('bg-blue', 'text-white', 'font-bold');
            data_i_stoimost.classList.remove('border', 'border-blue-text', 'text-blue-text');
        }
    }

    window.addEventListener('scroll', updateCardPosition);
    updateCardPosition(); // Initialize on load
});
