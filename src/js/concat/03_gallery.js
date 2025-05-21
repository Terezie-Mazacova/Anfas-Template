$(function(){
    /* SWIPER GALLERY */
    var galleryTop
    var galleryThumbs
  
    /* opening gallery */
    $('.jsOpenGallery').click(function(){
        var galleryId = '#gallery' + $(this).data("gallery-id");
        $(galleryId).fadeIn('fast');
        var gallerySlide = $(".jsArticleSwiperSlide[data-index=" + $(this).data("index") + "]");
        var gallerySlideIndex = $( ".jsArticleSwiperSlide" ).index(gallerySlide);
        bringSwiperToLife(galleryId, gallerySlideIndex, false, true);
    });

    function bringSwiperToLife(offender, initSlide, preloadSlide, lazyLoadingSlide){
        galleryTop = new Swiper(offender + ' .gallery-top', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 10,
            preloadImages: preloadSlide,
            lazyLoading: lazyLoadingSlide,
            initialSlide: initSlide,
            keyboardControl: true,
            mousewheelControl: true
        });
        galleryThumbs = new Swiper(offender + ' .gallery-thumbs', {
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 'auto',
            touchRatio: 0.2,
            slideToClickedSlide: true,
            initialSlide: initSlide
        });
        galleryTop.params.control = galleryThumbs;
        galleryThumbs.params.control = galleryTop;

        $('html').css('overflow', 'hidden');
    }

    /* closing gallery */
    $('.swiper-close').click(function(){
        $(this).parent().fadeOut('fast', function() {
            galleryThumbs.slideTo(0, 0);
        });
        $('html').css('overflow', 'auto');
    })
    // closing on ESC keydown
    $(document).keydown(function(event){
        if (event.which == 27 && $('.swiper-modal').is(':visible')) {
            $('.swiper-close').trigger('click');
        }
    });
    /* SWIPER GALLERY :: END */
});