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
		 var swiper1 = new Swiper ('.swiper1', {
			loop: true,
			// 如果需要分页器
			pagination: '.swp1',
		})        
		$('.tab li').click(function(){
			var index = $(this).index();
			$(this).addClass('act').siblings().removeClass('act');
			$('.big>div').eq(index).stop().fadeIn()
			$('.big>div').not($('.big>div').eq(index)).stop().fadeOut();
		})
		var html = '';
		// -----职位板式一 开始--------
		$(data).each(function(){
			html += '<li><b>' + this.uname+'</b><img src="./images/xq.png" alt=""></li>'
			html += '<li>'
				html += '<p><b>工作地点：</b><br>' + this.place +'</p>'
				html += '<p><b>岗位职责：</b><br>' + this.duty +'</p>'
				html += '<p><b>任职资格：</b><br>' + this.qualifications +'</p>'
				html += '<a href="http://campus.51job.com/all/' + this.link +'.html"><img src="./images/button.png" alt=""></a>'
			html += '</li>'
		})
		$('.tel').html(html)
		$('.tel li').click(function(){
			$(this).next().stop().fadeToggle();
		})
		// -----板式一 结束--------
		// -----职位板式二 开始--------
		// $(data).each(function () {
		// 	html += '<li data-id='+this.link+'><b>' + this.uname + '</b><img src="./images/xq.png" alt=""></li>'
		// })
		// $('.tel').html(html)
		// $('.tel li').click(function () {
		// 	html = '';
		// 	var jobid = $(this).attr('data-id');
		// 	for(var i = 0 ; i<data.length; i++){
		// 		if (data[i].link == jobid) {
		// 			console.log(data[i])
		// 			html += '<p><b>' + data[i].uname + '</b>' + data[i].place +'</p>'
		// 			html += '<p><b>岗位职责：</b><br>' + data[i].duty +'</p>'
		// 			html += '<p><b>任职资格：</b><br>' + data[i].qualifications +'</p>'
		// 			html += '<a href="http://campus.51job.com/all/' + data[i].link +'.html"><img src="./images/button.png" alt=""></a>'
		// 			html += '<div class="del"><img src="./images/fh.png" alt=""></div>'
		// 			$('.telHz').html(html)
		// 		}
		// 	}
			
		// 	$(this).parent().hide();
		// 	$('.telHz').show();
		// 	$('.del').click(function () {
		// 		$('.telHz').hide();
		// 		$('.tel').show();
		// 	})
		// })
		// -----板式二 结束--------

		// 流程板式一
		var swiper2 = new Swiper('.swiper2', {
			observer: true,
			observeParents: true,
			onSlideChangeStart: function (swiper) {
				$('.process span').eq(swiper.activeIndex).addClass('act').siblings().removeClass('act')
			}
		})        
		// 流程板式二
		// var swiper3 = new Swiper('.swiper3', {
		// 	// direction: 'vertical',
		// 	observer: true,
		// 	observeParents: true,
		// 	onSlideChangeStart: function (swiper) {
		// 		$('.process span').eq(swiper.activeIndex).addClass('act').siblings().removeClass('act')
		// 	}
		// })     
		// 行程板式一
		html = '';
		$(mySchool).each(function(){
			html += '<li>' + this.uname+'</li>'
		})
		$('.school').html(html);
		$('.school li').eq(0).addClass('act');
		$('.school li').click(function(){
			html = '';
			$(this).addClass('act').siblings().removeClass('act')
			var text = $(this).text();
			$(mySchool).each(function(){
				if(text == this.uname){
					html += '<img src='+this.src+' alt="">'
					html += '<h1>' + this.uname +'（本部）</h1>'
					html += '<p>日期：' + this.date +'</p>'
					html += '<p>地点：' + this.time +'</p>'
				}
			})
			$('.up').html(html)
		})
		// 行程板式二
		// var swiper4 = new Swiper('.swiper4', {
		// 	observer: true,
		// 	observeParents: true,
		// 	onSlideChangeStart: function (swiper) {
		// 		$('.time span').eq(swiper.activeIndex).addClass('act').siblings().removeClass('act')
		// 	}
		// })   



	 	var init = function () {
            var center = new qq.maps.LatLng(30.454610, 114.425310);
            var map = new qq.maps.Map(document.getElementById('container'), {
                center: center,
                zoom: 15
            });
            var anchor = new qq.maps.Point(0, 50),
                size = new qq.maps.Size(48, 60),
                origin = new qq.maps.Point(0, 0),
                icon = new qq.maps.MarkerImage('images/tip2.png', size, origin, anchor);
            var marker = new qq.maps.Marker({
                icon: icon,
                map: map,
                position: map.getCenter()
            });
            // map.panBy(-100, 400);
        }
		init();
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