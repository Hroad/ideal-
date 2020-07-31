/**
 *  由于wx_Share51.js整合进来，所以此文件必须放在src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"的script文件下面
 */
"use strict";
window.KeirTools = {};
;(function(factory) {
    /**
     * @param  dis 时间间隔
     * @param  loop 循环次数，如果为0则无限循环
     * @param  callbackfun 回调方法
     * @param  param 给回调方法callbackfun传入的参数
     */
    factory.Timer = function(obj) {
        this.polyFills();
        this.dis = obj['dis'] || 0;
        this.loop = obj['loop'] || 0;
        this.count = 0;
        this.callbackfun = obj['callback'] || null;
        this.tid = null;
        this.pretime = 0;
        this.ispause = false;
        this.param = obj['param'] || null;
    };
    factory.Timer.prototype.start = function() {
        if (this.callbackfun == null) {
            this.errors("回调函数不能为空");
            return;
        } else if (this.loop < 0 || this.dis < 0) {
            this.errors("请输入正确数值");
            return;
        }
        this.pretime = (new Date()).getTime();
        this.ispause = false;
        this.processing();
    };
    factory.Timer.prototype.processing = function() {
        //console.log("doing..");
        var _self = this;
        if (this.loop > 0 && this.count == this.loop) {
            this.stop();
            return;
        }
        if (this.ispause == true) {
            return;
        }
        if (this.dis > 16.7) {
            var nowtime = (new Date()).getTime();
            if (nowtime - this.pretime > this.dis) {
                this.count++;
                this.callbackfun(this.count, this.param);
                this.pretime = nowtime;
            }
        } else {
            this.count++;
            this.callbackfun(this.count, this.param);
        }
        this.tid = window.requestAnimationFrame(function() {
            _self.processing();
        });
    };
    factory.Timer.prototype.stop = function() {
        if (this.tid != null) {
            this.ispause = true;
            window.cancelAnimationFrame(this.tid);
            this.count = 0;
            this.tid = null;
        }
    };
    factory.Timer.prototype.pause = function() {
        if (this.tid != null) {
            this.ispause = true;
            window.cancelAnimationFrame(this.tid);
            this.tid = null;
        }
    };
    factory.Timer.prototype.errors = function(msg) {
        throw new Error(msg);
    };
    factory.Timer.prototype.polyFills = function() {
        /*兼容处理requestAnimationFrame*/
        var lastTime = 0;
        var vendors = ['webkit', 'moz'];
        for (var x = 0, length = vendors.length; x < length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
        }
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
                var id = window.setTimeout(function() {
                    callback(currTime + timeToCall);
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }
        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
        }
    };
    /**
     *
     * @param isAutoLoad 是否自动加载
     * @param readyCb onDOMContentLoaded回调函数
     * @param completeCb  onload回调函数
     * @constructor
     */
    factory.Load51 = function(isAutoLoad, readyCb, completeCb) {
        this.Version = "Load51_v3.0";
        this._isAutoLoad = isAutoLoad === undefined ? true : isAutoLoad;
        this._isReady = false;
        this._isLoaded = false;
        this._num = 0;
        this._targetNum = 0.82;
        this._progressTime = null;
        this._loading = document.querySelector('.loading');
        this._progress = document.querySelector('.progress');
        this._progressNum = document.querySelector('.progress-num');
        this._readyCb = readyCb || null;   //ready回调
        this._completeCb = completeCb || null;   // load回调
        this._onDomReady = this._readyHandler.bind(this);
        this._onWindowLoad = this._loadHandler.bind(this);
        this.init();
    };
    factory.Load51.prototype = {
        constructor: factory.Load51,
        init: function() {
            if (this._isAutoLoad) {
                this._addReadyEvent();
                this._addLoadEvent();
            }
            this._changeView();
        },
        _ready: function() {
            if (this._num <= this._targetNum) {
                this._num += 0.01;
                this._progress.style.webkitTransform = 'scaleX(' + this._num + ')';
                this._progressNum.innerHTML = Math.round(this._num * 100) + '%';
            }
        },
        _load: function() {
            this._num += 0.05;
            if (this._num >= 1) {
                this._removeReadyEvent();
                this._removeLoadEvent();
                this._removeTimer(this._progressTime);
                this._loading.style.display = 'none';
                typeof this._completeCb === 'function' && this._completeCb();
            }
            this._progress.style.webkitTransform = 'scaleX(' + (this._num > 1 ? 1 : this._num) + ')';
            this._progressNum.innerHTML = (Math.round(this._num * 100) > 100 ? 100 : Math.round(this._num * 100)) + '%';
        },
        onReadyStart: function(callback) {
            this._readyCb = callback ? callback : this._readyCb;
            if (!this._isAutoLoad) {
                this._readyHandler();
            } else if (this._isReady) {
                console.warn('DOMContentLoaded has already done it,if you need to manually call, please set the isAutoLoad to false');
            }
        },
        onComplete: function(callback) {
            this._completeCb = callback ? callback : this._completeCb;
            if (!this._isAutoLoad) {
                this._loadHandler();
            } else if (this._isLoaded) {
                console.warn('The load event has been executed,if you need to manually call, please set the isAutoLoad to false');
            }
        },
        _readyHandler: function() {
            this._isReady = true;
            typeof this._readyCb === 'function' && this._readyCb();
        },
        _loadHandler: function() {
            this._isLoaded = true;
        },
        _changeView: function() {
            var self = this;
            this._progressTime = new factory.Timer({
                dis: 100,
                callback: function() {
                    if (self._isLoaded) {
                        self._load();
                    } else if (self._isReady) {
                        self._ready();
                    }
                }
            });
            this._progressTime.start();
        },
        _removeTimer: function(timer) {
            timer.stop();
            timer = null;
        },
        _addReadyEvent: function() {
            document.addEventListener('DOMContentLoaded', this._onDomReady, false);
        },
        _addLoadEvent: function() {
            window.addEventListener('load', this._onWindowLoad, false);
        },
        _removeReadyEvent: function() {
            document.removeEventListener('DOMContentLoaded', this._onDomReady, false);
        },
        _removeLoadEvent: function() {
            window.removeEventListener('load', this._onWindowLoad, false);
        },
        pause: function() {
            this._progressTime.pause();
        },
        start: function() {
            this._progressTime.start();
        }
    };
    factory.load51 = null;
    /**
     * * @param options{
     *		title:分享标题
     *		desc:分享详情
     *		link:分享链接 ---- 自定义需要是绝对路径
     *		imgUrl:分享图片   ---- 相对路径
     *		debug:是否开启debug   默认关闭（测试阶段比较有用）
     * }
     */
    factory.Share51 = function(options) {
        this._location = location.href;
        this._basePath = this.getBasePath();
        this._shareConfig = {
            title: options.title || document.title,
            desc: options.desc || this._location,
            link: options.link || this._location,
            imgUrl: this._basePath + options.imgUrl,
            trigger: function(res) {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                //alert('用户点击发送给朋友');
            },
            success: function(res) {
                //alert('已分享');
            },
            cancel: function(res) {
                //alert('已取消');
            },
            fail: function(res) {
                //alert(JSON.stringify(res));
            }
        };
        if (!this._shareConfig.imgUrl) {
            throw new Error('分享图片是必须的');
        }
        if (!$) {
            throw new ReferenceError('请在这个js文件之前引入jQuery或者Zepto');
        }
        this._debug = options.debug || false;
        this.init();
    }
    factory.Share51.prototype = {
        constructor: factory.Share51,
        init: function() {
            this.CreateAjax();
            this.wxReady();
            this.wxError();
            this.addImg();
        },
        CreateAjax: function() {
            $.support.cors = true;
            var ent = {
                url: this._location.split('#')[0]
            };
            var time = +new Date();
            var _this = this;
            $.ajax({
                type: "post",
                url: "https://sdk.51job.com/mobile/post.php?time=" + time,
                dataType: "json",
                data: ent,
                success: function(data) {
                    console.log('success');
                    _this._xhrSuccess(data);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    _this._xhrError();
                    console.log('error');
                }
            });
        },
        _xhrSuccess: function(data) {
            // 成功
            this._wxConfig(data);
            if (this._debug) {
                this.showShareDebug();
            }
        },
        _xhrError: function(e) {
            // 失败
        },
        _wxConfig: function(data) {
            var _this = this;
            wx.config({
                debug: _this._debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: data.appId, // 必填，公众号的唯一标识
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonceStr, // 必填，生成签名的随机串
                signature: data.signature, // 必填，签名，见附录1
                jsApiList: ['checkJsApi',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'onMenuShareQZone'
                ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
            console.log('_wxConfig');
        },
        wxReady: function() {
            var _this = this;
            wx.ready(function() {
                //获取“分享给朋友”按钮点击状态及自定义分享内容接口
                wx.onMenuShareAppMessage(_this._shareConfig);
                // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
                wx.onMenuShareTimeline(_this._shareConfig);
                //获取“分享到QQ”按钮点击状态及自定义分享内容接口
                wx.onMenuShareQQ(_this._shareConfig);
                //获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
                wx.onMenuShareWeibo(_this._shareConfig);
                //获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
                wx.onMenuShareQZone(_this._shareConfig);
                console.log('wxReady');
            });
        },
        wxError: function() {
            var _this = this;
            wx.error(function(res) {
                console.log('wxError',res);
                // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
            });
        },
        getBasePath: function() {
            var basePath = '',
                origin   = '',
                pathName = '';
            if (origin in location) {
                origin = location.origin;
            } else {
                origin = location.protocol + "//" + location.hostname + (location.port ? ':' + location.port : '');
            }
            pathName = location.pathname.split('/');
            pathName.pop();
            pathName.push('');
            pathName = pathName.join('/')
            basePath = origin + pathName;
            return basePath;
        },
        addImg: function() {
            // 添加首张图片  //仅QQ里面可以显示了
            var body = document.body;
            if (!body) {
                return
            }
            var img = document.createElement('img');
            img.src = this._shareConfig.imgUrl;
            img.style.cssText = 'position:absolute;top:-200%;left:0;width:320px;height:auto';
            body.insertBefore(img, body.childNodes[0]);
        },
        showShareDebug: function() {
            // 显示debug
            console.log("%c--------------------SHARE START--------------------\n%cShare51\u63d0\u793a\n%c\u5206\u4eab\u6807\u9898\uff1a%c" + this._shareConfig.title + "\n%c\u5206\u4eab\u8be6\u60c5\uff1a%c" + this._shareConfig.desc + "\n%c\u5206\u4eab\u56fe\u7247\uff1a%c" + this._shareConfig.imgUrl + "\n%c\u5206\u4eab\u94fe\u63a5\uff1a%c" + this._shareConfig.link + "\n%c--------------------SHARE END--------------------", "color:#989a9d;", "font-size:20px;", "color:#000;", "color:green;", "color:#000;", "color:green;", "color:#000;", "color:green;", "color:#000;", "color:green;", "color:#989a9d;");
        }
    }
    factory.share51 = null;
    return factory;
})(window.KeirTools || {});
/**
 * @public
 * load方法仅供调用一次
 * @param onDomReady  onDOMContentLoaded回调函数
 * @param onLoaded  onload回调函数
 * @returns {factory.Load51}
 */
function load(onDomReady,onLoaded){
    return window.KeirTools.load51 || (window.KeirTools.load51 = new window.KeirTools.Load51(true, onDomReady, onLoaded));
};
/**
 * @public
 * share方法仅供调用一次
 * @param options 配置项
 * options:{
 *		title:分享标题
 *		desc:分享详情
 *		link:分享链接 ---- 自定义需要是绝对路径
 *		imgUrl:分享图片   ---- 相对路径
 *		debug:是否开启debug   默认关闭（测试阶段比较有用）
 * }
 */
function share(options){
    return window.KeirTools.share51 || (window.KeirTools.share51 = new window.KeirTools.Share51(options));
};