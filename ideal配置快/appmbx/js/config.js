(function () {
    // onLoaded();
    load(Wshare, onLoaded);
    pushHistory();
    window.addEventListener("popstate", function (e) {
        WeixinJSBridge.invoke('closeWindow', {}, function (res) {});
    }, false);
    //ios强制出现下部白条，解决高度变化带来的不确定相关问题
    function pushHistory() {
        var state = {
            title: "title",
            url: "#"
        };
        window.history.pushState(state, "title", "#");
    }

    function onLoaded() {
        myLib.addAnimate("body");
		$('.show').show();
		var mySwiper = new Swiper('.flow-fc', {
			observer: true,
			observeParents: true,
			effect: 'coverflow',
			slidesPerView: 2,
			initialSlide: 1,//默认显示第二张在中心位置
			centeredSlides: true,
			loop:true,
			coverflow: {
				rotate: 0,
				stretch: 15,
				depth: 70,
				modifier: 10,
				slideShadows: false
			},
			//左右点击
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
		})

		
    }

    // 微信分享
    function Wshare() {
        share({
            title: document.title,
            desc: '重新定义你的手机招聘方式！',
            link: location.href,
            imgUrl: '/images/share.jpg',
            debug: false
        });
    }
})()