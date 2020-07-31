
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ['Android', 'iPhone',
        'SymbianOS', 'Windows Phone',
        'iPad', 'iPod'
    ];
    var flag = true;
    for (var i = 0; i < Agents.length; i++) {
        if (userAgentInfo.indexOf(Agents[i]) != -1) {
            flag = false;
            break;
        }
    }
    return flag;
}

if (!IsPC()) {
    $(".content").eq(1).show();
	$(".nav li").removeClass('.active')
} else {
    $(".content").eq(0).show();
}

// 导航点击
$(".nav li").click(function () {

    var index = $(this).index();

    $(this).addClass("active");
    $(".nav li").not(this).removeClass("active");

    $(".content").each(function (index, item) {
        $(item).hide();
    })

    $(".content").eq(index).show();

})

// 接收参数
// var arr = window.location.search.split("?")[1].split("&");
// var obj = {};
// console.log(arr)

// arr.forEach(function (item) {
//     var str1 = item.split("=");
//     obj[str1[0]] = str1[1];
// })

// console.log(obj);

// 替换开始
$(".content").each(function (index, item) {

    switch (index) {
        case 0:
            $(".content").eq(0).children(".index").attr("src", "images/index" + 1 + ".png");
            break;

        case 1:
            $(".content").eq(1).children(".intro").attr("src", "images/intro" + sessionStorage.getItem("introPage") + ".png");
            $(".content").eq(1).children(".person_box").children(".person").attr("src", "images/person" + sessionStorage.getItem("personPage") + ".png");
            $(".content").eq(1).children(".welfare").attr("src", "images/welfare" + sessionStorage.getItem("welfarePage") + ".png");
            break;

        case 2:
            // if (obj.jobsPage == 1) {
            //     $(".content").eq(2).children(".jobs").attr("src", "images/jobs" + obj.jobsPage + "_1.png");
            //     $(".content").eq(2).append("<img class='common' src='images/jobs" + obj.jobsPage + "_2.png' />" + '<div style="height: 100px;"></div>');
            // } else {
            //     $(".content").eq(2).children(".jobs").attr("src", "images/jobs" + obj.jobsPage + ".png");
            // }

            $(".content").eq(2).children(".jobs").attr("src", "images/jobs" + sessionStorage.getItem("jobsPage") + ".png");

            break;

        case 3:
            $(".content").eq(3).children(".process").attr("src", "images/process" + sessionStorage.getItem("processPage") + ".png");

            console.log(sessionStorage.getItem("processPage"));
            break;

        case 4:
            $(".content").eq(4).children(".token").attr("src", "images/token" + sessionStorage.getItem("tokenPage") + ".png");
            break;

        case 5:
            $(".content").eq(5).children(".about").attr("src", "images/about" + sessionStorage.getItem("aboutPage") + ".png");
            break;

        default:
            break;

    }
});

console.log($(".content").eq(0))