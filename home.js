$(document).ready(function() {

    let resetTimer = null;

    $ ('#home-nav').hover(
        function() {
            if (resetTimer) {
                clearTimeout(resetTimer);
                resetTimer = null;
            }

            $ ('#i1').addClass('hide');
            $ ('#i2').addClass('hide');
        }, 
        function() {
            $ ('#i2').removeClass('hide');

        
            resetTimer = setTimeout(function () {
                $ ('#i2').addClass('hide');
                    $ ('#i1').removeClass('hide');
            }, 1100);
                    
        }
    );

    $('#li1, #li2, #li3, #li4, #li5').hover(
        function () {
            const map = {
                li1: '#i3',
                li2: '#i4',
                li3: '#i5',
                li4: '#i6',
                li5: '#i7'
            };
            
            $(map[this.id]).removeClass('hide');
            $(map[this.id]).fadeIn(200);
        },
        function () {
            const map = {
                li1: '#i3',
                li2: '#i4',
                li3: '#i5',
                li4: '#i6',
                li5: '#i7'
            };

            $(map[this.id]).addClass('hide');
            $(map[this.id]).hide();
        }
    );
    
    $(window).scroll(function() {

        var scrollYOffset = $(this).scrollTop();
        
        $(".tracker").html("Current Y Offset:" + scrollYOffset);

        if (scrollYOffset > 1000){
            $(".top-nav").fadeIn(200);
            $ ('.top-nav').removeClass('hide');
        } else {
            $(".top-nav").fadeOut(200);
        }

    });
})