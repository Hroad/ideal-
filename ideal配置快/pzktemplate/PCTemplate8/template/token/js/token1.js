params = {
    'ctmid': '2789'
}; //ctmid必填，csid选填

var html = "";
coapi.getJobSchedule(params, function (data) {
    //取到数据之后的操作
    console.log(data)

    var width = data.resultbody.schedulelist.length;

    data.resultbody.schedulelist.forEach(function (item, index) {

        var month = item.cdate.split("-")[1];

        var day = item.cdate.split("-")[2];

        html += '<div class="s_box">' +

            '<div class="only_num">' + (index + 1) + '</div>' +

            '<div class="time_address">' + month + '月' + day + '日<br>（' + item.ctime + '）<br>' + item.schoolzone + '</div>' +

            '<div class="school_name_box">' +

            '<div class="school_name">' + item.school + '</div>' +

            '</div>' +

            '</div>';

    });

    $(".school_box").html(html);

    $(".school_box").css("width", width * 208 + "px");

    // 点击切换

    $(".left_arrow").click(function () {

        var left = parseInt($(".school_box").css("left"));

        console.log(left)

        if (left >= 0) {

            left = 0;

            return false

        }

        $(".school_box").css("left", left + 208 + "px");

    })

    $(".right_arrow").click(function () {

        var left = parseInt($(".school_box").css("left"));

        console.log(left)

        if (left <= -3120) {

            left = -3120;

        }

        $(".school_box").css("left", left - 208 + "px");

    })


}, params);