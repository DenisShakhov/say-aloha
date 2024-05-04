
document.addEventListener('DOMContentLoaded', function() {
    // Добавление обработчика событий к каждой кнопке dropdown
    document.querySelectorAll('.dropdownButton').forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling; // Получение соответствующего контента
            var xl = 1280
             // Переключение видимости
            // Использование классов для стилей на разных размерах окна
            if (window.innerWidth >= xl){
                if (content.classList.contains('xl:flex')){
                    
                    content.classList.remove('xl:flex')
                    content.classList.remove('flex')
                    content.classList.add('hidden')
                } else{
                    content.classList.remove('hidden')
                    content.classList.add('xl:flex')
                }
            }
            else{
                if (content.classList.contains('hidden')){
                    content.classList.remove('hidden')
                    content.classList.add('flex')
                }else{
                    content.classList.remove('flex')
                    content.classList.add('hidden')
                }
            }
        });
    });
});