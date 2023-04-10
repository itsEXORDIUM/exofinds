/*************************************************************************/
/***************************** FOUNDATION INIT ***************************/
/*************************************************************************/

// $(document).foundation();

$( document ).ready(function() {
    $('.slider_home').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true,
        fade: true
    });

    $('.latest.bloc_home .container_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: false,
        arrows: true,
        prevArrow:"<button type='button' aria-label='Previous Slide' title='Previous Slide' class='btn_prev btn_arrow'><span></span><span class='show-for-sr'>Previous Slide</span></button>",
        nextArrow:"<button type='button' aria-label='Next Slide' title='Next Slide' class='btn_next btn_arrow'><span></span><span class='show-for-sr'>Next Slide</span></button>",
    });

    $('#favorites .item .url a').hover(
        function() {
            $(this).parents('.item').addClass('hover');
        }, function() {
            $(this).parents('.item').removeClass('hover');
        }
    );
});