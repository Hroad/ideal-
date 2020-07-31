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
		
		// 点击报名
		$('.index-mapply').on('click',function(event) {
		    mySwiper.slideTo(1,500,true);
		});
		$('.mkf-fh,.mfh').on('click', function(event) {
			mySwiper.slideTo(0, 500, true);
		});
		$('.mgsname,.mxsname,.mzname,.mtel').focus(function(){
			$(this).val('')
		})
		
		// 产品选项
		$('.index_mkbtns ul li').click(function(){
			console.log(11111);
			$(this).addClass('active').siblings().removeClass('active')
			// 图标统一
			$(".index_mkbtns ul li").each(function (index, item) {
			    $(item).children("img").attr("src", "images/boxl_icon" + (index * 1 + 1) + ".png");
			});
			// 替换当前图标
			$(this).children('img').attr('src','images/boxl_icon'+($(this).index()+1)+'_'+($(this).index()+1)+'.png')
			// 切换分类
			$('.index_zslist ul').hide().eq($(this).index()).fadeIn(500)
		})
		
		// MPC配置包页面跳转
		$('.mpcpzb-config').on('click', function(event) {
			mySwiper.slideTo(2, 500, true);
		});
		
		// 提示
		$('.index_zslist ul li:not(.mpcpzb-config)').click(function(){
			alert('暂未开放，敬请期待！')
		})
		
		
		// 需要局部滚动的页面，阻止事件冒泡 -- 阻止swiper滑动
		$('.mapply-box,.MPC-pzb').on('touchmove',function(){
		    event.stopPropagation();
		});
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