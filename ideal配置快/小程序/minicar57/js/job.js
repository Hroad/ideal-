//以下为“所有职位”栏目职位接口
job = getQueryString('job');

var params = {
    ctmid: "1189",
}
var company_list; //公司
var department_list; //部门
var area_list; //地点
function getJobConditionFun(selectID) {
    coapi.getJobCondition(params.ctmid, function (data) {
        //取到数据之后的操作
        company_list = data.resultbody.coid;
        department_list = data.resultbody.divid;
        area_list = data.resultbody.jobarea;
        var company = $('.job-company');
        var department = $('.job-department');
        var job_area = $('.job-address');
        if (!selectID && selectID != 0) {
            console.log('分公司更新');
            company.html("");
            company.append('<option value="">公司</option>');
            for (var x = 0; x < company_list.length; x++) {
                company.append(
                    '<option value="' + company_list[x].key + '">' + company_list[x].value + '</option>'
                );
            };
        }
        if (!selectID) {
            console.log('部门更新');
            department.html("");
            department.append('<option value="">部门</option>');
            for (var x = 0; x < department_list.length; x++) {
                department.append(
                    '<option value="' + department_list[x].key + '">' + department_list[x].value + '</option>'
                );
            };
        }
        if (!selectID || selectID == 1) {
            console.log('城市更新');
            job_area.html("");
            job_area.append('<option value="">地点</option>');
            for (var x = 0; x < area_list.length; x++) {
                job_area.append(
                    '<option value="' + area_list[x].key + '">' + area_list[x].value + '</option>'
                );
            };
        }
    }, params);
}
getJobConditionFun();

var params01 = {
    ctmid: "1189",
    pagesize: "10",
    pagenum: "1",
    jobarea: "",
    keyword: "",
    poscode: "",
    coid: "", //公司
    divid: "", //部门
    jobarea: "", //地区
}

var job_xq = $(".job-ul")
var totalnum = 0;
var isfirst = true;

function getList() {
    console.log("参数", params01);
    coapi.getJobList(params01, function (data) {
        // 获取数据后上拉加载消失
        $(".yuan-total").hide();
        setTimeout(function () {
            scroll.finishPullUp()
        }, 500)
        // job_xq.html("");
        console.log(data)
        page = Math.ceil(data.resultbody.totalnum / params01.pagesize)
        //取到数据之后的操作
        if (data.resultbody.joblist) {
            totalnum = data.resultbody.joblist.length;
            for (var i = 0; i < totalnum; i++) {
                var new_data = data.resultbody.joblist;
                var html = '';
                html += '   	  <li>';
                html += '   	   <div class="btn" id="btn' + new_data[i].jobid + '" job-id="2" data-id="' + new_data[i].jobid + '" onclick="hotjobDetail($(this))">';
                html += '   	  	  <p>' + new_data[i].jobname + '</p>';
                html += '   	      <p>' + new_data[i].workareaname + '/' + new_data[i].divname + '</p><img class="detail" src="images/arrow3.png"></div>';
                html += '         </li>';
                job_xq.append(html);
            }
            // 如果地址带参数为job=2
            if (job == 2) {
                showjob(job)
                if (isfirst) {
                    isfirst = false
                    hotjobDetailParams(getQueryString('jobid'));
                }
            }
            params01.pagenum++;
        } else {
            totalnum = 0;
            console.log(totalnum + 'totalnum')
        }
        if (data.resultbody.length <= 0) {
            job_xq.append("<p class='none_text'>暂无数据！</p>")
            totalnum = 0;
        }
    });
}
getList();
//下拉加载请求接口部分
function scrollLoad() {
    if (params01.pagenum <= page) {
        getList()
        $(".yuan-total").show();
        $(".yuan-total p").html('')

        console.log('scrollLoad')
    } else {
        // 上拉加载全部数据加载完毕的情况
        $(".yuan-total").show();
        $(".yuan-total p").html('已加载全部数据')
        setTimeout(function () {
            $(".yuan-total").hide();
            scroll.finishPullUp()
        }, 60)
    }
    setTimeout(function () {
        scroll.refresh()
    }, 500)

}
// 职位申请投递方法(公共)
function joblinkFun(id) {
    var url = window.location;
    $.ajax({
        type: "GET",
        url: "https://i.51job.com/delivery/platform/delivery_api.php",
        data: {
            "jobid": id
        },
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: 'jobCallback',
        success: function (res) {
            console.log(res)
            switch (res.status) {
                case ("1"):
                    if (res.result[id].status == 1) {
                        alert("投递成功");

                    } else if (res.result[id].status == -100) {
                        alert("职位过期");

                    } else if (res.result[id].status == -101) {
                        alert("七天内重复投递");
                    } else if (res.result[id].status == -102 || res.result[id].status == -103) {
                        window.location.href = res.result[id].result;
                    }
                    break;
                case ("-1"):
                    alert("职位传参不合法");
                    break;
                case ("-2"):
                    alert("未登录，请先登录！")
                    window.location.href = 'https://login.51job.com/login.php' + '?url=' + url + "?jobid=" + id + "%26job=" + jindex + "%26apply=yes"
                    break;
                case ("-3"):
                    alert("简历信息不合法");
                    if (res.result != '') {
                        window.location.href = 'https://login.51job.com/login.php';
                    }
                    break;
                case ("-4"):
                    alert("简历不完整");
                    if (res.result != '') {
                        window.location.href = 'https://login.51job.com/login.php';
                    }
                    break;
                case ("-5"):
                    alert("无简历");
                    if (res.result != '') {
                        window.location.href = 'https://login.51job.com/login.php';
                    }
                    break;
                case ("-6"):
                    alert("职位数大于50");
                    if (res.result != '') {
                        window.location.href = 'https://login.51job.com/login.php';
                    }
                    break;
            }
        }
    })
}
//投递申请方法
function joblink(obj) {
    var job = obj.attr('job');
    var id = obj.attr('data-id');
    console.log(id + '++++++++++++++id');
    joblinkFun(id)
}
//带参数情况下自动投递申请方法
function joblinkParams(id) {
    joblinkFun(id)
}
$(".job-area ").on("change", function () {
    params01.pagenum = 1
    job_xq.html("");
    params01.coid = $(".job-company option:selected").val();
    params01.divid = $(".job-department option:selected").val()
    params01.jobarea = $(".job-address option:selected").val();
    //start 刷新搜索器列表
    var selectID = $(this).index(); //0是公司选择框, 1是部门选择框,2是城市选择框
    switch (selectID) {
        case 0:
            params.coid = params01.coid;
            params.divid = params01.divid = '';
            params.jobarea = params01.jobarea = '';
            break
        case 1:
            params.coid = params01.coid;
            params.divid = params01.divid;
            params.jobarea = params01.jobarea = '';
            break
    }
    getJobConditionFun(selectID);
    //end 刷新搜索器列表
    getList();
    setTimeout(function () {
        $(".search-result").show();
        scroll.refresh();
    }, 500)

});

