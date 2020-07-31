/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-24 10:29:05
 * @version $Id$
 */
$(function() {
    var pp = new pCpT({
        ctmid: '2789', //职位号 必填1189
        joblistDiv: '#xz', // 职位列表容器
        count: '.count', //总职位数存放位置
        countnum: '', //总职位数
        totalpage: '.total', //总职位页数存放位置
        totalpagenum: '', //总职位页数
        presentpage: '.present', //当前页数
        firstBtn: '.first', //第一页按钮
        finalBtn: '.final', //末页按钮
        preBtn: '.pre', //上一页按钮
        nextBtn: '.next', //下一页按钮
        Jumppage: '#inputpage', //跳转输入框
        goBtn: '#go', //点击跳转按钮
        pagesize: 10, //每页数量 最大100
        coid: '#coid', //搜索 公司
        // divid: '#s2', //搜索 部门
        jobarea: '#jobarea', //搜索 地点
        functype: '#functype', //s搜索职能
        keyword: '#keyword', //搜索 关键字
        seachBtn: '#ss'   //搜索按钮
    })
	function pCpT(obj) {
		// 接口参数
		var params = {
			ctmid: obj.ctmid, //会员号 支持多选
			pagesize: '', //每页数选填  最多一页100条
			pagenum: '', //第几页 最大500页
			coid: '',
			divid: '',
			jobarea: '',
			keyword: '',
			functype: ''
		}
		
		// 职位列表
		function getJobList(params){   //职位列表接口	
			params.pagesize = obj.pagesize   //每页数选填  最多一页100条
			params.pagenum = $(obj.presentpage).text()     //第几页 最大500页
			coapi.getJobList(params, function(data) {   //调用职位列表接口
				//取到数据之后的操作
				console.log(data)
				
				//初始化页面
				if (data.resultbody.length !== 0 && data.resultbody.joblist.length !== 0) {
					var html = '<tr><th>职位名称</th><th>工作地点</th><th>公司名称</th><th>发布时间</th></tr>';
					for (var i = 0; i < data.resultbody.joblist.length; i++) {
						html += '<tr><td><a href="jobdetail.html?jobid=' + data.resultbody.joblist[i].jobid + '&ctmid=' + data.resultbody.joblist[i].ctmid + '">' + data.resultbody.joblist[i].jobname + '</a></td>'
						html += '<td>' + data.resultbody.joblist[i].workareaname + '</td>'
						html += '<td >' + data.resultbody.joblist[i].coname + '</td>'
						html += '<td>' + data.resultbody.joblist[i].issuedate.split(" ")[0] + '</td></tr>'
					}
				} else {
					html = '<tr><th>职位名称</th><th>工作地点</th><th>公司名称</th><th>发布时间</th></tr><tr><td colspan="4">您搜索的结果不存在<td></tr>'
				}
				 $(obj.joblistDiv).html(html);
				obj.countnum = data.resultbody.totalnum;
				obj.totalpagenum = Math.ceil(data.resultbody.totalnum / obj.pagesize);
				//    改动
				if ($(obj.joblistDiv).find('td').text() == "您搜索的结果不存在") {
					$(obj.count).text(0)
					$(obj.totalpage).text(0);
					$(obj.presentpage).text(0);
				} else {
					$(obj.count).text(data.resultbody.totalnum);
					$(obj.totalpage).text(obj.totalpagenum);
				}
				//    改动   END
				//初始化功能函数
			})
		}
		getJobList(params)  //调用职位列表接口函数
		
		// 分页     
		$(obj.preBtn).click(function(event) {     //上一页
			event.stopPropagation();
			if (parseInt($(obj.presentpage).text()) > 1) {
				$(obj.presentpage).text(parseInt($(obj.presentpage).text()) - 1)
				getJobList(params)  //调用职位列表接口函数
			}
			
		});
		$(obj.nextBtn).click(function(event) {     //下一页
			/* Act on the event */
			event.stopPropagation();
			var x = parseInt($(obj.presentpage).text());
			if (parseInt($(obj.presentpage).text()) < obj.totalpagenum) {
				$(obj.presentpage).text(x + 1)
				getJobList(params)  //调用职位列表接口函数
			}
		});
		$(obj.firstBtn).click(function(event) {     //首页
			/* Act on the event */
			event.stopPropagation();
			$(obj.presentpage).text(1)
			getJobList(params)  //调用职位列表接口函数
		});
		$(obj.finalBtn).click(function(event) {     //尾页
			/* Act on the event */
			event.stopPropagation();
			$(obj.presentpage).text(parseInt($(obj.totalpage).text()))
			getJobList(params)  //调用职位列表接口函数
		});
		$(obj.goBtn).click(function(event) {      //跳转
			/* Act on the event */
			event.stopPropagation();
			if (parseInt($(obj.Jumppage).val()) > 0 && parseInt($(obj.Jumppage).val()) <= parseInt($(obj.totalpage).text()) && $(obj.Jumppage).val() !== '') {
				//             改动
				parseInt($(obj.presentpage).text($(obj.Jumppage).val().replace(/\b(0+)/gi, "")));
				$(obj.Jumppage).val('')
				getJobList(params)  //调用职位列表接口函数    
			}
		});
		$(obj.Jumppage).bind('keypress', function(event) {      //input跳转
			if (event.keyCode == "13")
			{
				if (parseInt($(obj.Jumppage).val()) > 0 && parseInt($(obj.Jumppage).val()) <= parseInt($(obj.totalpage).text()) && $(obj.Jumppage).val() !== '') {
					parseInt($(obj.presentpage).text($(obj.Jumppage).val().replace(/\b(0+)/gi, "")));
					$(obj.Jumppage).val('')
					getJobList(params)  //调用职位列表接口函数
				}
			}
		});
		
		// 搜索器
		function getJobCon(params){    //搜索器函数
			coapi.getJobCondition(obj.ctmid, function(data) {     //搜索器接口
				//取到数据之后的操作
				console.log(data)
				for (var i = 0; i < data.resultbody.coid.length; i++) {
					$(obj.coid).append('<option value="' + data.resultbody.coid[i].key + '">' + data.resultbody.coid[i].value + '</option>')
				}
				// for (var i = 0; i < data.resultbody.divid.length; i++) {
				// 	$(obj.divid).append('<option value="' + data.resultbody.divid[i].key + '">' + data.resultbody.divid[i].value + '</option>')
				// }
				for (var i = 0; i < data.resultbody.functype.length; i++) {
					$(obj.functype).append('<option value="' + data.resultbody.functype[i].key + '">' + data.resultbody.functype[i].value + '</option>')
				}
				for (var i = 0; i < data.resultbody.jobarea.length; i++) {					
					$(obj.jobarea).append('<option value="' + data.resultbody.jobarea[i].key + '">' + data.resultbody.jobarea[i].value + '</option>')
				}
				
			},params)

		}
		getJobCon(params)    //调用搜索器接口函数
		
		
		$(obj.coid).change(function(event) {     //公司
			/* Act on the event */
			event.stopPropagation();
			params.coid = $(obj.coid).val()
			$(obj.presentpage).text('1')
			getJobList(params)  //调用职位列表接口函数
			
		});
		$(obj.jobarea).change(function(event) {    //地点
			/* Act on the event */
			event.stopPropagation();
			params.jobarea = $(obj.jobarea).val()
			$(obj.presentpage).text('1')
			getJobList(params)  //调用职位列表接口函数
		});
		// $(obj.divid).change(function(event) {    //部门
		// 	/* Act on the event */
		// 	event.stopPropagation();
		// 	$(obj.presentpage).text('1')
		// 	getJobList(params)  //调用职位列表接口函数
		// });
		$(obj.functype).change(function(event) {     //职能
			event.stopPropagation();
			params.functype = $(obj.functype).val()
			$(obj.presentpage).text('1')
			getJobList(params)  //调用职位列表接口函数
		});
		$(obj.seachBtn).click(function() {     //搜索
			event.stopPropagation();
			params.keyword = $(obj.keyword).val()
			$(obj.presentpage).text('1')
			getJobList(params)  //调用职位列表接口函数
		})
		//  改动
		$(obj.keyword).focus(function() {    //关键字
			$(obj.keyword).val('');
		})
		$(obj.keyword).bind('keypress', function(event) {    //关键字
			if (event.keyCode == "13") {
				params.keyword = $(obj.keyword).val()
				$(obj.presentpage).text('1')
				getJobList(params)  //调用职位列表接口函数
			}
		})
		
			
	}	
})



		
			




