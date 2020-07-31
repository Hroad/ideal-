var params = {
    ctmid: "1189",
    pagesize: "6",
    //	sort: 'issuedate', //职位排序
    //	sequence:'0',
    pagenum: '1',
}
var joblist = $(".joblist ul")
var totalPage = 1;

function getList() {
    coapi.getJobList(params, function (data) {
        joblist.html("");
        //取到数据之后的操作
        var totalnum = data.resultbody.totalnum; //总职位数
        console.log(data)
        totalPage = Math.ceil(totalnum / params.pagesize) //总页数

        if (data.resultbody.length <= 0) {
            joblist.append("<p class='none_text' style='text-align:center'>暂无相关职位信息，请重新搜索。</p>")
            totalPage = 0;
        } else {
            var html = '';
            for (var i = 0; i < data.resultbody.joblist.length; i++) {

                html += '<li><a jobid="' + data.resultbody.joblist[i].jobid + '" class="job-a">查看详情</a><p class="jobname">' + data.resultbody.joblist[i].jobname + '</p><span> | </span><p class="jobarea">' + data.resultbody.joblist[i].jobareaname + '</p><div class="line"></div><div class="jobs_details"></div></li>'
            }
            joblist.html(html)

            // 数据渲染完成 职位详情导入

            $(".job-a").each(function (index, item) {
                var sibEle = $(item).siblings(".jobs_details"); // 当前元素兄弟元素
                var id = $(item).attr("jobid") * 1; // 当前职位ID
                getDetail(id, sibEle);
            })
        }

        //分页
        var thisNum = parseInt(params.pagenum); //定义整型变量
        var html2 = ''
        if (totalPage <= 9) {
            for (var iNum = 1; iNum <= totalPage; iNum++) {
                if (iNum == thisNum) {
                    html2 += '<a class="pagebtn disabled" id="' + iNum + '" >' + iNum + '</a>'
                } else {
                    html2 += '<a class="pagebtn" id="' + iNum + '">' + iNum + '</a>'
                }
            }
        } else if (totalPage > 9) {
            if (thisNum < 7) {
                for (var iNum = 1; iNum <= 7; iNum++) {
                    if (iNum == thisNum) {
                        html2 += '<a class="pagebtn disabled" id="' + iNum + '" >' + iNum + '</a>'
                    } else {
                        html2 += '<a class="pagebtn" id="' + iNum + '">' + iNum + '</a>'
                    }
                }
                html2 += '<a class="noclick">•••</a><a class="pagebtn" id="' + totalPage + '">' + totalPage + '</a>'
            } else if (thisNum > totalPage - 6) {
                html2 += '<a class="pagebtn" id="1">1</a><a class="noclick">•••</a>'
                for (var iNum = totalPage - 6; iNum <= totalPage; iNum++) {
                    if (iNum == thisNum) {
                        html2 += '<a class="pagebtn disabled" id="' + iNum + '" >' + iNum + '</a>'
                    } else {
                        html2 += '<a class="pagebtn" id="' + iNum + '">' + iNum + '</a>'
                    }
                }
            } else if (thisNum >= 7 && thisNum <= totalPage - 6) {
                html2 += '<a class="pagebtn" id="1">1</a><a class="noclick">•••</a>'
                for (var iNum = thisNum - 2; iNum < thisNum + 3; iNum++) {
                    if (iNum == thisNum) {
                        html2 += '<a class="pagebtn disabled" id="' + iNum + '" >' + iNum + '</a>'
                    } else {
                        html2 += '<a class="pagebtn" id="' + iNum + '">' + iNum + '</a>'
                    }
                }
                html2 += '<a class="noclick">•••</a><a class="pagebtn" id="' + totalPage + '">' + totalPage + '</a>'
            }

        }
        $('.page-btn').html(html2);
    });

}

$(document).on('click', ".pagebtn", function (e) {
    var j = $(this).attr('id');
    params.pagenum = j;
    getList();
})

function pageFun(page) {
    //console.log(page)
    page = page - 0;
    if (page < 1) page = 1;
    if (page >= totalPage) page = totalPage;
    params.pagenum = page;
    window.scrollTo(0, 1000);
    getList();
}

function getDetail(jobid, ele) {
    coapi.getJobDetail(jobid, function (data) {
        // console.log(data.resultbody)
        var html = "";
        html = '<p class="all_p"> ' + data.resultbody.jobinfo + ' </p>' + '<a class="apply" jobid="' + data.resultbody.jobid +
            '">投递简历</a></span>'
        ele.html(html);
    });
}

