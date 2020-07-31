
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
    on: {
        slideChangeTransitionEnd: function () {
            $(".nowIndex").text("0" + (this.activeIndex + 1) * 1);
            // alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
        },
    },
})