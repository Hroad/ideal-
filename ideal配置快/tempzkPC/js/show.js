$(function(){
	
	// 页面框架
	var swiper = new Swiper('.containerPC', {
		//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
	    direction: 'vertical',
		//将hashnav设置为true，并在每个slide处增加data-hash属性，可在当前页刷新。
		hashnav: true,
		mousewheel: true,
		on:{
		  init: function(){
			swiperAnimateCache(this); //隐藏动画元素
			swiperAnimate(this); //初始化完成开始动画
		  }, 
		  slideChangeTransitionEnd: function(){ 
			swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
		  },
		},
	    pagination: {
	      el: '.pagingPC',
	      clickable: true,
	    },
	});
	
	// 立即了解
	$('.ConfigurationPgea1-more').on('click', function(event) {
		swiper.slideTo(1, 500, true);
	});
	
	
	
	
})