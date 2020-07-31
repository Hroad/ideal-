
$('img').on('mousedown', function (e) {
    e.preventDefault()
})

function barnum(index){
	for(var i=0;i<=index;i++){
		$('.pro-barnum ul li').eq(i).children('span').addClass('pro-numactive')
	}	
	switch(index){
		case 0:
			$('.pro-icons ul li').eq(0).children('img').attr('src','images/pro_icon1_1.png')
			break;
		case 1:
			$('.pro-icons ul li').eq(0).children('img').attr('src','images/pro_icon1_1.png')
			$('.pro-icons ul li').eq(2).children('img').attr('src','images/pro_icon2_2.png')
			break;
		case 2:
			$('.pro-icons ul li').eq(0).children('img').attr('src','images/pro_icon1_1.png')
			$('.pro-icons ul li').eq(2).children('img').attr('src','images/pro_icon2_2.png')
			$('.pro-icons ul li').eq(4).children('img').attr('src','images/pro_icon3_3.png')
			break;
		case 3:
			$('.pro-icons ul li').eq(0).children('img').attr('src','images/pro_icon1_1.png')
			$('.pro-icons ul li').eq(2).children('img').attr('src','images/pro_icon2_2.png')
			$('.pro-icons ul li').eq(4).children('img').attr('src','images/pro_icon3_3.png')
			$('.pro-icons ul li').eq(6).children('img').attr('src','images/pro_icon4_4.png')
			break;
		case 4:
			$('.pro-icons ul li').eq(0).children('img').attr('src','images/pro_icon1_1.png')
			$('.pro-icons ul li').eq(2).children('img').attr('src','images/pro_icon2_2.png')
			$('.pro-icons ul li').eq(4).children('img').attr('src','images/pro_icon3_3.png')
			$('.pro-icons ul li').eq(6).children('img').attr('src','images/pro_icon4_4.png')
			$('.pro-icons ul li').eq(8).children('img').attr('src','images/pro_icon5_5.png')
			break;
		case 5:
			$('.pro-icons ul li').eq(0).children('img').attr('src','images/pro_icon1_1.png')
			$('.pro-icons ul li').eq(2).children('img').attr('src','images/pro_icon2_2.png')
			$('.pro-icons ul li').eq(4).children('img').attr('src','images/pro_icon3_3.png')
			$('.pro-icons ul li').eq(6).children('img').attr('src','images/pro_icon4_4.png')
			$('.pro-icons ul li').eq(8).children('img').attr('src','images/pro_icon5_5.png')
			$('.pro-icons ul li').eq(10).children('img').attr('src','images/pro_icon6_6.png')
			break;
	}
}
function barReset(resetindex){
	$('.pro-barnum ul li').children('span').removeClass('pro-numactive')
	for(var i=resetindex;i<=6;i++){
		$(".pro-icons ul li").eq(i*2).children("img").attr("src", "images/pro_icon" + (i+1) + ".png");
	}
}

$('.pro-icons ul li').click(function(){
	$('.pro-box').hide().eq(parseInt($(this).index()/2)).fadeIn()
	
	switch(parseInt($(this).index()/2)) {
	     case 0:
	        $('.pro-barjd').css({'width':'9%','transition':'width 1s'})
			setTimeout(function(){
				barReset(0)
				barnum(0)
			},500)
	        break;
	     case 1:
	       $('.pro-barjd').css({'width':'27%','transition':'width 1s'})
		   setTimeout(function(){
				barReset(1)
				barnum(1)
		   },500)
	        break;
		 case 2:
		     $('.pro-barjd').css({'width':'45%','transition':'width 1s'})
			setTimeout(function(){
				barReset(2)
				barnum(2)
			},500)
		    break;
		 case 3:
		    $('.pro-barjd').css({'width':'63%','transition':'width 1s'})
			
			setTimeout(function(){
				barReset(3)
				barnum(3)
			},500)
		    break;
		 case 4:
		     $('.pro-barjd').css({'width':'81%','transition':'width 1s'})
			 
			 setTimeout(function(){
			 	barReset(4)
			 	barnum(4)
			 },500)
		    break;
		 case 5:
		    $('.pro-barjd').css({'width':'100%','transition':'width 1s'})
			
			setTimeout(function(){
				barReset(5)
				barnum(5)
			},500)
		    break;
	     default:
	} 
	
	
})


