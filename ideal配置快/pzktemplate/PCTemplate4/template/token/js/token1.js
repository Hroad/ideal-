params = {'ctmid':'2789'}; //ctmid必填，csid选填
coapi.getJobSchedule(params,function(data){
    //取到数据之后的操作
    console.log(data)
    var roadhtml = ''
        for (var i = 1; i < data.resultbody.schedulelist.length; i++) {
            var str111=data.resultbody.schedulelist[i].school
            var schoolName = str111.trim().split(" ")
            var date2 = data.resultbody.schedulelist[i].cdate
            var date22 = date2.trim().split("-")
            if(date22[1]<10 || date22[2]<10){
                var num1 = "0"+date22[1]
                var num2 = "0"+date22[2]
                roadhtml+= '<div class="road-list"><p class="school-name">'+schoolName[0]+'</p><p>'+num1+'月'+num2+'日('+data.resultbody.schedulelist[i].ctime+')</p><p>'+schoolName[1]+'</p></div>'
            }

        }

    $(".road").append(roadhtml)


}, params);

$('img').on('mousedown', function (e) {
    e.preventDefault()
})