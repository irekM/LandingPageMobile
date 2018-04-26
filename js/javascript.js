var $off=$("main").offset().top;

$("strzalka").on("click",function(){
    $("body, html").animate({
        scrollTop: $("main").offset.top//oblicza odleglosc do naszego elementu od 0.0
    },1000)
})