$(document).ready(function () {
  $("#new-slider").owlCarousel({
    loop: true,
    // autoPlayTimeout:4000,
    //         autoplaySpeed:3000,
    margin: 20,
    autoplay: true,
    dots: false,
    nav: true, // Enable the default nav buttons
    items: 4,
    responsive: {
      0: {
        items: 2,
        nav: false, // Enable nav buttons for small screens
      },
      600: {
        items: 3,
        nav: false, // Enable nav buttons for medium screens
      },
      991: {
        items: 2,
        nav: false, // Enable nav buttons for medium screens
      },
      1000: {
        items: 4,
        nav: true, // Enable nav buttons for large screens
      },
    },
  });
});
$(document).ready(function () {
  $("#new-slider2").owlCarousel({
    loop: true,
    // autoPlayTimeout:4000,
    //         autoplaySpeed:3000,
    margin: 20,
    autoplay: true,
    dots: false,
    nav: true, // Enable the default nav buttons
    items: 3,
    responsive: {
      0: {
        items: 2,
        nav: false, // Enable nav buttons for small screens
      },
      600: {
        items: 2,
        nav: false, // Enable nav buttons for medium screens
      },
      991: {
        items: 2,
        nav: false, // Enable nav buttons for medium screens
      },
      1000: {
        items: 3,
        nav: true, // Enable nav buttons for large screens
      },
    },
  });
});
