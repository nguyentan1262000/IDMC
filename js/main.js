$(document).ready(function () {
  $(".list-slide-properties").owlCarousel({
    items: 2,
    center: true,
    loop: true,
    dots: false,

    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: { items: 1, center: false, nav: false },
      768: { items: 2, nav: true, center: true },
    },
  });
  $(".list-management-img").owlCarousel({
    items: 3.5,
    dots: false,
    nav: false,
    margin: 25,
    loop: true,
    autoWidth: true,
    autoplay: true,
  });
  $(".list-banner-img").owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    dots: true,
    autoplay: true,
  });
  $(".list-slide-management-owl-prev").click(function () {
    $(".list-management-img").trigger("prev.owl.carousel", [300]);
  });

  $(".list-slide-management-owl-next").click(function () {
    $(".list-management-img").trigger("next.owl.carousel", [300]);
  });

  $(".language i").click(function () {
    $(".language .list-language").slideToggle();
  });

  $(".language-active").click(function () {
    $(".language .list-language").slideToggle();
  });

  let banner = $(".banner").outerHeight();
  let heightHeader = $("header").outerHeight();

  $(window).scroll(function () {
    let sticky = $("header");
    scroll = $(window).scrollTop();
    if (scroll >= banner - heightHeader) {
      sticky.addClass("header-bg");
    } else {
      sticky.removeClass("header-bg");
    }
  });

  $(".search i").click(function () {
    $(".form-search-header").animate({ width: "toggle" }, 500);
  });
});