function searchResult() {
    params01.pagenum = 1;
    job_xq.html("");
    getList();
    setTimeout(function () {
        scroll.scrollTo(0, 0);
        $(".search-result").show();
        scroll.refresh();
    }, 500);
}
//关键字搜索点击
$("#zoom")[0].addEventListener('tap', function () {
    params01.keyword = $("#job_serach").val();
    searchResult()
})
//关键字键盘确认事件
document.onkeypress = function (event) {
    if (event.keyCode == 13) {
        if (event.currentTarget.activeElement.id != 'job_serach') {
            $('#index-search').blur();
            gotoPageMore();
            $('.p1-tab').eq(1).find("li").eq(1).addClass('on').siblings().removeClass('on');
            $('.p1-tab').eq(1).find("li").find('.online').hide();
            $('.p1-tab').eq(1).find("li").eq(1).find('.online').show();
            $(".content-tab").eq(4).show().siblings().hide()
            params01.keyword = $("#index-search").val();
            $("#job_serach").val($("#index-search").val());
            $(".scrollmain").eq(1).css('height', 'auto');
        } else {
            $('#job_serach').blur();
            params01.keyword = $("#job_serach").val();
        }
        indexmain = 1;
        indexsub = 1
        ismorejob = true;
        searchResult();
    }
}

//清除检索条件
$(".clear-img")[0].addEventListener('tap', function () {
    params01.pagenum = 1;
    job_xq.html("");
    params.coid = params01.coid = ""; //公司
    params.divid = params01.divid = ""; //部门 
    params.jobarea = params01.jobarea = ""; //地区
    params01.keyword = ''; //关键字
    $(".job-company")[0].options.selectedIndex = 0;
    $(".job-department")[0].options.selectedIndex = 0;;
    $(".job-address")[0].options.selectedIndex = 0;;
    $("#job_serach").val("");
    getJobConditionFun();
    getList();
    setTimeout(function () {
        // $('#jobnum').html(totalnum);
        $(".search-result").hide();
        scroll.refresh();
    }, 500)

})

//以下为“热招职位”栏目接口
var params02 = {
    ctmid: "1189",
    pagesize: "30",
    pagenum: "1",
    divid: "4302638", //部门
}

