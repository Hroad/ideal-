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
        var swiper = new Swiper('.swiper-container', {
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false,
            // },
            // loop: true, //循环
            on: {
                init: function(){
                  $('.show').show();
                  
                }, 
              },
            autoplayDisableOnInteraction: false, //用户操作后不停止
            effect: 'coverflow',
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
            },
        });
        // 腾讯地图接口
        var init = function () {
			// 地图坐标获取,请前往  https://lbs.qq.com/tool/getpoint/  这个网址获取相应地点的坐标
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
            map.panBy(-100, 400); //panBy()将地图中心移动一段指定的距离（以像素为单位）。
        }
        init();
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