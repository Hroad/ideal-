window.onload = function () {

    // 加载界面隐藏
    // document.getElementsByClassName('loading')[0].style.display = 'none';
    var index = 1;
    touch();
    // 保存最初始微信浏览器没有底部工具栏的屏幕高
    // var initH = document.body.offsetHeight;
    // var Interval = setInterval(function () {
    //     // 微信的工具栏回退不给回调函数，只能自己设定时器作回调函数
    //     // 如果微信出现底部工具栏，则屏幕高一定会变化，重启所有函数，相当于手动刷新页面，并再次保存屏幕高
    //     if (initH !== document.body.offsetHeight) {
    //         initH = document.body.offsetHeight;
    //         touch();
    //     }
    // }, 300);
    // window.onresize = function () {
    //     touch();
    // };

    function touch() {
        //解决input框在不同平台下的兼容性问题
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        if (isAndroid) {
            $("#job_serach").focus(function () {
                main.style.bottom = -1700 + 'px';
                $(".cover").hide();
            })
            var originalHeight = document.documentElement.clientHeight || document.body.clientHeight;
            window.onresize = function () {
                //键盘弹起与隐藏都会引起窗口的高度发生变化
                var resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
                if (resizeHeight - 0 < originalHeight - 0) {
                    //当软键盘弹起，在此处操作
                    main.style.bottom = -1700 + 'px';
                } else {
                    //当软键盘收起，在此处操作
                    main.style.bottom = -hh + 'px';
                    show = true;
                    change(show);
                    //  alert('bbb')
                }
                scroll.refresh();
            }
        } else {
            //如果是iOS旋转屏幕时重新刷新页面
            addEventListener('orientationchange', function () {
                location.reload(false);
            });
        }
        // 主要内容的选项卡切换
        var $topNav = $('.main .topNav');
        var $mainWrap = $('.mainWrap');
        // 主导航点击事件
        $topNav.find('li').on('click', function (event) {
            // $("#jobs").scrollTo(0,0);
            var $this=document.getElementById("jobs");
            scroll.scrollTo(0,0)
            show = true;
            change(true)
            $(".nav_all").slideUp(280);
            // console.log(scroll)
            $(".bg4").show();
            index = $(this).index();
            console.log(index)
            event.preventDefault();
            $(this).addClass('on').siblings().removeClass('on');
            $mainWrap.hide();
            $mainWrap.eq(index - 1).show();
            if (index == 5) {

                if (!$(".page-main").hasClass('reheight')) {
                    $(".page-main").addClass('reheight');
                    $(".bottombg").addClass('rebg')
                }
            } else {
                if ($(".page-main").hasClass('reheight')) {
                    $(".page-main").removeClass('reheight');
                    $(".bottombg").removeClass('rebg')
                }
            }
            for (var i = 0; i < $topNav.find('li').size(); i++) {
                $topNav.find('li img').eq(i).attr('src', 'images/icon' + (i + 1) + '-1.png')
            }
            $(this).find('img').attr('src', 'images/icon' + index + '-2.png');
            $topNav.find('li img').removeClass('azoomIn');
            $(this).find('img').addClass('azoomIn durm0p2');
            
            // 每次内容切换 需要刷新滚轮插件
            scroll.refresh();

        });
        // 主要内容容器
        main = document.getElementsByClassName('main')[0];
        // 顶部闭合层
        var shadeTop = document.getElementsByClassName('shadeTop')[0];
        var stH = shadeTop.offsetHeight;
        // shadeTop的translateY值
        var tlyS = -stH;
        // 动态设定main的高度
        // 这个35是因为那两个闭合的图片会有一点小缝
        main.style.height = document.body.offsetHeight - stH + 35 + 'px';
        // 初始底部main露出的那一截
        var top = main.getElementsByClassName('top')[0];
        var pageMain = main.getElementsByClassName('page-main')[0];
        var scrollWrap = pageMain.getElementsByClassName('scrollWrap')[0];
        var mainWrap = scrollWrap.getElementsByClassName('mainWrap');
        // main的translateY标准值
        hh = main.offsetHeight - top.offsetHeight;
        // main的显示状态
        var show = false;
        // 初始手指Y指、移动时手指Y指，变化的手指Y指
        var initY, moveY, changeY;
        // main的translateY值
        var tlY = 0;
        // 阀值，系数自定义
        var threshold = document.body.offsetHeight * .25;
        // 初始化定义上下闭合元素的位置
        main.style.bottom = -hh + 'px';
        main.style.transform = 'translate3d(0px, 0px, 0px)';
        shadeTop.style.transform = 'translate3d(0px, ' + (-stH) + 'px, 0px)';
        // 添加滑屏事件
        addE(top);
        // batter-scroll要求各分页内容高度至少要比外面容器高
        for (var i = 0; i < mainWrap.length; i++) {
            mainWrap[i].style.minHeight = pageMain.offsetHeight + 1 + 'px';
        }
        // 实例化batter-scroll滚轮对象 api查阅https://www.cnblogs.com/cangqinglang/p/8553746.html
        scroll = new BScroll(pageMain, {
            scrollY: true,
            probeType: 3,
            tap: true,
            momentum: true,
            bounce: true,
            bounceTime: 300,
            deceleration: 0.001,
            momentumLimitDistance: 1,
            HWCompositing: true,
            click: true
        });
      
        //下拉加载侦听部分
        scroll.on('scrollEnd', (pos) => {
            if(index==6){
                if(scroll.maxScrollY==scroll.y){
                    console.log(pos.y)
                    scrollLoad()
                }
            }
        })
        pageMain.addEventListener('touchstart', start);
        // 触屏开始
        function start(e) {
            initY = e.changedTouches[0].pageY;
            $('#job_serach').blur();
        }
        // 触屏移动
        function move(e) {
            moveY = e.changedTouches[0].pageY;
            changeY = moveY - initY;
            // 如果向上拖动的距离超过hh，则不再变化
            if (-changeY >= hh) return;
            if (show) {
                // 显示状态下，不允许上划
                if (changeY < 0) {
                    return
                };

            } else {
                // 隐藏状态下，不允许下划
                if (changeY > 0) {
                    return
                };
            }
            shadeTop.style.transform = 'translate3d(0px, ' + (-(changeY / hh) * stH + tlyS) + 'px, 0px)';
            main.style.transform = 'translate3d(0px, ' + (changeY + tlY) + 'px, 0px)';
        }
        // 触屏结束
        function end() {
            if (show) {
                // 显示状态下，向下拉出一定距离才变更状态
                if (changeY > threshold) show = !show;
            } else {
                // 隐藏状态下，向上拉出一定距离才变更状态
                if (-changeY > threshold) {
                    show = !show;
                }
            }
            change(show)

        }
        // 隐藏状态下的top点击显示
        top.addEventListener('click', function () {
            if (show) return;
            show = false;
            change(show);
        });
        shadeTop.addEventListener('click', function () {
            show = false;
            change(show);
        });
        // 变化的集合
        function change(show) {
            main.style.transition = '.5s';
            shadeTop.style.transition = '.5s';
            console.log(show)
            if (show) {
                //默认上滑打开第一个栏目
                if (index == 1) {
                    $topNav.find('li img').eq(0).attr('src', 'images/icon1-2.png');
                    $topNav.find('li').eq(0).addClass('on');
                    $(".about").show();
                }
                tlY = -hh;
                tlyS = 0;
                scroll.enable();
                scroll.refresh();
                $(".bg4").show();
            } else {
                tlY = 0;
                tlyS = -stH;
                $(".bg4").fadeOut();
            }
            shadeTop.style.transform = 'translate3d(0px, ' + tlyS + 'px, 0px)';
            main.style.transform = 'translate3d(0px, ' + tlY + 'px, 0px)';
            // 因为transition会影响touchmove的效果，而touchend又需要过渡效果，所以添加后，需要再过渡时间后清除，定时器延时时间大于过渡时间即可
            var timer = setTimeout(function () {
                main.style.transition = '0s';
                shadeTop.style.transition = '0s';
                clearTimeout(timer);
            }, 520);
        }
        // 添加触屏滑动事件的监听
        function addE(obj) {
            obj.addEventListener('touchstart', start);
            obj.addEventListener('touchmove', move);
            obj.addEventListener('touchend', end);
            // scroll.refresh();
        }
        // $(".p6-2")[0].addEventListener('tap', function () {
		// 	// 添加公司地址位置，修改公司地址方法如下：
		// 	// http://api.map.baidu.com/lbsapi/creatmap/index.html，该地址是百度地图生成器，
		// 	// 打开网址后，将公司地址输入，获取到横纵坐标，请“coord=25.015643,102.753885”替换为获取到的横纵坐标，title替换为公司名称，content替换为公司地址
        //     window.location.href = 'http://api.map.baidu.com/marker?location=30.460184,114.432071&title=51job&content=光谷金融港&output=html'
        // })

        
        
       
    }

   

 
    $('.navmean').find('li').on('click', function (event) {
        // scroll.refresh();
        // $(this).css('font-weight','bold')
        var top= document.getElementById('section'+$(this).index());
        scroll.scrollToElement(top,500);
       
         
            // setTimeout(function () {
            //     scroll.refresh();
            // }, 500)
        // 每次内容切换 需要刷新滚轮插件
        // scroll.refresh();

    });

    // var top= document.getElementById("jobs");
    // top.onclick = function() {
    //             //scrollTo() 方法可把内容滚动到指定的坐标
    //              window.scrollTo(0, 0);
    //            } 
    // 阻止浏览器滑动的默认行为
    document.body.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, { 
        passive: false
    });







   

    
}