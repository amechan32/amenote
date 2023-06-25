$(function () {
  $(".slick-slider").slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 15000,
    cssEase: "linear",
    slidesToShow: 5,
    swipe: false,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pesponsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });
});