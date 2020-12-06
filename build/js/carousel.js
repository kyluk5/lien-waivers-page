$('.resources-section__list').slick({
    infinite: false,
    arrows: false,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

// $('.partner-list').slick({
//     infinite: false,
//     arrows: false,
//     // autoplay: true,
//     // autoplaySpeed: 3000,
//     draggable: true,
//     slidesToShow: 1,
//     slidesToScroll: 1
// });

$('.testimonials-section__list').slick({
    infinite: false,
    arrows: false,
    dots: true,
    draggable: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 560,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});

