
// 箭头点击事件
var speed = 50;
var maxNum = 0;
var minNum = -2000;

$(".left").click(function () {

    var left_num = parseFloat($(".road").css("left"));

    console.log(left_num)

    if (left_num >= maxNum) {
        return false
    }

    $(".road").css("left", (left_num + speed) + "px");

})

$(".right").click(function () {

    var left_num = parseFloat($(".road").css("left"));

    console.log(left_num)

    if (left_num < minNum) {

        return false

    }

    $(".road").css("left", (left_num - speed) + "px");

})


//行程数据

params = {'ctmid':'2789'}; //ctmid必填，csid选填
coapi.getJobSchedule(params,function(data){
    //取到数据之后的操作
    console.log(data)
    var roadhtml1 = ''
    var roadhtml2 = ''
        for (var i = 1; i < data.resultbody.schedulelist.length; i++) {
        var str111=data.resultbody.schedulelist[i].school
        var schoolName = str111.trim().split(" ")
        var date2 = data.resultbody.schedulelist[i].cdate
        var date22 = date2.trim().split("-")
            var j=(i+1)%2
            if(j==0){
                roadhtml2 += '<div class="road-text"><img src="images/up-line.png" alt=""><div class="rtext-box"><p class="bold-text">'+schoolName[0]+'</p><p>'+date22[1]+'月'+date22[2]+'日('+data.resultbody.schedulelist[i].ctime+')<br>'+schoolName[1]+'</p></div></div>'
                console.log(1111111)
            }else {
                roadhtml1 += '<div class="road-text"><div class="rtext-box"><p class="bold-text">'+schoolName[0]+'</p><p>'+date22[1]+'月'+date22[2]+'日('+data.resultbody.schedulelist[i].ctime+')<br>'+schoolName[1]+'</p></div><img src="images/down-line.png" alt=""></div>'
                console.log(2222222)
            }
    }

    $(".road-top").append(roadhtml1)
    $(".road-down").append(roadhtml2)
}, params);





