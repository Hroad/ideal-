$(function () {
    // 腾讯地图接口

    var mapInit = function () {
        var center = new qq.maps.LatLng(32.163098, 118.695645);
        var map = new qq.maps.Map(document.getElementById('map'), {
            center: center,
            zoom: 15
        });
        var anchor = new qq.maps.Point(0, 50),
            size = new qq.maps.Size(20, 25),
            origin = new qq.maps.Point(0, 0),
            icon = new qq.maps.MarkerImage('images/tip2.png', size, origin, anchor);
        var marker = new qq.maps.Marker({
            icon: icon,
            map: map,
            position: map.getCenter()
        });

        map.panBy(0, 0); //panBy()将地图中心移动一段指定的距离（以像素为单位）。

    }
    mapInit();


    // 保存最初始微信浏览器没有底部工具栏的屏幕高
    var initH = document.body.offsetHeight;
    var Interval = setInterval(function () {
        // 微信的工具栏回退不给回调函数，只能自己设定时器作回调函数
        // 如果微信出现底部工具栏，则屏幕高一定会变化，再次保存屏幕高
        if (initH !== document.body.offsetHeight) {
            initH = document.body.offsetHeight;
            window.scrollBy(0, -50)
        }
    }, 300);


    // 分享
    $('.job-share').click(function () {
        $(".share-box").css({ "opacity": "1", "z-index": "67" })
    })
    $('.share-back').click(function () {
        $(".share-box").css({ "opacity": "0", "z-index": "0" })
    })

    // 生成分享图
    $('.share-btn').click(function () {
        event.stopPropagation()
        $('.share-btn').addClass('loader2')
        setTimeout(function () {
            $(".share-box").css({ "opacity": "0", "z-index": "0" })
            $('.share-btn').removeClass('loader2')
            $(".share-figure").css({ "opacity": "1", "z-index": "68" })
        }, 2000)
        // 调用html2canvas生成图片
        html2canvas(document.querySelector(".share-txt"), {
            width: $('.share-txt').width(),//设置canvas尺寸与所截图尺寸相同，防止白边
            height: $('.share-txt').height(),//防止白边
        }).then(canvas => {
            var img = document.createElement("img")
            img.src = canvas.toDataURL(1)
            document.getElementById("share-img").appendChild(img)
        });

    })
    $('.share-close').click(function () {
        $(".share-figure").css({ "opacity": "0", "z-index": "0" })
        $(".share-img").html('')
    })

    // 匹配iphoneX
    var isIphoneX = window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 375 && testUA('iPhone')
    if (isIphoneX) {
        $('.share-top').css({ "height": "3.8rem" })
    }
    function testUA(str) {
        return navigator.userAgent.indexOf(str) > -1
    }


    // 阻止浏览器滑动的默认行为
    document.body.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, {
        passive: false
    });

})