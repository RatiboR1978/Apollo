$(document).ready(function(){

    /* Slider1
     ====================================*/

    $('.slider1__block').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000
    });

    /* Slider2
     ====================================*/

    var arrImg = ['img/slide2-2.jpg', 'img/slide2-1.jpg', 'img/slide2-3.jpg'],
        j = 1,
        k = 2,
        i = 0;

    $('.slider__prev').click(function () {
        i--;
        j--;
        k--;
        if (i < 0) {
            i = arrImg.length - 1;
        }
        if (j < 0) {
            j = arrImg.length - 1;
        }
        if (k < 0) {
            k = arrImg.length - 1;
        }
        $(".slder2__image1 img").attr("src", arrImg[i]);
        $(".slder2__image2 img").fadeTo(6, 0).attr("src", arrImg[j]).fadeTo(400, 1);
        $(".slder2__image3 img").attr("src", arrImg[k]);
    });

    $('.slider__next').click(function () {
        i++;
        j++;
        k++;
        if (i > arrImg.length - 1) {
            i = 0;
        }
        if (j > arrImg.length - 1) {
            j = 0;
        }
        if (k > arrImg.length - 1) {
            k = 0;
        }
        $(".slder2__image1 img").attr("src", arrImg[i]);
        $(".slder2__image2 img").fadeTo(6, 0).attr("src", arrImg[j]).fadeTo(400, 1);
        $(".slder2__image3 img").attr("src", arrImg[k]);
    });

    /* Smooth scroll to the pages block
     ====================================*/

    $(".main__nav a").on("click", function(e) {

        e.preventDefault();

        var currentBlock = $(this).attr("href"),
            currentBlockOffset = $(currentBlock).offset().top;

        $("html, body").animate({
            scrollTop: currentBlockOffset - 20
        }, 500);

    });

    /*Button - Up
     ========================*/

    $(window).scroll(function() {

        if($(this).scrollTop() !== 0) {
            $('.bt-up').fadeIn();
        } else {
            $('.bt-up').fadeOut();
        }
    });

    $('.bt-up').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });





});

new WOW().init();