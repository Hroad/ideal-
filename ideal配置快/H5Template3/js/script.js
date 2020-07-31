/**
 * @author: xiangliang.zeng
 * @description:
 * @Date: 2017/1/4 11:38
 * @Last Modified by:   xiangliang.zeng
 */
(function(window, document) {
	var load51 = new Load51(true,onDomReady,onLoaded);
	// 类似Jquery的$(function(){});
	function onDomReady() {
		musicSwitch();
		console.log('DOM is ready');
		
	}
	// 当loading页面关闭时执行的函数
	function onLoaded() {
		removeTouchMove();
		console.log('Loaded');
		init();
	}
	
	function init(){
		// 实例化swiper对象
		var mySwiper = new Swiper('.swiper-container',{
		    //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
		    direction: 'vertical',
		    //将hashnav设置为true，并在每个slide处增加data-hash属性，可在当前页刷新。
		    hashnav:true,
		    onInit: function(swiper){
		        swiperAnimateCache(swiper);
		        swiperAnimate(swiper);
		        $('.page-L').scrollTop(0);
		    },
		    onSlideChangeEnd: function(swiper){
		        swiperAnimate(swiper);
		    	$('.page-L').scrollTop(0);
		    }
		});

		// 需要局部滚动的页面，阻止事件冒泡 -- 阻止swiper滑动
		$('.info').on('touchmove',function(){
		    event.stopPropagation();
		});
		/***************************************** 地图 ***************************************************/
		//添加公司地址位置，修改公司地址方法如下：
		// http://api.map.baidu.com/lbsapi/creatmap/index.html，该地址是百度地图生成器，
		//打开网址后，将公司地址输入，获取到横纵坐标，请“coord=25.015643,102.753885”替换为获取到的横纵坐标，title替换为公司名称
		// $('.map').click(function() {
		//     location.href = 'http://api.map.baidu.com/marker?location=31.184249,121.416137&title=延锋伟世通电子科技（上海）有限公司&content=徐汇区钦州北路1001号&output=html';
		// });
		$('.tab li').click(function(){
			var index = $(this).index();
			$(this).addClass('act').siblings().removeClass('act')
			$('.info>div').eq(index).show();
			$('.info>div').not($('.info>div').eq(index)).hide();
		})
		$('.box>div').each(function(){
			$(this).mCustomScrollbar();
		})
		 var swiper = new Swiper ('.swiper1', {
			loop: true,
			// 如果需要分页器
			pagination: '.swp1',
			// 如果需要前进后退按钮
			nextButton: '.next1',
			prevButton: '.prev1',
			effect: 'coverflow',
			slidesPerView: 2,
			centeredSlides: true,
			coverflow: {
				rotate: 0,
				stretch: 10,
				depth: 60,
				modifier: 2,
				slideShadows: true
			}
		})  
		$('.tel li:even').click(function(){
			var uid = $(this).attr('uid')
			$(this).next().slideToggle();
			if(uid == '0'){
				$(this).attr('uid','1')
				$(this).find('img').src('transform','rotate(0)');
			}else{
				$(this).attr('uid', '0')
				$(this).find('img').src('transform', 'rotate(-90deg)');
			}
		})      
	}
	

	// 音乐切换
	function musicSwitch() {
		var mediaWrap = document.querySelector('.media-wrap');
		var audio = document.querySelector('#autoplay');
		var musicOn = document.querySelector('.music_on');
		var musicOff = document.querySelector('.music_off');
		audio.play();
		document.addEventListener("WeixinJSBridgeReady", function () {
			audio.play();
		}, false);
		mediaWrap.addEventListener('click', function() {
			if (audio.paused) {
				audio.play();
				mediaWrap.classList.add('on');
				musicOn.style.display = 'block';
				musicOff.style.display = 'none';
			} else {
				audio.pause();
				mediaWrap.classList.remove('on');
				musicOn.style.display = 'none';
				musicOff.style.display = 'block';
			}
		}, false);
		$('#autoplay').on('ended',function(){
			this.load();
			this.play();
		})
	}

	// 移除默认事件及阻止冒泡
	function removeDefaultEvt(e) {
		e.preventDefault();
	}
	// 移除默认document的touchmove，针对苹果手机
	function removeTouchMove() {
		document.body.addEventListener('touchmove',removeDefaultEvt,false);
	}
})(window, document);