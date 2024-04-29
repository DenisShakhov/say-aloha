
// document.addEventListener('DOMContentLoaded', () => {
//     const card = document.getElementById('fixedCard');
//     const initialTop = card.getBoundingClientRect().top + window.scrollY; // Начальное положение относительно документа

//     window.addEventListener('scroll', () => {
//         console.log(window.scrollY)
//         if (window.scrollY >= 1000) {
//             card.classList.add('sticky');
            
//             card.classList.add('top-10');
//             card.classList.remove('xl:flex')
//             card.classList.remove('hidden')

//         } else {
//             card.classList.remove('sticky', 'top-20')
//             card.classList.add('xl:flex')
//         }
//     });
// });