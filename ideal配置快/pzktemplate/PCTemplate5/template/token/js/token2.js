

$('img').on('mousedown', function (e) {
    e.preventDefault()
})

// 初始化展示

//行程数据
params = {'ctmid':'2789'}; //ctmid必填，csid选填
coapi.getJobSchedule(params,function(data){
    //取到数据之后的操作
    console.log(data)

    var roadhtml1 = ''
    var roadhtml2 = ''

    for (var i = 0; i < data.resultbody.schedulelist.length; i++) {
        var str111=data.resultbody.schedulelist[i].school
        var schoolName = str111.trim().split(" ")
        var date2 = data.resultbody.schedulelist[i].cdate
        var date22 = date2.trim().split("-")
        if(i%2 ==0){
            roadhtml1 +='<div class="road-content"><div class="road-adress"><img src="images/adress.png" alt=""><p>'+data.resultbody.schedulelist[i].city+'市</p></div><img src="images/blue-point.png" class="r-point"><div class="road-box"><p class="bold-text">'+schoolName[0]+'</p><p>'+date22[1]+'月'+date22[2]+'日('+data.resultbody.schedulelist[i].ctime+')<br>'+schoolName[1]+'</p></div><div class="clear"></div></div>'
        }else{
            roadhtml2 +='<div class="road-content"><div class="road-adress"><img src="images/adress.png" alt=""><p>'+data.resultbody.schedulelist[i].city+'市</p></div><img src="images/orange-point.png" class="l-point"><div class="road-box"><p class="bold-text">'+schoolName[0]+'</p><p>'+date22[1]+'月'+date22[2]+'日('+data.resultbody.schedulelist[i].ctime+')<br>'+schoolName[1]+'</p></div><div class="clear"></div></div>'
        }

    }

    $(".road-right").append(roadhtml1)
    $(".road-left").append(roadhtml2)



    var num1 = $(".road-right .road-content").length
    var num2 = $(".road-left .road-content").length

    for( k=0;k<num1/4;k++){
        $(".road-right .road-content").eq(0+(k*4)).children(".color-circle").attr("src","images/orange-point.png");

    }

    var num3 = 0
    for(num3 = 1;num3<$(".road-right .road-content").length;num3+=2){
        $(".road-right .road-content").eq(num3).children(".road-adress").css({"background":"url('images/orange-bg2.png')","background-size":"100% 100%"});
        $(".road-right .road-content").eq(num3).children(".r-point").attr("src","images/orange-point.png");
        $(".road-right .road-content").eq(num3).children(".road-box").css({"background":"url('images/orange-border2.png')","background-size":"100% 100%"});
    }
    for(num3 = 1;num3<$(".road-left .road-content").length;num3+=2){
        $(".road-left .road-content").eq(num3).children(".road-adress").css({"background":"url('images/blue-bg2.png')","background-size":"100% 100%"});
        $(".road-left .road-content").eq(num3).children(".r-point").attr("src","images/blue-point.png");
        $(".road-left .road-content").eq(num3).children(".road-box").css({"background":"url('images/blue-border.png')","background-size":"100% 100%"});

    }

}, params);
