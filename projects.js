$(document).ready(function() {

    $('#WHWB').hover(function() {
        $('#NIKOL').css('transform', 'translateX(40px)');
        $('#KALEB').css('transform', 'translateX(-40px)');
    }, function () {
        $('#NIKOL').css('transform', 'translateX(180px)');
        $('#KALEB').css('transform', 'translateX(-230px)');
    });

    $('#WHWB').on('click', function(){
        window.location.href=('projects/whwb.html');
    });

    $('#MIR').hover(function () {
        $('#KAMI').css('transform', 'translateX(-180px)');
    }, function () {
        $('#KAMI').css('transform', 'translateX(0)');
    });

    $('#li1, #li2, #li3').hover(
        function () {
            const map = {
                li1: '#i3',
                li2: '#i4',
                li3: '#i5'
            };
            
            $(map[this.id]).removeClass('hide');
            $(map[this.id]).fadeIn(200).slideDown(300);
        },
        function () {
            const map = {
                li1: '#i3',
                li2: '#i4',
                li3: '#i5'
            };

            $(map[this.id]).addClass('hide');
            $(map[this.id]).fadeOut(100);
        }
    );
    
    $(window).scroll(function() {

        var scrollYOffset = $(this).scrollTop();
        
        $(".tracker").html("Current Y Offset:" + scrollYOffset);

    });
})