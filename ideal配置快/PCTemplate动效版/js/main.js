
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

    // 导入头部
    $(".bg_header").load("template/common/header.html");

    $(".bg_banner").load("template/common/banner1.html");

    $(".bg_content").load("template/intro/html/intro1.html");

    // 导入版权
    $(".copyright").load("template/common/footer.html");

    $(".copyright").addClass("copy_special");

    setTimeout(function () {
        $(".nav li").eq(1).addClass("active").siblings().removeClass("active");
    }, 50)


} else {

    // 导入头部
    $(".bg_header").load("template/common/header.html");

    // 导入首页背景
    $(".bg_content").load("template/index/html/index1.html");

    // 导入版权
    $(".copyright").load("template/common/footer.html");

    // 删除版权样式
    $(".copyright").removeClass("copy_special");

    setTimeout(function () {
        $(".nav li").eq(0).addClass("active").siblings().removeClass("active");
    }, 50)

}
