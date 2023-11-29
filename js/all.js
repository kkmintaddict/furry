$(document).ready(function() {

    $(".img-change").hover(
        function() {  
            $(".drawMe").toggleClass('show');
        });

    $(".indexChange01").hover(
        function() {  
            $("#chang01").toggleClass('hide');
        });
    $(".indexChange02").hover(
        function() {  
            $("#chang02").toggleClass('hide');
        });
    $(".indexChange03").hover(
        function() {  
            $("#chang03").toggleClass('hide');
        });



    //

    $(".dogChange01").hover(
        function() {  
            $("#puppy01").toggleClass('hide');
        });
    
    $(".dogChange02").hover(
        function() {  
            $("#puppy02").toggleClass('hide');
        });

    $(".dogChange03").hover(
        function() {  
            $("#puppy03").toggleClass('hide');
        });
        
    $(".dogChange04").hover(
        function() {  
            $("#puppy04").toggleClass('hide');
        });

    $(".dogChange05").hover(
        function() {  
            $("#puppy05").toggleClass('hide');
        });

    $(".dogChange06").hover(function() {  
            $("#puppy06").toggleClass('hide');
        });

    //
        

    

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