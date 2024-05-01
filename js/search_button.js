document.addEventListener('DOMContentLoaded', function() {
    var search_button = document.getElementById('search_button');
    var search_content = document.getElementById('search_content');
    var search_type_button = document.getElementById('search_type_button')
    search_button.addEventListener('click', function() {
        if (search_content.classList.contains('hidden')){
                search_content.classList.add('xl:flex', 'flex')
                search_content.classList.remove('hidden')
        }
        else{
            search_content.classList.add('hidden')
            search_content.classList.remove('xl:flex', 'flex')
        }
    });
    search_type_button.addEventListener('click', function(){
        search_content.classList.add('hidden')
        search_content.classList.remove('xl:flex', 'flex')
    })

});