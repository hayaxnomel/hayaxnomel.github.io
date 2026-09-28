$(document).ready(function() {

    // setTimeout(function() {
    //     $('.front-char').removeClass('hidden').addClass('right');
    // }, 100);

        setTimeout(() => {
            $('#filter').removeClass('blur-filter').addClass('focus');

            setTimeout(() => {
                $('#filter').addClass('hidden');
            }, 300);
        }, 200);

    $('.nav-button').on('click', function (){
        $('#filter').removeClass('hidden');
        setTimeout(() => {
            $('#filter').removeClass('focus').addClass('blur-filter');
        }, 50);
    });

    

    $("#pHome").on('click', function(){
        setTimeout(() => {
            window.location.href = "home.html";
        }, 400);
    });

    $("#pWork").on('click', function(){
        setTimeout(() => {
            window.location.href = "art.html";
        }, 400);
        
    });

    $("#pComms").on('click', function(){
        window.location.href = "comms.html";
    });

    $("#pExp").on('click', function(){
        window.location.href = "exp.html";
    });

    $("#pMerch").on('click', function(){
        window.location.href = "merch.html";
    });

    $("#pProj").on('click', function(){
        window.location.href = "projects.html";
    });


    
});