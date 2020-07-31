
//行程数据
params = {'ctmid':'2789'}; //ctmid必填，csid选填
coapi.getJobSchedule(params,function(data){
    //取到数据之后的操作
    console.log(data)

    var roadhtml = ''
        for (var i = 0; i < data.resultbody.schedulelist.length; i++) {
        var str111=data.resultbody.schedulelist[i].school
        var schoolName = str111.trim().split(" ")
        var date2 = data.resultbody.schedulelist[i].cdate
        var date22 = date2.trim().split("-")
        roadhtml+= '<div class="road-content"><img src="images/connect.png" alt=""><div class="color-circle">'+(i+1)+'</div><div class="road-box"><p class="bold-text">'+schoolName[0]+'</p><p>'+date22[1]+'月'+date22[2]+'日('+data.resultbody.schedulelist[i].ctime+')<br>'+schoolName[1]+'</p></div></div>'
        }

    $(".road").append(roadhtml)

    var num1 = $(".road-content").length

    for(var k=0;k<$(".road-content").length;k++){
        var z = (k+1)%3
        if(z == 0){
            console.log(k)
            $(".road-content").eq(k).children("img").remove()
        }
    }

    $(".road-content").eq(num1-1).children("img").remove()


    for( k=0;k<num1/9;k++){
        $(".road-content").eq(0+(k*9)).children(".color-circle").css("background","#F29D6D");
        $(".road-content").eq(4+(k*9)).children(".color-circle").css("background","#F29D6D");
        $(".road-content").eq(8+(k*9)).children(".color-circle").css("background","#F29D6D");
        $(".road-content").eq(1+(k*9)).children(".color-circle").css("background","#4494D9");
        $(".road-content").eq(5+(k*9)).children(".color-circle").css("background","#4494D9");
        var e=6
        $(".road-content").eq(e+(k*9)).children(".color-circle").css("background","#4494D9");

    }

}, params);
