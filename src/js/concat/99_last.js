$(function() {
    
    /* scrolling efect */
    var headerOffset = 55;
    $('.jsScroll').click(function(event) {
        var el = $(this);
        var elHref = el.attr('href');
        if(typeof elHref === "undefined"){
            elHref = "#" + $(this).data('href');
        }
        var top = Math.round($(elHref).offset().top);
        $('html, body').animate({
        scrollTop: (top - headerOffset) + 'px'
        }, 800);
        return false;
    });

    // odskrolování na sekci s požadovaným id
    var urlHash = window.location.hash;
    var headerOffset = 80;
    if(urlHash) {
        var top = Math.round($(urlHash).offset().top);
        $('html, body').animate({
            scrollTop: (top - headerOffset) + 'px'
        }, 800);
    }    

    /* hashing url while scrolling 
    var currentHash = "#intro";
    $(document).scroll(function () {
        $jsHashTag.each(function () {
        var top = window.pageYOffset;
        var distance = top - $(this).offset().top;
        var hash = '#'+$(this).attr('id');
        if (distance < 56 && distance > -56 && currentHash != hash) {
            if(history.pushState) {
                history.pushState(null, null, hash);
            }
            else {
                location.hash = hash;
            }
            currentHash = hash;
        }
        });
    });
    */
    
});

document.querySelector('.consent-modal-button').addEventListener('click', function() {
    orejime.show();
}, false);