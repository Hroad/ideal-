
// 初始隐藏显示框
function init() {

    $(".show_box img").attr("src", "images/index1.png");
    $(".nav li").eq(0).addClass("active_bg");
    $(".nav li").eq(0).children(".left_icon").children(".icon").attr("src", "images/icon1_on.png");
    $(".style1").eq(0).addClass("active");


    if (sessionStorage.getItem("indexPage") * 1 && sessionStorage.getItem("introPage") * 1 && sessionStorage.getItem("jobsPage") * 1 && sessionStorage.getItem("tokenPage") * 1 && sessionStorage.getItem("processPage") * 1 && sessionStorage.getItem("aboutPage") * 1 && sessionStorage.getItem("welfarePage") * 1 && sessionStorage.getItem("personPage") * 1) {

        $(".select").each(function (index, item) {

            switch (index) {

                case 0:
                    $(item).children("span").text($(item).children(".opt_box").children(".opt").eq(sessionStorage.getItem("indexPage") * 1 - 1).text());
                    break;

                case 1:
                    $(item).children("span").text($(item).children(".opt_box").children(".opt").eq(sessionStorage.getItem("introPage") * 1 - 1).text());
                    break;

                case 2:
                    $(item).children("span").text($(item).children(".opt_box").children(".opt").eq(sessionStorage.getItem("jobsPage") * 1 - 1).text());
                    break;

                case 3:
                    $(item).children("span").text($(item).children(".opt_box").children(".opt").eq(sessionStorage.getItem("tokenPage") * 1 - 1).text());
                    break;

                case 4:
                    $(item).children("span").text($(item).children(".opt_box").children(".opt").eq(sessionStorage.getItem("processPage") * 1 - 1).text());
                    break;

                case 5:
                    $(item).children("span").text($(item).children(".opt_box").children(".opt").eq(sessionStorage.getItem("aboutPage") * 1 - 1).text());
                    break;

                case 6:
                    $(item).children("span").text($(item).children(".opt_box").children(".opt").eq(sessionStorage.getItem("welfarePage") * 1 - 1).text());
                    break;

                case 7:
                    $(item).children("span").text($(item).children(".opt_box").children(".opt").eq(sessionStorage.getItem("personPage") * 1 - 1).text());
                    break;

                default:

                    break;
            }
        })

    }
}

init();


// var radio = false;
// $('.radio').click(function(){
// 	radio = true
// 	$('.radio-box').css({"background":"#fb6f41 url(images/radio_icon.png) no-repeat center center"})
// })


// 切换核心
function swichImg(_index, index) {
	
    switch (_index) {
	
        case 0:
            $(".show_box").css("background", "#ffffff");
            $(".show_box img").attr("src", "images/index1.png");
            break;

        case 1:
            $(".show_box").css("background", "#ffffff");
            $(".show_box img").attr("src", "images/intro" + index + ".png");
			$(".show_box").append('<div class="radio"><span class="radio-box"></span>确认样式</div>')
            break;

        case 2:

            $(".show_box").css("background", "#ffffff");
            $(".show_box img").attr("src", "images/jobs" + index + ".png");

            break;

        case 3:
            $(".show_box").css("background", "#ffffff");
            $(".show_box img").attr("src", "images/token" + index + ".png");
            break;

        case 4:
            $(".show_box").css("background", "#ffffff");
            $(".show_box img").attr("src", "images/process" + index + ".png");
            break;

        case 5:
            $(".show_box").css("background", "#ffffff");
            $(".show_box img").attr("src", "images/about" + index + ".png");
            break;

        case 6:
            $(".show_box").css("background", "#ffffff");
            $(".show_box img").attr("src", "images/welfare" + index + ".png");
            break;

        case 7:
            $(".show_box").css("background", "#e6e6e6");
            $(".show_box img").attr("src", "images/person" + index + ".png");
            break;

        default:
            break;

    }
}

// 导航部分的点击事件
$(".nav li").click(function () {

    $(".show_box").show();

    $(".stylesheet_box").show();

    // 默认选取第一个style1
    $(".stylesheet_box .style1").eq(0).addClass("active").siblings().removeClass("active");

    var _index = $(this).index();

    // 背景色替换
    $(this).addClass("active_bg");
    $(".nav li").not(this).removeClass("active_bg");

    // 图标统一
    $(".nav li").each(function (index, item) {
        $(item).children(".left_icon").children(".icon").attr("src", "images/icon" + (index * 1 + 1) + ".png");
    });

    // 小图标替换
    $(this).children(".left_icon").children(".icon").attr("src", "images/icon" + (_index * 1 + 1) + "_on.png");

    index = 1;

    // 展示切换

    swichImg(_index, index);

});



