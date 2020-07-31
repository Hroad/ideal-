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


