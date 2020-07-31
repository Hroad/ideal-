
$('img').on('mousedown', function (e) {
    e.preventDefault()
})

var culSwiper = new Swiper('.cul-swiper', {
    direction: 'horizontal', // 垂直切换选项
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
var proSwiper = new Swiper('.pro-swiper', {
    direction: 'horizontal', // 垂直切换选项
    // 如果需要分页器
    pagination: {
        el: '.pro-pagination',
        clickable: true,
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.pro-next',
        prevEl: '.pro-prev',
    },
})
$(".toTop").click(function () {
    $('html,body').stop().animate({ 'scrollTop': '0' }, 500)
})