getList();

$(document).on('click', ".job-a", function (e) {
    console.log($(this))
    $(this).siblings(".jobs_details").slideToggle();
})

$(document).on('click', ".back", function (e) {
    $('.jobmenu').hide()
    $('.joblist').fadeIn(300)
    $('.jobmenu').html('<h2 class="job-load">加载中</h2>')
})


// 匿名函数自执行
! function () {
    $(document).on('click', ".apply", function (e) {
        e.preventDefault();
        var jobid = $(this).attr('jobid')
        $.ajax({
            url: "https://i.51job.com/delivery/platform/delivery_api.php?jobid=" + jobid,
            type: "get",
            dataType: 'jsonp',
            jsonp: "callback",
            jsonpCallback: "jobCallback",
            success: function (data) {
                var imgsrc = '';
                var tips = '';
                var $tipImg = $('.tipImg');
                var $tips = $('.tips');
                switch (data.status) {
                    case "1":
                        //tips = '申请成功！请勿重复投递';
                        console.log(data)
                        switch (data.result[jobid].status) {
                            case "1":
                                imgsrc = 'images/true.png';
                                tips = '投递成功，七天内请勿重复投递';
                                console.log('投递成功')
                                break;
                            case "-100":
                                imgsrc = 'images/false.png';
                                tips = '职位过期，请重现选择职位';
                                console.log('职位过期')
                                break;
                            case "-101":
                                imgsrc = 'images/false.png';
                                tips = '七天内重复投递';
                                console.log('七天内重复投递')
                                break;
                            case "-102":
                                imgsrc = 'images/false.png';
                                tips = '特殊职位，2s跳转投递页面';

                                var timer = setTimeout(function () {
                                    window.location.href = data.result[jobid].result;
                                    clearTimeout(timer);
                                }, 2000);
                                console.log('特殊职位102，2s跳转投递页面')
                                break;
                            case "-103":
                                imgsrc = 'images/false.png';
                                tips = '特殊职位，2s跳转投递页面';
                                var timer = setTimeout(function () {
                                    window.location.href = data.result[jobid].result;
                                    clearTimeout(timer);
                                }, 2000);
                                console.log('特殊职位103，2s跳转投递页面')
                                break;

                            // PS：需要注意的是，若返回-102或者-103则为特殊职位，需要根据返回的result进行跳转。

                        };

                        break;
                    case "-1":
                        tips = '职位传参不合法!';
                        // window.open(data.result);
                        break;
                    case "-2":
                        tips = '未登录！ 2s后跳入登陆界面';
                        imgsrc = 'images/false.png';
                        var timer = setTimeout(function () {
                            window.location.href = data.result + "?url=" + escape(url) + "%26apply=yes";
                            clearTimeout(timer);
                        }, 2000);
                        break;
                    case "-3":
                        tips = '简历信息不合法！2s后进入修改界面';
                        imgsrc = 'images/false.png';
                        var timer = setTimeout(function () {
                            window.location.href = data.result;
                            clearTimeout(timer);
                        }, 2000);
                        break;
                    case "-4":
                        tips = '简历不完整！2s后进入填写界面';
                        imgsrc = 'images/false.png';
                        var timer = setTimeout(function () {
                            window.location.href = data.result;
                            clearTimeout(timer);
                        }, 2000);
                        break;
                    case "-5":
                        tips = '无简历！2s后进入填写界面';
                        imgsrc = 'images/false.png';
                        var timer = setTimeout(function () {
                            window.location.href = data.result;
                            clearTimeout(timer);
                        }, 2000);
                        break;
                    case "-6":
                        tips = '职位数大于50！';
                        imgsrc = 'images/false.png';
                        var timer = setTimeout(function () {
                            //window.open(data.result);
                            clearTimeout(timer);
                        }, 2000);
                        break;
                    default:
                        break;
                }

                $('.tipImg').attr('src', imgsrc)
                $('.tips').text(tips);
                $('.job-result').fadeIn();

                var timer2 = setTimeout(function () {
                    $('.job-result').fadeOut();
                    clearTimeout(timer2);
                }, 6000);

            },
            error: function (data) {

            }
        })
    })

}();
$('.job-result').click(function () {
    $(this).fadeOut();
})
