

var banner = new FragmentBanner({
	container : "#banner1",//选择容器 必选
	imgs : ['images/swiper1.png','images/swiper2.png','images/swiper3.png'],//图片集合 必选
	size : {
		width : 609,
		height : 344
	},//容器的大小 可选
	//行数与列数 可选
	grid : {
		line : 12,
		list : 14
	},
	index: 0,//图片集合的索引位置 可选
	type : 2,//切换类型 1 ， 2 可选
	boxTime : 3000,//小方块来回运动的时长 可选
	fnTime : 5000//banner切换的时长 可选
});

// 引入薪酬福利模块
$(".concat_welfare").load("template/welfare/html/welfare1.html");


