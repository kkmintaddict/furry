$(document).ready(function() {

    $(".img-change").hover(
        function() {  
            $(".drawMe").toggleClass('show');
        });

    $(".designChange01").hover(
        function() {  
            $("#chang01").toggleClass('hide');
        });
    $(".designChange02").hover(
        function() {  
            $("#chang02").toggleClass('hide');
        });
    $(".designChange03").hover(
        function() {  
            $("#chang03").toggleClass('hide');
        });



    //

    $(".adoptChange01").hover(
        function() {  
            $("#puppy01").toggleClass('hide');
        });
    
    $(".adoptChange02").hover(
        function() {  
            $("#puppy02").toggleClass('hide');
        });

    $(".adoptChange03").hover(
        function() {  
            $("#puppy03").toggleClass('hide');
        });
        
    $(".adoptChange04").hover(
        function() {  
            $("#puppy04").toggleClass('hide');
        });

    $(".adoptChange05").hover(
        function() {  
            $("#puppy05").toggleClass('hide');
        });

    $(".adoptChange06").hover(
        function() {  
            $("#puppy06").toggleClass('hide');
        });
    
    

    // Example starter JavaScript for disabling form submissions if there are invalid fields

    (function () {
        'use strict'
    
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
    
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
    
            form.classList.add('was-validated')
            }, false)
        })
    })()

    
});