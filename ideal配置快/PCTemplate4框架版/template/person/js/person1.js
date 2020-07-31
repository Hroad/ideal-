
var culSwiper = new Swiper('.cul-swiper', {
    direction: 'horizontal', // 垂直切换选项
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.cul-next',
        prevEl: '.cul-prev',
    },
    loop: true,
    slidesPerView: 1,
    effect: 'coverflow', //  切换效果-3d
    coverflowEffect: {
        rotate: 0,
        stretch: 250,
        depth: 360,
        modifier: 3,
        slideShadows: false
    },

    on: {

        slideChangeTransitionEnd: function () {

            console.log(this.activeIndex)

            var _index = this.activeIndex;

            if (_index == "3") {
                _index = 0
            }

            if (_index == "4") {
                _index = 1
            }

            $(".buttle").each(function (index, item) { $(item).children("img").attr("src", "images/buttle.png"); })

            $(".buttle").eq(_index).addClass("paginations-buttle-active").siblings().removeClass("paginations-buttle-active");

            $(".buttle").eq(_index).children("img").attr("src", "images/buttle_on.png");

        },

    },

})

$(".buttle").click(function () {

    var index = $(this).index();

    culSwiper.slideTo(index);

})