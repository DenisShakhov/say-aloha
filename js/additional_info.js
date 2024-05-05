document.addEventListener('DOMContentLoaded', function() {
    var additional_info_button_1 = document.getElementById('additional_info_1_button')
    var additional_info_content_1 = document.getElementById('additional_info_content_1')
    var additional_info_button_2 = document.getElementById('additional_info_2_button')
    var additional_info_content_2 = document.getElementById('additional_info_content_2')

    additional_info_button_1.addEventListener('mouseenter', function() {
        
        additional_info_content_1.classList.add('flex');
        additional_info_content_1.classList.remove('hidden');
    })
    additional_info_button_1.addEventListener('mouseleave', function() {
        
        additional_info_content_1.classList.add('hidden');
        additional_info_content_1.classList.remove('flex');
    })

    additional_info_button_2.addEventListener('mouseenter', function() {
        
        additional_info_content_2.classList.add('flex');
        additional_info_content_2.classList.remove('hidden');
    })
    additional_info_button_2.addEventListener('mouseleave', function() {
        
        additional_info_content_2.classList.add('hidden');
        additional_info_content_2.classList.remove('flex');
    })
})