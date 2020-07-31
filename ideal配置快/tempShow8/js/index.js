
// 初始隐藏显示框
function init() {

    // var indexPage = 1;
    // var introPage = 1;
    // var jobsPage = 1;
    // var tokenPage = 1;
    // var processPage = 1;
    // var aboutPage = 1;
    // var welfarePage = 1;
    // var personPage = 1;

    $(".show_box img").attr("src", "images/index1.png");
    $(".nav li").eq(0).addClass("active_bg");
    $(".nav li").eq(0).children(".left_icon").children(".icon").attr("src", "images/icon1_on.png");
    $(".style1").eq(0).addClass("active");

    if (sessionStorage.getItem("indexPage") * 1 && sessionStorage.getItem("introPage") * 1 && sessionStorage.getItem("jobsPage") * 1 && sessionStorage.getItem("tokenPage") * 1 && sessionStorage.getItem("processPage") * 1 && sessionStorage.getItem("aboutPage") * 1 && sessionStorage.getItem("welfarePage") * 1 && sessionStorage.getItem("personPage") * 1) {

        $(".select").each(function (index, item) {

            switch (index) {

                case 0:

                    if (sessionStorage.getItem("indexPage") * 1 == 1) {

                        $(".select").eq(0).children("span").children(".index").text("①");

                    } else {

                        $(".select").eq(0).children("span").children(".index").text("②");

                    }

                    break;

                case 1:

                    if (sessionStorage.getItem("introPage") * 1 == 1) {

                        $(".select").eq(1).children("span").children(".index").text("①");

                    } else {

                        $(".select").eq(1).children("span").children(".index").text("②");

                    }

                    break;

                case 2:

                    if (sessionStorage.getItem("jobsPage") * 1 == 1) {

                        $(".select").eq(2).children("span").children(".index").text("①");

                    } else {

                        $(".select").eq(2).children("span").children(".index").text("②");

                    }

                    break;

                case 3:

                    if (sessionStorage.getItem("tokenPage") * 1 == 1) {

                        $(".select").eq(3).children("span").children(".index").text("①");

                    } else {

                        $(".select").eq(3).children("span").children(".index").text("②");

                    }

                    break;

                case 4:

                    if (sessionStorage.getItem("processPage") * 1 == 1) {

                        $(".select").eq(4).children("span").children(".index").text("①");

                    } else {

                        $(".select").eq(4).children("span").children(".index").text("②");

                    }

                    break;

                case 5:

                    if (sessionStorage.getItem("aboutPage") * 1 == 1) {

                        $(".select").eq(5).children("span").children(".index").text("①");

                    } else {

                        $(".select").eq(5).children("span").children(".index").text("②");

                    }

                    break;

                case 6:

                    if (sessionStorage.getItem("welfarePage") * 1 == 1) {

                        $(".select").eq(6).children("span").children(".index").text("①");

                    } else {

                        $(".select").eq(6).children("span").children(".index").text("②");

                    }

                    break;

                case 7:

                    if (sessionStorage.getItem("personPage") * 1 == 1) {

                        $(".select").eq(7).children("span").children(".index").text("①");

                    } else {

                        $(".select").eq(7).children("span").children(".index").text("②");

                    }

                    break;

                default:

                    break;

            }

        })

    }

    activeHold();

}

function swichNum(ele_index, index) {

    switch (ele_index) {

        case 0:

            $(".select span .index").eq(index).text("①");
            break;

        case 1:

            $(".select span .index").eq(index).text("②");
            break;

        case 2:

            $(".select span .index").eq(index).text("③");
            break;

        case 3:

            $(".select span .index").eq(index).text("④");
            break;

        case 4:

            $(".select span .index").eq(index).text("⑤");
            break;

        default:
            break;
    }

}

init();

// 默认参数
// var indexPage = 1;
// var introPage = 1;
// var jobsPage = 1;
// var tokenPage = 1;
// var processPage = 1;
// var aboutPage = 1;
// var welfarePage = 1;
// var personPage = 1;

// 初始化清除数据
// window.sessionStorage.removeItem("indexPage");
// window.sessionStorage.removeItem("introPage");
// window.sessionStorage.removeItem("jobsPage");
// window.sessionStorage.removeItem("tokenPage");
// window.sessionStorage.removeItem("processPage");
// window.sessionStorage.removeItem("aboutPage");
// window.sessionStorage.removeItem("welfarePage");
// window.sessionStorage.removeItem("personPage");

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

function keyword(str) {

    var key = sessionStorage.getItem(str) * 1

    if (key) {

        $(".style1").each(function (ind, ite) {

            if ($(ite).hasClass("active")) {

                if ($(ite).index() == key - 1) {

                    $(".enter .border").addClass("bg");

                } else {

                    $(".enter .border").removeClass("bg");

                }

            }

        })

    }
}

