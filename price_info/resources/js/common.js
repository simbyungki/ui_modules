$(function(){
    //btn page top
    $('.btn-top').on('click', function(){
        var scTop = $(window).scrollTop();
        var speed = scTop <= 500 ? 400 : 500;
        $('html, body').animate({
            scrollTop: 0
        }, speed);
    });
});

//btn top 버튼 노출
$(window).on('scroll', function(){
    var scTop = $(window).scrollTop();
    if(scTop > 200){
        $('.btn-top').fadeIn();
    }else{
        $('.btn-top').fadeOut();
    }
});

//콘텐츠 애니메이션
$.fn.contAni = function () {
    $.each(this, function (i, v) {
        $window = $(window);
        var delayPosition = 0,
            windowheight;
        $window.on('resize', function () {
            insertTargetPosition();
        });
        $window.on('scroll', function () {
            var position = $window.scrollTop() + windowheight - delayPosition;
            $(v).each(function () {
                if (!$(this).hasClass('active') && $(this).data('offsetTop') < position) {
                    $(this).addClass('active');
                }
            });
        });
        function insertTargetPosition() {
            windowheight = $window.height();
            var position = $window.scrollTop() + windowheight - delayPosition;
            $(v).each(function () {
                $(this).data('offsetTop', ($(this).offset().top));
                if (!$(this).hasClass('active') && $(this).data('offsetTop') < position) {
                    $(this).addClass('active');
                }
            });
        }
        (function init() {
            insertTargetPosition();
        })();
    });
}