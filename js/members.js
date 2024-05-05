document.addEventListener('DOMContentLoaded', function() {
    var select_members_button = document.getElementById('select_members_button');
    var members_content = document.getElementById('members_content')
    select_members_button.addEventListener('click', function() {
        if (members_content.classList.contains('hidden')){
            members_content.classList.add('xl:flex', 'flex')
            members_content.classList.remove('hidden')
        }
        else{
            members_content.classList.add('hidden')
            members_content.classList.remove('xl:flex', 'flex')
        }
    })

});