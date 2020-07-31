

$('img').on('mousedown', function (e) {
    e.preventDefault()
})

// 初始化展示
$(".token_content .show_content_box").eq(0).css("display", "block");

$(".token_nav li").click(function () {

    var index = $(this).index();
    $(this).addClass("active_li").siblings().removeClass("active_li");
    $(".token_content .show_content_box").each(function (ind, item) {
        if (ind == index) {
            $(item).show();
        } else {
            $(item).hide();
        }
    })
    // $(".token_content").children(".show_content_box").eq(index).show();
})