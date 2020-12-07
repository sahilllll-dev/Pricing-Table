$(".switch").on("click", function(){
    $(this).toggleClass("active");
    if($(".switch").hasClass("active")){
        $(".changable-price-txt").text("Per Annum");
        $(".table-price-1").text("$109.99");
        $(".table-price-2").text("$122.99");
        $(".table-price-3").text("$150.99");
        $(".table-price-4").text("$339.99");
    }else {
        $(".changable-price-txt").text("Per Monthly");
        $(".table-price-1").text("$12.99");
        $(".table-price-2").text("$34.99");
        $(".table-price-3").text("$71.99");
        $(".table-price-4").text("$129.99");
    }
});
$(".table").on("click", function(){
    if($(".table").hasClass("selected")){
        $(".table").removeClass("selected");
        $(this).addClass("selected");
    }
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });