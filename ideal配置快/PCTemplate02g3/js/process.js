
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

// 切换按钮   前
$(".pro-prev").click(function () {

    console.log(1)

    $(".pro-pagination .swiper-pagination-bullet").each(function (index, item) {

        // console.log(item)

        // 临界值判断 
        if ($(item).index() == "0") {

            if ($(item).css("top") == "0px") {

                // 强制定值
                $(".pro-pagination .swiper-pagination-bullet").eq(0).css("top", "0px");
                $(".pro-pagination .swiper-pagination-bullet").eq(1).css("top", "111px");
                $(".pro-pagination .swiper-pagination-bullet").eq(2).css("top", "222px");

                return false;

            }

        }

        var oldTop = $(item).css('top');

        // console.log(oldTop)

        // parseInt取整  也可以用parseFloat包含小数  111 为挪动参数
        $(item).css("top", (parseInt(oldTop) * 1 + 111) + "px")

        oldTop = 0;

    });

})


// 切换按钮  后
$(".pro-next").click(function () {

    $(".pro-pagination .swiper-pagination-bullet").each(function (index, item) {

        // console.log($(item).index())

        // 临界值判断 
        if ($(item).index() == "3") {

            if ($(item).css("top") == "0px") {

                // 强制定值
                $(".pro-pagination .swiper-pagination-bullet").eq(0).css("top", "-333px");
                $(".pro-pagination .swiper-pagination-bullet").eq(1).css("top", "-222px");
                $(".pro-pagination .swiper-pagination-bullet").eq(2).css("top", "-111px");

                return false;

            }

        }

        var oldTop = $(item).css('top');

        // console.log(oldTop)

        $(item).css("top", parseInt(oldTop) - 111 + "px")

        oldTop = 0;

    });

})