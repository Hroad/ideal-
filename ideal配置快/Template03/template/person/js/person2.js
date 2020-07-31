
var culSwiper = new Swiper('.cul-swiper', {
    direction: 'horizontal',
    pagination: '.swiper-pagination',
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    effect: 'coverflow',
    width: 780,
    slidesPerView: 2,
    centeredSlides: true,
    coverflow: {
        rotate: 0,
        stretch: 30,
        depth: 90,
        modifier: 2,
        slideShadows: false
    },
})

// 引入薪酬福利模块
$(".concat_welfare").load("template/welfare/html/welfare2.html");