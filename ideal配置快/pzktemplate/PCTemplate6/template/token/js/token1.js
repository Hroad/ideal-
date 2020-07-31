params = {'ctmid':'2789'}; //ctmid必填，csid选填
coapi.getJobSchedule(params,function(data){
    //取到数据之后的操作
    console.log(data)
    var str000=data.resultbody.schedulelist[0].school
    var schoolName0 = str000.trim().split(" ")
    var date = data.resultbody.schedulelist[0].cdate
    var date1 = date.trim().split("-")

    var roadhtml = '<div class="road-box"> <div class="road-content"> <p class="bold-text">'+schoolName0[0]+'</p><p>'+date1[1]+'月'+date1[2]+'日('+data.resultbody.schedulelist[0].ctime+')<br>'+schoolName0[1]+'</p></div> <img src="images/next-2.png" alt=""> <div class="clear"></div></div>'
    for (var i = 1; i < data.resultbody.schedulelist.length; i++) {
        var str111=data.resultbody.schedulelist[i].school
        var schoolName = str111.trim().split(" ")
        var date2 = data.resultbody.schedulelist[i].cdate
        var date22 = date2.trim().split("-")
        roadhtml+= '<div class="road-box"> <div class="road-content"> <p class="bold-text">'+schoolName[0]+'</p><p>'+date22[1]+'月'+date22[2]+'日('+data.resultbody.schedulelist[i].ctime+')<br>'+schoolName[1]+'</p></div> <img src="images/next-1.png" alt=""> <div class="clear"></div></div>'
    }

    $(".road").append(roadhtml)
    var num1 = $(".road-box").length
    for(var k=0;k<=$(".road-box").length;k++){
        var z = (k+1)%4
        //console.log(z,k)
        if(z == 0){
            console.log(k)
            $(".road-box").eq(k).children("img").remove()
        }
    }
    //var text11= $(".road-box").eq(num1-1).children("img").attr
     $(".road-box").eq(num1-1).children("img").remove()

}, params);