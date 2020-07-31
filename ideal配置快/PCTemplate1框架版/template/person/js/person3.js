
var culSwiper = new Swiper('.cul-swiper', {
    direction: 'horizontal', // 垂直切换选项
    slidesPerView: 1.2,
    // 如果需要分页器
    pagination: {
        el: '.cul-pagination',
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.cul-next',
        prevEl: '.cul-prev',
    },
})