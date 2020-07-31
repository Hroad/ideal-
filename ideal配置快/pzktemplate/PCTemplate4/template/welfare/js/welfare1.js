$('img').on('mousedown', function (e) {
    e.preventDefault()
})

// 返回顶部逻辑
$(".toTop").click(function () {
    $('html,body').stop().animate({ 'scrollTop': '0' }, 500)
})