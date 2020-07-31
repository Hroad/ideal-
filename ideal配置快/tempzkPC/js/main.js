$(function(){
	
	// 页面框架
	var swiper = new Swiper('.container', {
		//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
	    direction: 'vertical',
		//将hashnav设置为true，并在每个slide处增加data-hash属性，可在当前页刷新。
		hashnav: true,
		on:{
		  init: function(){
			swiperAnimateCache(this); //隐藏动画元素
			swiperAnimate(this); //初始化完成开始动画
		  }, 
		  slideChangeTransitionEnd: function(){ 
			swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
		  },
		},

	});
	
	// 产品选项
	$('.box-l ul li').click(function(){
		$(this).addClass('box-active').siblings().removeClass('box-active')
		// 图标统一
		$(".box-l ul li").each(function (index, item) {
		    $(item).children("img").attr("src", "img/boxl_icon" + (index * 1 + 1) + ".png");
		});
		// 替换当前图标
		$(this).children('img').attr('src','img/boxl_icon'+($(this).index()+1)+'_'+($(this).index()+1)+'.png')
		// 切换分类
		$('.box-r ul').hide().eq($(this).index()).fadeIn(500)
	})
	
	// 报名跳转
	$('.apply-btn').on('click', function(event) {
		swiper.slideTo(1, 500, true);
	});
	$('.fh').on('click', function(event) {
		swiper.slideTo(0, 500, true);
	});
	$('.gsname,.xsname,.khname,.tel').focus(function(){
		$(this).val('')
	})
	
	// PC配置包页面跳转
	$('.pc-Configuration').on('click', function(event) {
		window.open("show.html")
	});
	
	
	// 提示
	$('.box-r ul li:not(.pc-Configuration)').click(function(){
		alert('暂未开放，敬请期待！')
	})
	
})