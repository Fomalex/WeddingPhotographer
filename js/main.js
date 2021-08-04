$(document).ready(() => {
    // for carousel
    $('#main_cards').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $('.main_card').css('display','flex');

    // for tabs
    $('#photo_session_packages').tabs();

    //for accordion
    $('#questions_accordion').accordion({
        heightStyle: "content",
        collapsible: true,
        active: null
    });
    $('.ui-accordion-header-icon').remove();
});