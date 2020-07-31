var dataList = [{
        "job_name": "风险管理",
        "city": "上海昆山",
        "job_need": "参与保险产品定价评估与精算模型的优化维护工作，包括但不限于负债及准备金评估、偿付能力量化风险监测分析、准备金相关指标的监测分析、车险定价模型维护优化等",
        "job_num": "本科及以上；",
        "job_join": "1、全日制本科及以上学历，精算、统计、数学、金融、保险等相关专业优先；<br>2、具备良好的人际沟通、组织协调能力和团队合作精神；<br>3、具备较强的责任感、上进心与抗压力；<br>4、具有创新意识与能力"
    },
    {
        "job_name": "市场研究",
        "city": "北京燕郊",
        "job_need": "参与保险产品定价评估与精算模型的优化维护工作，包括但不限于负债及准备金评估、偿付能力量化风险监测分析、准备金相关指标的监测分析、车险定价模型维护优化等",
        "job_num": "本科及以上；",
        "job_join": "1、全日制本科及以上学历，精算、统计、数学、金融、保险等相关专业优先；<br>2、具备良好的人际沟通、组织协调能力和团队合作精神；<br>3、具备较强的责任感、上进心与抗压力；<br>5、具有创新意识与能力"
    },
    {
        "job_name": "物流供应链管培生",
        "city": "湖北武汉",
        "job_need": "参与保险产品定价评估与精算模型的优化维护工作，包括但不限于负债及准备金评估、偿付能力量化风险监测分析、准备金相关指标的监测分析、车险定价模型维护优化等",
        "job_num": "本科及以上；",
        "job_join": "1、全日制本科及以上学历，精算、统计、数学、金融、保险等相关专业优先；<br>2、具备良好的人际沟通、组织协调能力和团队合作精神；<br>3、具备较强的责任感、上进心与抗压力；<br>6、具有创新意识与能力"
    },
    {
        "job_name": "再保管理",
        "city": "广东东莞",
        "job_need": "参与保险产品定价评估与精算模型的优化维护工作，包括但不限于负债及准备金评估、偿付能力量化风险监测分析、准备金相关指标的监测分析、车险定价模型维护优化等",
        "job_num": "本科及以上；",
        "job_join": "1、全日制本科及以上学历，精算、统计、数学、金融、保险等相关专业优先；<br>2、具备良好的人际沟通、组织协调能力和团队合作精神；<br>3、具备较强的责任感、上进心与抗压力；<br>7、具有创新意识与能力"
    },
    {
        "job_name": "市场研究",
        "city": "北京朝阳",
        "job_need": "参与保险产品定价评估与精算模型的优化维护工作，包括但不限于负债及准备金评估、偿付能力量化风险监测分析、准备金相关指标的监测分析、车险定价模型维护优化等",
        "job_num": "本科及以上；",
        "job_join": "1、全日制本科及以上学历，精算、统计、数学、金融、保险等相关专业优先；<br>2、具备良好的人际沟通、组织协调能力和团队合作精神；<br>3、具备较强的责任感、上进心与抗压力；<br>8、具有创新意识与能力"
    },
    {
        "job_name": "物流供应链管培生",
        "city": "上海昆山",
        "job_need": "参与保险产品定价评估与精算模型的优化维护工作，包括但不限于负债及准备金评估、偿付能力量化风险监测分析、准备金相关指标的监测分析、车险定价模型维护优化等",
        "job_num": "本科及以上；",
        "job_join": "1、全日制本科及以上学历，精算、统计、数学、金融、保险等相关专业优先；<br>2、具备良好的人际沟通、组织协调能力和团队合作精神；<br>3、具备较强的责任感、上进心与抗压力；<br>9、具有创新意识与能力"
    },
    {
        "job_name": "投资管理",
        "city": "湖北武汉",
        "job_need": "参与保险产品定价评估与精算模型的优化维护工作，包括但不限于负债及准备金评估、偿付能力量化风险监测分析、准备金相关指标的监测分析、车险定价模型维护优化等",
        "job_num": "本科及以上；",
        "job_join": "1、全日制本科及以上学历，精算、统计、数学、金融、保险等相关专业优先；<br>2、具备良好的人际沟通、组织协调能力和团队合作精神；<br>3、具备较强的责任感、上进心与抗压力；<br>10、具有创新意识与能力"
    },
    {
        "job_name": "再保管理",
        "city": "广东佛山",
        "job_need": "参与保险产品定价评估与精算模型的优化维护工作，包括但不限于负债及准备金评估、偿付能力量化风险监测分析、准备金相关指标的监测分析、车险定价模型维护优化等",
        "job_num": "本科及以上；",
        "job_join": "1、全日制本科及以上学历，精算、统计、数学、金融、保险等相关专业优先；<br>2、具备良好的人际沟通、组织协调能力和团队合作精神；<br>3、具备较强的责任感、上进心与抗压力；<br>11、具有创新意识与能力"
    },

];

