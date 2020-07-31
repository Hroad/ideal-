
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