// 取地址栏参数值得方法
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
// 热招职位列表
function getListHot() {
    coapi.getJobList(params02, function (data) {
        $(".list").html("");
        console.log(data)
        //取到数据之后的操作
        if (data.resultbody.joblist) {
            rl1 = data.resultbody.joblist.length
            for (var i = 0; i < data.resultbody.joblist.length; i++) {
                var new_data = data.resultbody.joblist;
                var html = '';
                html += '   	  <li class="aup durm0p5" job-id="1" data-id="' + new_data[i].jobid + '" onclick="hotjobDetail($(this))">';
                html += '   	      <p>' + new_data[i].jobname + '</p>'
                html += '   	      <p>' + new_data[i].workareaname + '|' + new_data[i].divname + '</p>'
                html += '             <div class="job-apply1">立即申请</div>'
                html += '   	  </li>';
                $(".list").append(html);
            }
            if (job == 1) {
                showjob(job)
                hotjobDetailParams(getQueryString('jobid'));
            }
        }
        if (data.resultbody.length <= 0) {
            $(".list").append("<p class='none_text'>暂无数据！</p>")
        }
    });

    // var job = 1

}
getListHot();
// 职位详情
function hotjobDetail(obj) {
    coapi.getJobDetail(obj.data('id'), function (data) {
        console.log(data)
        jindex = obj.attr('job-id')
        hotJobDataShow(data)
        mBgPos()
        $(".apply").attr("data-id", obj.data('id'))
        scroll.disable()

    });
}
// 地址栏带参数情况下职位详情
function hotjobDetailParams(dataid) {
    coapi.getJobDetail(dataid, function (data) {
        // console.log(dataid)
        hotJobDataShow(data)
        $(".apply").attr("data-id", dataid)
        joblinkParams(dataid);
    });
}
function hotJobDataShow(data){
    $('.sevive').html(data.resultbody.jobname);
    $('.address').html(data.resultbody.workareaname + "|" + data.resultbody.divname);
    $('.hotdetail2').html(data.resultbody.jobinfo);
    //取到数据之后的操作
    $(".m-bg").show();
    $(".hotdetail").scrollTop(0);
}
$('.close-div').click(function () {
    $(".m-bg").hide();
    scroll.enable()
})
$(".hotdetail")[0].addEventListener('touchmove', function (e) {
    e.stopPropagation();
})
// 带参数情况下二级导航记忆以及scroll高度重置
function showjob(job) {
    if (job) {
        gotoPageMore();
        $('.p1-tab').eq(1).find("li").eq(job - 1).addClass('on').siblings().removeClass('on');
        $('.p1-tab').eq(1).find("li").find('.online').hide();
        $('.p1-tab').eq(1).find("li").eq(job - 1).find('.online').show();
        $(".content-tab").eq(Number(job) + 2).show().siblings().hide()
        if (job == 1) {
            $(".scrollmain").eq(1).css('height', ($(".job-content-1").find('li').height() + 30) * (rl1 / 2) + 200 + 30);
            console.log(rl1)
            ismorejob = false;
            indexsub = 0;
            $(".m-bg").show();
        }
        if (job == 2) {
            $(".scrollmain").eq(1).css('height', $(".alljob-content").height());
            ismorejob = true;
            indexsub = 1

        }
        setTimeout(function () {
            mBgPos()
        }, 500)
        indexmain = 1;
    }
}
// 带参数情况下主导航栏公用方法
function gotoPageMore() {
    var $topNav = $('.topNav');
    var $mainWrap = $('.mainWrap');
    $topNav.find('li').eq(1).addClass('on').siblings().removeClass('on');
    $mainWrap.hide();
    $mainWrap.eq(1).show();
    for (var j = 0; j < $topNav.find('li').size(); j++) {
        $topNav.find('li img').eq(j).attr('src', 'images/icon' + (j + 1) + '-1.png')
    }
    $topNav.find('li').eq(1).find('img').attr('src', 'images/icon2-2.png');
}
// 职位详情弹框垂直居中方法
function mBgPos() {
    // iPhoneX的情况需要-30的高度
    var wheight = window.innerHeight;
    $(".content-bottom").css('height', wheight * 0.47);
    var contentDHeight = $(".content-detail").height();
    var contentBHeight = $(".content-bottom").height();
    if (!isAndroid && wheight > 1300) {
        gap = 30
        console.log('x')
    } else {
        gap = 0
    }
    var vHeight = (wheight-101 - gap - contentDHeight) / 2;
    $(".content-detail").css('top', vHeight + 'px')
    $(".hotdetail2").css("height", contentBHeight + 1)
}