var cityArr = [];

var nameArr = [];

// 初始化职位列表

var html = "";

dataList.forEach(function (item) {

    if (cityArr.indexOf(item.city) == -1) {

        cityArr.push(item.city);

    }

    if (nameArr.indexOf(item.job_name) == -1) {

        nameArr.push(item.job_name);

    }

    html += '<div class="jobs">' +

        '<h4 class="jobs_name">' + item.job_name + '</h4>' +

        '<h3 class="jobs_city">' + item.city + '</h3>' +

        '</div>';

});

$(".jobs_box").html(html);

// 初始化选择框

var str = '<option value="">职业</option>';

var str1 = '<option value="">城市</option>';

nameArr.forEach(function (item) {

    str += '<option value="' + item + '">' + item + '</option>';

})

cityArr.forEach(function (item) {

    str1 += '<option value="' + item + '">' + item + '</option>';

})

$(".job").html(str);

$(".city").html(str1);

// 简单筛选

$(".job").change(function () {

    var jobName = $(this).val();

    var jobCity = $(".city").val();

    // 职业存在
    if (jobName) {

        // 城市页存在选项
        if (jobCity) {

            $(".jobs").each(function (index, item) {

                var child1 = $(item).children(".jobs_name").text();

                var child2 = $(item).children(".jobs_city").text();

                jobName == child1 && jobCity == child2 ? $(item).show() : $(item).hide();

            })

            // 城市页不存在选项
        } else {

            $(".jobs").each(function (index, item) {

                var child1 = $(item).children(".jobs_name").text();

                jobName == child1 ? $(item).show() : $(item).hide();

            })

        }

        // 职业不存在
    } else {

        // 同时城市页不存在
        if (!jobCity) {

            // 释放所有职位
            $(".jobs").each(function (index, item) {

                $(item).show();

            })

            // 城市页存在  根据城市关键字匹配
        } else {


            $(".jobs").each(function (index, item) {

                var child2 = $(item).children(".jobs_city").text();

                jobCity == child2 ? $(item).show() : $(item).hide();

            })

        }

    }

})

$(".city").change(function () {

    var jobName = $(".job").val();

    var jobCity = $(this).val();

    // 城市页存在
    if (jobCity) {

        // 职页存在选项
        if (jobName) {

            $(".jobs").each(function (index, item) {

                var child1 = $(item).children(".jobs_name").text();

                var child2 = $(item).children(".jobs_city").text();

                jobName == child1 && jobCity == child2 ? $(item).show() : $(item).hide();

            })

            // 职页不存在选项
        } else {

            $(".jobs").each(function (index, item) {

                var child2 = $(item).children(".jobs_city").text();

                jobCity == child2 ? $(item).show() : $(item).hide();

            })

        }

    } else {

        // 同时职业不存在
        if (!jobName) {

            // 释放所有职位
            $(".jobs").each(function (index, item) {

                $(item).show();

            })

            // 职业存在  根据职业关键字匹配
        } else {


            $(".jobs").each(function (index, item) {

                var child1 = $(item).children(".jobs_name").text();

                jobName == child1 ? $(item).show() : $(item).hide();

            })

        }

    }

})

// 职位点击事件

$(".jobs").click(function () {

    // 取值 
    var nameKey = $(this).children(".jobs_name").text();

    var cityKey = $(this).children(".jobs_city").text();

    // 展示盒子显示
    $(".column-center").hide();

    $(".show_detail").show();

    dataList.forEach(function (item) {

        // 匹对关键字
        if (item.job_name == nameKey && item.city == cityKey) {

            $(".show_job_name").html(item.job_name);

            $(".bold_text").html(item.city);

            $(".mession_text").html(item.job_need);

            $(".num_text").html(item.job_num);

            $(".join_text").html(item.job_join);

            $(".t_span_active").html(item.city);
            
        }

    })

})

// 返回按钮
$(".back").click(function () {

    // 展示列表盒子
    $(".column-center").show();

    $(".show_detail").hide();

})