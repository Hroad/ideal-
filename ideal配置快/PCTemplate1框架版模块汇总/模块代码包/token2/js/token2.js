// // 左箭头
// $(document).on('click', ".left_arrow", function (e) {

//     console.log($(".node").length)

//     $(".right_arrow").attr("src", "./images/right_arrow_on.png");

//     $(".node").each(function (index, item) {

//         // 是否包含活性样式
//         if ($(item).hasClass("node_on")) {

//             var index = $(item).index() * 1 - 1;

//             console.log(index)

//             // 是否到达临界值
//             if (index <= 0) {

//                 index = 0;

//                 $(".left_arrow").attr("src", "./images/left_arrow.png");

//             }

//             // 内容盒子切换
//             $(".content_box").hide();
//             $(".content_box").eq(index).show();

//             // 活性样式切换
//             $(".node").eq(index).addClass("node_on").siblings(".node").removeClass("node_on");

//             // 图片替换
//             $(item).children("img").attr("src", "./images/icon_date.png")
//             $(".node").eq(index).children("img").attr("src", "./images/icon_date_on.png");

//             return false;

//         }

//     })
// })

// // 右箭头

// $(document).on('click', ".right_arrow", function (e) {

//     console.log($(".node").length)

//     $(".left_arrow").attr("src", "./images/left_arrow_on.png");

//     $(".node").each(function (index, item) {

//         if ($(item).hasClass("node_on")) {

//             var index = $(item).index() * 1 + 1;

//             console.log(index)

//             if (index >= $(".node").length - 1) {

//                 index = $(".node").length * 1 - 1;

//                 $(".right_arrow").attr("src", "./images/right_arrow.png");

//             }

//             // 内容盒子切换
//             $(".content_box").hide();
//             $(".content_box").eq(index).show();

//             // 活性样式切换
//             $(".node").eq(index).addClass("node_on").siblings(".node").removeClass("node_on");

//             // 图片替换
//             $(item).children("img").attr("src", "./images/icon_date.png")
//             $(".node").eq(index).children("img").attr("src", "./images/icon_date_on.png");

//             return false;

//         }

//     })

// })


params = {
	'ctmid':'2789', 
	// 'csid':'',
}; //ctmid必填，csid选填
var html_box = ''
var time_box = ''
var time_arr = []
coapi.getJobSchedule(params,function(data){
    //取到数据之后的操作
    console.log(data)
	if (data.resultbody.length !== 0 && data.resultbody.schedulelist.length !== 0) {
		for (var i = 0; i < data.resultbody.schedulelist.length; i++) {
			if(data.resultbody.schedulelist[i].cdate == data.resultbody.schedulelist[0].cdate){
				html_box += '<div class="content_box">'
				html_box += '<img src="./images/sch_icon.png" alt="">'
				html_box += '<div class="school_details">'
				html_box += '<div class="s_name">'+data.resultbody.schedulelist[i].school.split(' ')[0]+'</div>'
				html_box += '<p class="s_date"><label><strong>日期：</strong>'+data.resultbody.schedulelist[i].cdate+'&nbsp;'+data.resultbody.schedulelist[i].ctime+'</label></p>'
				html_box += '<p class="s_address"><label><strong>地点：</strong>'+data.resultbody.schedulelist[i].school.split(' ')[1]+'</label></p>'
				html_box += '</div>'
				html_box += '</div>'
			}
			time_arr.push(data.resultbody.schedulelist[i].cdate)
		}

		$.unique(time_arr)
		for (var k = 0; k < time_arr.length; k++) {	
			time_box += '<div class="node">'
			time_box += '<img src="./images/icon_date.png" alt="">'
			time_box += '<b></b>'
			time_box += '<p>'+time_arr[k]+'</p>'
			time_box += '</div>'
		}
		$('.content_boxs').html(html_box);   
		$('.time-list').html(time_box);   
		$('.time-list').children('.node').eq(0).addClass('node_on').children('img').attr('src','images/icon_date_on.png')
	}	
}, params);

function getXC(cdata){
	html_box = ''
	coapi.getJobSchedule(params,function(data){
	    //取到数据之后的操作
	    console.log(data)
		if (data.resultbody.length !== 0 && data.resultbody.schedulelist.length !== 0) {
			for (var i = 0; i < data.resultbody.schedulelist.length; i++) {
				if(data.resultbody.schedulelist[i].cdate == cdata){
					html_box += '<div class="content_box">'
					html_box += '<img src="./images/sch_icon.png" alt="">'
					html_box += '<div class="school_details">'
					html_box += '<div class="s_name">'+data.resultbody.schedulelist[i].school.split(' ')[0]+'</div>'
					html_box += '<p class="s_date"><label><strong>日期：</strong>'+data.resultbody.schedulelist[i].cdate+'&nbsp;'+data.resultbody.schedulelist[i].ctime+'</label></p>'
					html_box += '<p class="s_address"><label><strong>地点：</strong>'+data.resultbody.schedulelist[i].school.split(' ')[1]+'</label></p>'
					html_box += '</div>'
					html_box += '</div>'
				}
			}
			$('.content_boxs').html(html_box);   
		}	
	}, params);
}

// 右箭头
var j = 0
$('.right_arrow').click(function(){
	j++
	$(".left_arrow").attr("src", "./images/left_arrow_on.png");
	$('.time-list').children('.node').removeClass('node_on').children('img').attr('src','images/icon_date.png')
	$('.time-list').children('.node').eq(j).addClass('node_on').children('img').attr('src','images/icon_date_on.png')
	var maxClick = $('.time-list').children('.node').length
	console.log(j);
	if(j > 6){
		$('.time-list').children('.node').eq(j-7).hide()
	}
	if(j <= maxClick){
		var cdata = $('.time-list').children('.node').eq(j).children('p').html().trim()
		console.log(cdata);
		getXC(cdata)
	}
	if(j >= (maxClick-1)){
		$(".right_arrow").attr("src", "images/right_arrow.png");
		j = maxClick-2
		return false
	}
	
})


// 左箭头
$('.left_arrow').click(function(){
	$(".right_arrow").attr("src", "./images/right_arrow_on.png");
	$('.time-list').children('.node').removeClass('node_on').children('img').attr('src','images/icon_date.png')
	$('.time-list').children('.node').eq(j).addClass('node_on').children('img').attr('src','images/icon_date_on.png')
	var maxClick = $('.time-list').children('.node').length
	$('.time-list').children('.node').eq(j).show()
	var cdata = $('.time-list').children('.node').eq(j).children('p').html().trim()
	getXC(cdata)
	console.log(j);
	if(j <= 0){
		j = 0
		$('.time-list').children('.node').removeClass('node_on').children('img').attr('src','images/icon_date.png')
		$('.time-list').children('.node').eq(j).addClass('node_on').children('img').attr('src','images/icon_date_on.png')
		return false
	}
	j--
	
})






