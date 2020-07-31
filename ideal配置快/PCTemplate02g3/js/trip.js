var param = {
    ctmid: 2789, //会员ID
    //          csid: 120 //行程ID
    id: 0,//初始id
}
var tripList = $('.trip-list')
var tripName = $('.school-name')
var tripDate = $('.date span')
var tripPlace = $('.place span')



function getJobScheduletList() {

    coapi.getJobSchedule(param, function (data) {
        //取到数据之后的操作
        //              console.log('data', data.resultbody.schedulelist);
        console.log(data)
        var dataArr = data.resultbody.schedulelist;
        var temp = '';

        if (param.id == 0) {
            param.id = data.resultbody.schedulelist[0].id
        }

        for (var i = 0; i < dataArr.length; i++) {
            if (dataArr[i].id == param.id) {
                temp += '<li id="' + dataArr[i].id + '" class="trip-clcik trip-active">' + dataArr[i].school.split(' ')[0] + '</li>'
                tripName.html(dataArr[i].school.split(' ')[0])
                tripDate.html(dataArr[i].cdate + "&emsp;" + dataArr[i].ctime)
                tripPlace.html(dataArr[i].school.split(' ')[1])
            } else {
                temp += '<li id="' + dataArr[i].id + '" class="trip-clcik">' + dataArr[i].school.split(' ')[0] + '</li>'
            }

        }
        tripList.html(temp);

    }, param);
}

getJobScheduletList();



$(document).on('click', ".trip-clcik", function (e) {
    param.id = $(this).attr('id')
    getJobScheduletList();
})

// 左箭头
$(document).on('click', ".left_arrow", function (e) {

    console.log($(".node").length)

    $(".right_arrow").attr("src", "./images/right_arrow_on.png");

    $(".node").each(function (index, item) {

        // 是否包含活性样式
        if ($(item).hasClass("node_on")) {

            var index = $(item).index() * 1 - 1;

            console.log(index)

            // 是否到达临界值
            if (index <= 0) {

                index = 0;

                $(".left_arrow").attr("src", "./images/left_arrow.png");

            }

            // 内容盒子切换
            $(".content_box").hide();
            $(".content_box").eq(index).show();

            // 活性样式切换
            $(".node").eq(index).addClass("node_on").siblings(".node").removeClass("node_on");

            // 图片替换
            $(item).children("img").attr("src", "./images/icon_date.png")
            $(".node").eq(index).children("img").attr("src", "./images/icon_date_on.png");

            return false;

        }

    })
})

// 右箭头

$(document).on('click', ".right_arrow", function (e) {

    console.log($(".node").length)

    $(".left_arrow").attr("src", "./images/left_arrow_on.png");

    $(".node").each(function (index, item) {

        if ($(item).hasClass("node_on")) {

            var index = $(item).index() * 1 + 1;

            console.log(index)

            if (index >= $(".node").length - 1) {

                index = $(".node").length * 1 - 1;

                $(".right_arrow").attr("src", "./images/right_arrow.png");

            }

            // 内容盒子切换
            $(".content_box").hide();
            $(".content_box").eq(index).show();

            // 活性样式切换
            $(".node").eq(index).addClass("node_on").siblings(".node").removeClass("node_on");

            // 图片替换
            $(item).children("img").attr("src", "./images/icon_date.png")
            $(".node").eq(index).children("img").attr("src", "./images/icon_date_on.png");

            return false;

        }

    })

})

