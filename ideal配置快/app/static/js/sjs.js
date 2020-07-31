
// 初始隐藏显示框
function init() {
    $(".nav li").eq(0).addClass("active_bg");
    $(".nav li").eq(0).children(".left_icon").children(".icon").attr("src", "../static/images/icon1_on.png");
	
	$('.seach-khname,.seach-bhname').focus(function(){
		$(this).val('')
	})
	
}

init();

// 版式展示
function bszs(bstag){
	var yshtml = ''
	for(var i=1;i<=5;i++){
		yshtml += '<div class="ys-list ys-list1">'
		yshtml += '	<div class="bt">样式'+i+'</div>'
		yshtml += '	<div class="ys-thunb"><img src="../static/images/'+bstag+'ys_thumb'+i+'.png" ></div>'
		yshtml += '	<div class="ys-btn" onclick="download_mould_solo(this)">点击下载</div>'
		yshtml += '	</div>'
	}
	$('.ys-boxno').html(yshtml)
}
var index = 'index'
bszs(index)

// 导航部分的点击事件
$(".nav li").click(function () {
    var _index = $(this).index();
    var btn1 = document.getElementsByClassName('btn1')[0]
	btn1.setAttribute('onclick','download_mould_all(this)')
    // 背景色替换
    $(this).addClass("active_bg");
    $(".nav li").not(this).removeClass("active_bg");
    // 图标统一
    $(".nav li").each(function (index, item) {
        $(item).children(".left_icon").children(".icon").attr("src", "../static/images/icon" + (index * 1 + 1) + ".png");
    });
    // 小图标替换
    $(this).children(".left_icon").children(".icon").attr("src", "../static/images/icon" + (_index * 1 + 1) + "_on.png");
	
	// 点击导航展示不同版式
	switch ($(this).index()) {
	    case 0:
	        sessionStorage.setItem("index", "index");
			bszs(index)
	        break;
	    case 1:
	        sessionStorage.setItem("intro", "intro");
			bszs(sessionStorage.getItem("intro"))
	        break;
	    case 2:
	        sessionStorage.setItem("jobs", "jobs");
			bszs(sessionStorage.getItem("jobs"))
	        break;
	    case 3:
	        sessionStorage.setItem("token", "token");
			bszs(sessionStorage.getItem("token"))
	        break;
	    case 4:
	        sessionStorage.setItem("process", "process");
			bszs(sessionStorage.getItem("process"))
	        break;
	    case 5:
	        sessionStorage.setItem("about", "about");
			bszs(sessionStorage.getItem("about"))
	        break;
	    case 6:
	        sessionStorage.setItem("welfare", "welfare");
			bszs(sessionStorage.getItem("welfare"))
	        break;
	    case 7:
	        sessionStorage.setItem("person", "person");
			bszs(sessionStorage.getItem("person"))
	        break;
	    default:
	        break;
	}
	
	// 点击导航展示全部版式
	$('.ys-boxyes').hide()
	$('.ys-boxno').fadeIn()
	
	
});




// $(".btn2").click(function () {
//     // 默认参数
//     var indexPage = 1;
//     var introPage = 1;
//     var jobsPage = 1;
//     var tokenPage = 1;
//     var processPage = 1;
//     var aboutPage = 1;
//     var welfarePage = 1;
//     var personPage = 1;

//     if (sessionStorage.getItem("indexPage") * 1 && sessionStorage.getItem("introPage") * 1 && sessionStorage.getItem("jobsPage") * 1 && sessionStorage.getItem("tokenPage") * 1 && sessionStorage.getItem("processPage") * 1 && sessionStorage.getItem("aboutPage") * 1 && sessionStorage.getItem("welfarePage") * 1 && sessionStorage.getItem("personPage") * 1) {

//         location.href = "show.html";

//     } else {

//         if (confirm("检测到您未选择所有的样式，是否默认选择第一版？")) {
//             sessionStorage.setItem("indexPage", sessionStorage.getItem("indexPage", indexPage) || 1);
//             sessionStorage.setItem("introPage", sessionStorage.getItem("introPage", introPage) || 1);
//             sessionStorage.setItem("jobsPage", sessionStorage.getItem("jobsPage", jobsPage) || 1);
//             sessionStorage.setItem("tokenPage", sessionStorage.getItem("tokenPage", tokenPage) || 1);
//             sessionStorage.setItem("processPage", sessionStorage.getItem("processPage", processPage) || 1);
//             sessionStorage.setItem("aboutPage", sessionStorage.getItem("aboutPage", aboutPage) || 1);
//             sessionStorage.setItem("welfarePage", sessionStorage.getItem("welfarePage", welfarePage) || 1);
//             sessionStorage.setItem("personPage", sessionStorage.getItem("personPage", personPage) || 1);
//             location.href = "show.html";
//         }

//     }

// });