$(function(){
	var jobdata = [
	{"jobname":"高级技术员1","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员2","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员3","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员4","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员5","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员6","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员7","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员8","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员9","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员10","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员11","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员12","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员13","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员14","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员15","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员16","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员17","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员18","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员19","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员20","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员21","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员22","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员23","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	{"jobname":"高级技术员24","record":"本科","city":"广东-深圳","date":"2020/4/23","link":"https://www.51job.com/"},
	]
	
	
	var jobHtml = ''
	for(var i=0;i<jobdata.length;i++){
		jobHtml += '<div class="jobs">'
		jobHtml += '<div class="jobwz">'
		jobHtml += '<div class="jobname">'+jobdata[i].jobname+'</div>'
		jobHtml += '<div class="jobwz-list">'
		jobHtml += '<span class="job-record">'+jobdata[i].record+'</span>'
		jobHtml += '<span class="job-city">'+jobdata[i].city+'</span>'
		jobHtml += '<span class="job-date">'+jobdata[i].date+'</span>'
		jobHtml += '</div>'
		jobHtml += '</div>'
		jobHtml += '<div class="job-btn"><a href="'+jobdata[i].link+'">查看更多</a></div>'
		jobHtml += '</div>'
	}
	$('.joblist').html(jobHtml)
})





