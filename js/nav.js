
document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('nav');
    const initialTop = card.getBoundingClientRect().top + window.scrollY; // Начальное положение относительно документа
    const after_card = document.getElementById('after_nav')
    window.addEventListener('scroll', () => {
        console.log(window.scrollY)
        if (window.scrollY >= 100) {
            card.classList.add('fixed', 'bg-light-blue');
            after_card.classList.add('xl:mt-[166px]')
            after_card.classList.remove('xl:mt-[80px]')     

        } else {
            card.classList.remove('fixed', 'bg-light-blue')
            after_card.classList.remove('xl:mt-[166px]')
            after_card.classList.add('xl:mt-[80px]') 
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var trigger = document.getElementById('dropdown_excursion_trigger');
    var dropdown = trigger.querySelector('.dropdown-content');
    var excursion_button = document.getElementById('excursion_button')
    excursion_button.addEventListener('mouseenter', function() {
        dropdown.classList.add('flex');
        dropdown.classList.remove('hidden');
    });

    trigger.addEventListener('mouseleave', function() {
        dropdown.classList.add('hidden');
        dropdown.classList.remove('flex');
    });
});