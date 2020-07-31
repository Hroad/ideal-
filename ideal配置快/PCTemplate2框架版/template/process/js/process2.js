
$('img').on('mousedown', function (e) {
    e.preventDefault()
})

// 下一页按钮
$(".swiper-button-next").click(function () {

    var _index = 0;

    $(".swiper-pagination span").each(function (index, item) {

        if ($(item).hasClass("swiper-pagination-active")) {

            _index = $(item).index() + 1;

            if (_index >= 4) {
                _index = 4;
            }

            return false;

        }

    })

    $(".swiper-slide").each(function (index, item) {

        var id = $(item).index();

        if ((id * 1 + 1) % 2 == 0) {

            $(item).css("background", "#2373b1");

        } else {

            $(item).css("background", "#4394d8");

        }

    })

    $(".swiper-slide").eq(_index).addClass("z_max").siblings().removeClass("z_max");

    $(".swiper-slide").eq(_index).css("background", "#ffffff").children(".main_content").css("display", "block").siblings(".right_show").css("display", "none");

    $(".swiper-slide").eq(_index - 1).children(".right_show").css({ "right": "450px", "display": "block" });

    $(".swiper-slide").eq(_index - 1).children(".main_content").css({ "display": "none" });

    if (_index != 4) {

        $(".swiper-slide").eq(_index + 1).children(".right_show").css({ "right": "22px", "display": "block" });

        $(".swiper-slide").eq(_index + 1).children(".main_content").css({ "display": "none" });

    }

    $(".swiper-slide").eq(_index - 1).css("zIndex", "5");

    $(".swiper-slide").eq(_index - 2).css("zIndex", "4");

    $(".swiper-slide").eq(_index + 1).css("zIndex", "5");

    $(".swiper-slide").eq(_index + 2).css("zIndex", "4");

    $(".swiper-slide").eq(_index + 3).css("zIndex", "3");

    $(".swiper-slide").eq(_index + 4).css("zIndex", "2");

    $(".swiper-pagination span").eq(_index).addClass("swiper-pagination-active").siblings().removeClass("swiper-pagination-active");

})

// 上一页按钮
$(".swiper-button-prev").click(function () {

    var _index = 0;

    $(".swiper-pagination span").each(function (index, item) {

        if ($(item).hasClass("swiper-pagination-active")) {

            _index = $(item).index() - 1;

            if (_index <= 0) {
                _index = 0;
            }

            return false;

        }

    })

    $(".swiper-slide").each(function (index, item) {

        var id = $(item).index();

        if ((id * 1 + 1) % 2 == 0) {

            $(item).css("background", "#2373b1");

        } else {

            $(item).css("background", "#4394d8");

        }

    })

    $(".swiper-slide").eq(_index).addClass("z_max").siblings().removeClass("z_max");

    $(".swiper-slide").eq(_index).css("background", "#ffffff").children(".main_content").css("display", "block").siblings(".right_show").css("display", "none");

    if (_index != 0) {

        $(".swiper-slide").eq(_index - 1).children(".right_show").css({ "right": "450px", "display": "block" });

        $(".swiper-slide").eq(_index - 1).children(".main_content").css({ "display": "none" });

    }

    $(".swiper-slide").eq(_index + 1).children(".right_show").css({ "right": "22px", "display": "block" });

    $(".swiper-slide").eq(_index + 1).children(".main_content").css({ "display": "none" });

    $(".swiper-slide").eq(_index - 1).css("zIndex", "5");

    $(".swiper-slide").eq(_index - 2).css("zIndex", "4");

    $(".swiper-slide").eq(_index + 1).css("zIndex", "5");

    $(".swiper-slide").eq(_index + 2).css("zIndex", "4");

    $(".swiper-slide").eq(_index + 3).css("zIndex", "3");

    $(".swiper-slide").eq(_index + 4).css("zIndex", "2");

    $(".swiper-pagination span").eq(_index).addClass("swiper-pagination-active").siblings().removeClass("swiper-pagination-active");

})

$(".swiper-pagination span").click(function () {

    var _index = $(this).index();

    $(".swiper-slide").each(function (index, item) {

        var id = $(item).index();

        if ((id * 1 + 1) % 2 == 0) {

            $(item).css("background", "#2373b1");

        } else {

            $(item).css("background", "#4394d8");

        }

    })

    $(".swiper-slide").eq(_index).addClass("z_max").siblings().removeClass("z_max");

    $(".swiper-slide").eq(_index).css("background", "#ffffff").children(".main_content").css("display", "block").siblings(".right_show").css("display", "none");

    $(".swiper-slide").eq(_index - 1).css("zIndex", "5").children(".right_show").css({ "right": "450px", "display": "block" }).siblings(".main_content").css({ "display": "none" });

    $(".swiper-slide").eq(_index - 2).css("zIndex", "4").children(".right_show").css({ "right": "450px", "display": "block" }).siblings(".main_content").css({ "display": "none" });

    $(".swiper-slide").eq(_index - 3).css("zIndex", "3").children(".right_show").css({ "right": "450px", "display": "block" }).siblings(".main_content").css({ "display": "none" });

    $(".swiper-slide").eq(_index - 4).css("zIndex", "2").children(".right_show").css({ "right": "450px", "display": "block" }).siblings(".main_content").css({ "display": "none" });

    $(".swiper-slide").eq(_index + 1).css("zIndex", "5").children(".right_show").css({ "right": "22px", "display": "block" }).siblings(".main_content").css({ "display": "none" });

    $(".swiper-slide").eq(_index + 2).css("zIndex", "4").children(".right_show").css({ "right": "22px", "display": "block" }).siblings(".main_content").css({ "display": "none" });

    $(".swiper-slide").eq(_index + 3).css("zIndex", "3").children(".right_show").css({ "right": "22px", "display": "block" }).siblings(".main_content").css({ "display": "none" });

    $(".swiper-slide").eq(_index + 4).css("zIndex", "2").children(".right_show").css({ "right": "22px", "display": "block" }).siblings(".main_content").css({ "display": "none" });

    $(".swiper-pagination span").eq(_index).addClass("swiper-pagination-active").siblings().removeClass("swiper-pagination-active");

})