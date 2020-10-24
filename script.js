$(".slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav-thumbnails",
});

$(".slider-nav-thumbnails").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider",
  dots: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        draggable: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        draggable: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        draggable: true,
        slidesToScroll: 1,
      },
    },
  ],
});

//remove active class from all thumbnail slides
$(".slider-nav-thumbnails .slick-slide").removeClass("slick-active");

//set active class to first thumbnail slides
$(".slider-nav-thumbnails .slick-slide").eq(0).addClass("slick-active");

// On before slide change match active thumbnail to current slide
var slides = $(".slider_item .image-holder img");
$(".slider").on("beforeChange", function (
  event,
  slick,
  currentSlide,
  nextSlide
) {
  var mySlideNumber = nextSlide;
  slides.removeClass("animate__animated animate__slideInUp");
  slides.eq(nextSlide).addClass("animate__animated animate__slideInUp");
  //   slides.eq(nextSlide + 1).addClass("animate__animated animate__bounce");
  $(".slider-nav-thumbnails .slick-slide").removeClass("slick-active");
  $(".slider-nav-thumbnails .slick-slide")
    .eq(mySlideNumber)
    .addClass("slick-active");
});

$(".slider").on("afterChange", function (event, slick, currentSlide) {
  $(".content").hide();
  $(".content[data-id=" + (currentSlide + 1) + "]").show();
});