// 默认参数
// var indexPage = 1;
// var introPage = 1;
// var jobsPage = 1;
// var tokenPage = 1;
// var processPage = 1;
// var aboutPage = 1;
// var welfarePage = 1;
// var personPage = 1;
// 保留选择样式
function activeHold() {
    $(".nav li").each(function (index, item) {

        if ($(item).hasClass("active_bg")) {

            switch (index) {

                case 0:

                    keyword("indexPage");

                    break;

                case 1:

                    keyword("introPage");

                    break;

                case 2:

                    keyword("jobsPage");

                    break;

                case 3:

                    keyword("tokenPage");

                    break;

                case 4:

                    keyword("processPage");

                    break;

                case 5:

                    keyword("aboutPage");

                    break;

                case 6:

                    keyword("welfarePage");

                    break;

                case 7:

                    keyword("personPage");

                    break;

                default:
                    break;
            }
        }

    });
}

// 导航部分的点击事件
$(".nav li").click(function () {

    $(".enter .border").removeClass("bg");

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

    activeHold();

});

// 确认按钮点击事件
$(".enter").click(function () {

    $(this).children(".border").addClass("bg");

    $(".nav li").each(function (index, item) {

        if ($(item).hasClass("active_bg")) {

            switch (index) {

                case 0:

                    $(".style1").each(function (ind, ite) {

                        if ($(ite).hasClass("active")) {

                            sessionStorage.setItem("indexPage", ($(ite).index() * 1 + 1));

                            swichNum(ind, index);

                        }
                    });

                    break;

                case 1:
                    $(".style1").each(function (ind, ite) {

                        if ($(ite).hasClass("active")) {

                            sessionStorage.setItem("introPage", ($(ite).index() * 1 + 1));

                            swichNum(ind, index);

                        }

                    });
                    break;

                case 2:

                    $(".style1").each(function (ind, ite) {

                        if ($(ite).hasClass("active")) {

                            sessionStorage.setItem("jobsPage", ($(ite).index() * 1 + 1));

                            swichNum(ind, index);

                        }

                    });

                    break;

                case 3:
                    $(".style1").each(function (ind, ite) {


                        if ($(ite).hasClass("active")) {

                            sessionStorage.setItem("tokenPage", ($(ite).index() * 1 + 1));

                            swichNum(ind, index);

                        }

                    });
                    break;

                case 4:
                    $(".style1").each(function (ind, ite) {


                        if ($(ite).hasClass("active")) {

                            sessionStorage.setItem("processPage", ($(ite).index() * 1 + 1));

                            swichNum(ind, index);

                        }

                    });
                    break;

                case 5:
                    $(".style1").each(function (ind, ite) {

                        if ($(ite).hasClass("active")) {

                            sessionStorage.setItem("aboutPage", ($(ite).index() * 1 + 1));

                            swichNum(ind, index);

                        }

                    });
                    break;

                case 6:
                    $(".style1").each(function (ind, ite) {

                        $(".style1").each(function (ind, ite) {

                            if ($(ite).hasClass("active")) {

                                sessionStorage.setItem("welfarePage", ($(ite).index() * 1 + 1));

                                swichNum(ind, index);

                            }
                        });

                    });
                    break;

                case 7:
                    $(".style1").each(function (ind, ite) {

                        $(".style1").each(function (ind, ite) {

                            if ($(ite).hasClass("active")) {

                                sessionStorage.setItem("personPage", ($(ite).index() * 1 + 1));

                                swichNum(ind, index);

                            }
                        });

                    });
                    break;

                default:
                    break;
            }
        }
    })

})

// 样式表的点击事件
$(".style1").click(function () {


    $(".enter .border").removeClass("bg");

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

    activeHold();

});


// 点击确认使用按钮
$('.btn1').click(function(){
	if (sessionStorage.getItem("indexPage") * 1 && sessionStorage.getItem("introPage") * 1 && sessionStorage.getItem("jobsPage") * 1 && sessionStorage.getItem("tokenPage") * 1 && sessionStorage.getItem("processPage") * 1 && sessionStorage.getItem("aboutPage") * 1 && sessionStorage.getItem("welfarePage") * 1 && sessionStorage.getItem("personPage") * 1) {
	    $('.confirms').fadeIn()
		$('.confirm-home').html(sessionStorage.getItem("indexPage"))
		$('.confirm-company').html(sessionStorage.getItem("introPage"))
		$('.confirm-job').html(sessionStorage.getItem("jobsPage"))
		$('.confirm-trip').html(sessionStorage.getItem("tokenPage"))
		$('.confirm-process').html(sessionStorage.getItem("processPage"))
		$('.confirm-contact').html(sessionStorage.getItem("aboutPage"))
		$('.confirm-salary').html(sessionStorage.getItem("welfarePage"))
		$('.confirm-presence').html(sessionStorage.getItem("personPage"))
	}else{
		alert("您有样式未选择，请将样式全部选择完整。")
	}
})
$('.confirm-close').click(function(){
	$('.confirms').fadeOut()
	$('.kh-name,.bh-serial').val('')
})
$('.kh-name,.bh-serial').focus(function(){
	$(this).val('')
})


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