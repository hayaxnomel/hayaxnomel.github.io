$(document).mousemove(function(e) {
    $('#tip').css({
        left: e.pageX + 20 + 'px',
        top: e.pageY + 20 + 'px'
    });
});

var tgwltt = 0;

$(document).ready(function() {

    var isChecked = false;

    $('#effects').prop('checked', false);

    $('#effects').change(function() {
        isChecked = $(this).is(':checked');
    });

    $('.art').hover( 
        function() {
            if (isChecked) {
                $(this).css({
                    'background-size': '92%',
                    'box-shadow': 'none'
                });
            } 
        },

    function() {
        if (isChecked) {
            $(this).css({
                'background-size': '101%',
                'box-shadow': 'inset 0 0 4px 4px bisque'
            })
        }
    });

    $('#p5').hover(
        function() {
            $('#tip').removeClass('hidden');
        },
        function(){
            $('#tip').addClass('hidden');
        }
    )

    

    $('#p5').on('click', function() {
        if (tgwltt === 0) {
            $('#makotoKonno').css('background-image', 'url(images/art/maKO2.jpg)');
            $('#chiakiMamiya').css('background-image', 'url(images/art/chiMA2.jpg)');
            $('#kousukeTsuda').css('background-image', 'url(images/art/koTSU2.jpg)');
            tgwltt = 1;
        } else {
            $('#makotoKonno').css('background-image', 'url(images/art/maKO1.jpg)');
            $('#chiakiMamiya').css('background-image', 'url(images/art/chiMA1.jpg)');
            $('#kousukeTsuda').css('background-image', 'url(images/art/koTSU1.jpg)');
            tgwltt = 0;
        }
    });
})