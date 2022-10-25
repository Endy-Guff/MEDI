$(function(){
    $('.header__slider').slick({
        autoplay: true,
    });
    
    $(".tabs__item").not(":first").hide()
    $(".tabs__nav .tabs__nav-item").on("click", function(){
        $(".tabs__nav .tabs__nav-item").removeClass("active").eq($(this).index()).addClass("active")
        $(".tabs__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active")
    
})