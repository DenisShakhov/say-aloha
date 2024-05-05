document.addEventListener('DOMContentLoaded', function() {
    var bucket_button = document.getElementById('bucket_button');
    var bucket_content = document.getElementById('bucket_content');
    bucket_button.addEventListener('click', function() {
        if (bucket_content.classList.contains('hidden')){
            bucket_content.classList.add('xl:flex', 'flex')
            bucket_content.classList.remove('hidden')
        }
        else{
            bucket_content.classList.add('hidden')
            bucket_content.classList.remove('xl:flex', 'flex')
        }
    })

});