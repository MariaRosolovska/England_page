$(function(){

    AOS.init({
        duration: 1600,
    });

    $('.photo__slider').slick({
        
        prevArrow: '<button type="button" class="slick-prev"><img src="images/button/Arrow-left.png" alt="" style="width: 40px; height: 40px;"></button>',
        nextArrow: '<button type="button" class="slick-next">  <img src="images/button/Arrow-right.png" alt="" style="width: 40px; height: 40px;"></button>'
    });


    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });

    AOS.refresh();
});