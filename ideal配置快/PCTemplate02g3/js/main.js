
// 点击记录值
// 文件详情见page页 wrap外层盒子下
$(".btn1").click(function () {
    sessionStorage.setItem("thisJs", "1"); // 存储标记为1
    location.reload(); // 刷新
})

$(".btn2").click(function () {
    sessionStorage.setItem("thisJs", "2");
    location.reload();
})