// 样式表的点击事件
$(".style1").click(function () {

    if ($(this).index() <= 2) {

        $(".show_box").show();

        var _index = 0;

        $(".nav li").each(function (index, item) {
            if ($(item).hasClass("active_bg")) {
                // 父元素下标
                _index = index;
            }
        })

        // 当前元素下标
        var index = $(this).index() * 1 + 1;
		
        // 限定可选范围
        if ($(this).index() <= 1) {

            // 活性样式切换
            $(this).addClass("active").siblings().removeClass("active");

        }

        swichImg(_index, index);

    }


});

// 页面预览
$(".btn2").click(function () {
    // 默认参数
    var indexPage = 1;
    var introPage = 1;
    var jobsPage = 1;
    var tokenPage = 1;
    var processPage = 1;
    var aboutPage = 1;
    var welfarePage = 1;
    var personPage = 1;

    for (var i = 0; i < 8; i++) {

        $(".select").eq(i).children(".opt_box").children(".opt").each(function (index, item) {
			
            switch (i) {

                case 0:
                    if ($(item).hasClass("active")) {
                        sessionStorage.setItem("indexPage", $(item).attr("val")) || 0;
                    }

                    console.log(indexPage)

                    break;

                case 1:

                    if ($(item).hasClass("active")) {
                        sessionStorage.setItem("introPage", $(item).attr("val")) || 0;
                    }

                    console.log(introPage)

                    break;

                case 2:

                    if ($(item).hasClass("active")) {
                        sessionStorage.setItem("jobsPage", $(item).attr("val")) || 0;
                    }

                    console.log(jobsPage)

                    break;

                case 3:

                    if ($(item).hasClass("active")) {
                        sessionStorage.setItem("tokenPage", $(item).attr("val")) || 0;
                    }

                    console.log(tokenPage)

                    break;

                case 4:

                    if ($(item).hasClass("active")) {
                        sessionStorage.setItem("processPage", $(item).attr("val")) || 0;
                    }

                    console.log(processPage)

                    break;

                case 5:

                    if ($(item).hasClass("active")) {
                        sessionStorage.setItem("aboutPage", $(item).attr("val")) || 0;
                    }

                    console.log(aboutPage)

                    break;

                case 6:

                    if ($(item).hasClass("active")) {
                        sessionStorage.setItem("welfarePage", $(item).attr("val")) || 0;
                    }

                    console.log(welfarePage)

                    break;

                case 7:

                    if ($(item).hasClass("active")) {
                        sessionStorage.setItem("personPage", $(item).attr("val")) || 0;
                    }

                    console.log(personPage)

                    break;

                default:
                    break;

            }
        });

    }

    if (sessionStorage.getItem("indexPage") * 1 && sessionStorage.getItem("introPage") * 1 && sessionStorage.getItem("jobsPage") * 1 && sessionStorage.getItem("tokenPage") * 1 && sessionStorage.getItem("processPage") * 1 && sessionStorage.getItem("aboutPage") * 1 && sessionStorage.getItem("welfarePage") * 1 && sessionStorage.getItem("personPage") * 1) {

        location.href = "show.html";

    } else {

        if (confirm("检测到您未选择所有的样式，是否默认选择第一版？")) {
            sessionStorage.setItem("indexPage", sessionStorage.getItem("indexPage", indexPage) || 1);
            sessionStorage.setItem("introPage", sessionStorage.getItem("introPage", introPage) || 1);
            sessionStorage.setItem("jobsPage", sessionStorage.getItem("jobsPage", jobsPage) || 1);
            sessionStorage.setItem("tokenPage", sessionStorage.getItem("tokenPage", tokenPage) || 1);
            sessionStorage.setItem("processPage", sessionStorage.getItem("processPage", processPage) || 1);
            sessionStorage.setItem("aboutPage", sessionStorage.getItem("aboutPage", aboutPage) || 1);
            sessionStorage.setItem("welfarePage", sessionStorage.getItem("welfarePage", welfarePage) || 1);
            sessionStorage.setItem("personPage", sessionStorage.getItem("personPage", personPage) || 1);
            location.href = "show.html";
        }

    }

});