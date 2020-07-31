//以下为“所有职位”栏目职位接口
var params = {
    ctmid: "1189",
}
var company_list; //公司
var department_list; //部门
var area_list; //地点
function getJobConditionFun(selectID) {
    coapi.getJobCondition(params.ctmid, function (data) {
        //取到数据之后的操作
        console.log(2233,data)
        console.log(223311,params)
        company_list = data.resultbody.coid;
        department_list = data.resultbody.divid;
        area_list = data.resultbody.jobarea;
        var company = $('.job-company');
        var department = $('.job-department');
        var job_area = $('.job-address');

        if (!selectID&&selectID!=0) {
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
        
        if (!selectID||selectID==1) {
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

function getList() {
    console.log("参数", params01);
    coapi.getJobList(params01, function (data) {
        console.log(6,'getlist',params01)

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
                html += '   	   <div class="btn" id="btn' + new_data[i].jobid + '" data-id="' + new_data[i].jobid + '" onclick="setFunction($(this))">';
                html += '   	  	  <p>' + new_data[i].jobname + '</p>';
                html += '   	      <p>' + new_data[i].workareaname + '/' + new_data[i].divname + '</p><img class="detail" src="images/arrow3.png"></div>';
                html += '             <div class="job-detail" style="display: none;"><pre class="jobinfo"></pre>'
                html += '             <div data-id="' + new_data[i].jobid + '" class="job-apply" onclick="joblink($(this))">立即申请</div></div>'
                html += '         </li>';
                job_xq.append(html);
            }
            params01.pagenum++;
            // console.log(totalnum + 'totalnum')
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
    }
    scroll.refresh();
}
function setFunction(obj) {
    console.log(12,'aaa')
    var $this=document.getElementById("btn"+obj.data('id'));
    // scroll.scrollTo(0, 500)
    // $(".job-detail").eq(0).slideUp().show();
    // $(".job-ul li").eq(0).find('.detail').css('transform', 'rotate(90deg)');
    $('.detail').css('transform', 'rotate(0)')
    var isshow = obj.parent().find('.job-detail').css('display');
    if (isshow == 'none') {
        coapi.getJobDetail(obj.data('id'), function (data) {
            console.log(data)
            //取到数据之后的操作
            $(".jobinfo").html(data.resultbody.jobinfo)
            $(".job-detail").hide();
            obj.parent().find('.detail').css('transform', 'rotate(90deg)');
            scroll.scrollToElement($this,0)
            obj.parent().find('.job-detail').slideDown();
            setTimeout(function () {
                scroll.refresh();
            }, 500)
        });
    } else {
        obj.parent().find(".job-detail").slideUp();
    };

}
//跳转申请方法
function joblink(obj) {
    var id = obj.data("id");
    window.location.href = 'https://jobs.51job.com/all/' + id + '.html'
}
$(".job-area ").on("change", function () {
    params01.pagenum = 1
    job_xq.html("");
    params01.coid = $(".job-company option:selected").val();
    params01.divid = $(".job-department option:selected").val()
    params01.jobarea = $(".job-address option:selected").val();
    //start 刷新搜索器列表
    var selectID =$(this).index();//0是公司选择框, 1是部门选择框,2是城市选择框
    switch(selectID){
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
        // $('#jobnum').html(totalnum);
        scroll.refresh();
    }, 500)

});

//关键字搜索点击
$("#zoom")[0].addEventListener('tap', function () {
    params01.keyword = $("#job_serach").val();
    params01.pagenum = 1
    job_xq.html("");
    getList();
    setTimeout(function () {
        $(".search-result").show();
        // $('#jobnum').html(totalnum);
        scroll.refresh();
    }, 500)
})

//关键字键盘确认事件
document.onkeypress = function (event) {
    if (event.keyCode == 13) {
        params01.keyword = $("#job_serach").val();
        params01.pagenum = 1;
        job_xq.html("");
        getList();
        setTimeout(function () {
            $(".search-result").show();
            // $('#jobnum').html(totalnum);
            scroll.refresh();
        }, 500)
    }
}
//清除检索条件
$(".clear-img")[0].addEventListener('tap', function () {
    params01.pagenum = 1;
    job_xq.html("");
    params.coid=params01.coid = ""; //公司
    params.divid=params01.divid = ""; //部门
    params.jobarea=params01.jobarea = ""; //地区
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

function getListHot() {
    coapi.getJobList(params02, function (data) {
        $(".list").html("");
        console.log(data)
        //取到数据之后的操作
        if (data.resultbody.joblist) {
            for (var i = 0; i < data.resultbody.joblist.length; i++) {
                var new_data = data.resultbody.joblist;
                var html = '';
                html += '   	  <li class="aup durm0p5">';
                html += '   	      <p>' + new_data[i].jobname + '</p>'
                html += '   	      <p>' + new_data[i].workareaname + '|' + new_data[i].divname + '</p>'
                html += '             <div class="job-apply1" data-id="' + new_data[i].jobid + '" onclick="hotjobDetail($(this))">立即申请</div>'
                html += '   	  </li>';
                $(".list").append(html);

            }
        }
        if (data.resultbody.length <= 0) {
            $(".list").append("<p class='none_text'>暂无数据！</p>")
        }
    });
}
getListHot();

function hotjobDetail(obj) {
    coapi.getJobDetail(obj.data('id'), function (data) {
        console.log(data)
        $('.sevive').html(data.resultbody.jobname);
        $('.address').html(data.resultbody.workareaname + "|" + data.resultbody.divname);
        $('.hotdetail').html(data.resultbody.jobinfo);
        //取到数据之后的操作
        $(".m-bg").show();
        $(".apply").attr("data-id", obj.data('id'))
        scroll.disable()
        $(".hotdetail").scrollTop(0);
    });
}
$('.close-div').click(function () {
    $(".m-bg").hide();
    scroll.enable()
})
$(".hotdetail")[0].addEventListener('touchmove', function (e) {
    e.stopPropagation();
})