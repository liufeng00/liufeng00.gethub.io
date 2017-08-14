function demandScroll (obj,start){
	var end = 0;
	if (start == 0) {
		end = -43
	}else if(start == 43){
		end = 0;
	}
	obj.delay(1000).animate({'top': end},1000,'linear',function(){
		if (end == -43) {
			obj.css('top','43px');
			end = 43;
		}
		demandScroll(obj,end);
	});
}
function changeFa (index){
	var faOp = 0;
	$('.facilitator .fa-list').eq(index).siblings('.fa-list').addClass('hide')
	$('.facilitator .fa-list').eq(index).removeClass('hide');
	$('.facilitator .fa-list').eq(index).css('opacity',0);
	var timer = setInterval(function(){
			faOp+=0.04;
			$('.facilitator .fa-list').eq(index).css('opacity',faOp);
			if (faOp>=1) {
				clearInterval(timer);
			}
		},10)
}
function aChange(){
	autoChange = setInterval(function(){
		autoIndex = (++autoIndex)%3;
		$('.facilitator .fa-tit .sub-tit').eq(autoIndex).css({'border-bottom-color':'#ff6600','color':'#ff6600'});
		$('.facilitator .fa-tit .sub-tit').eq(autoIndex).siblings().css({'border-bottom-color':'#e8e8e8','color':'#999'});
		changeFa(autoIndex)
	},10000)
}
function changeFaDemand (index){
	var faOp = 0;
//	$('.demand .de-list').eq(index).siblings('.de-list').addClass('hide')
	$('.demand .de-list').eq(index).removeClass('hide');
	$('.demand .de-list').eq(index).css('opacity',0);
	var timer = setInterval(function(){
			faOp+=0.04;
			$('.demand .de-list').eq(index).siblings('.de-list').css('opacity',1-faOp);
			$('.demand .de-list').eq(index).css('opacity',faOp);
			if (faOp>=1) {
				$('.demand .de-list').eq(index).siblings('.de-list').addClass('hide')
				clearInterval(timer);
			}
		},10)
}
function aChangeDemand(){
	autoChangeDemand = setInterval(function(){
		autoIndexDemand = (++autoIndexDemand)%2;
		$('.demand .de-tit .sub-tit').eq(autoIndexDemand).css({'border-bottom-color':'#ff6600','color':'#ff6600'});
		$('.demand .de-tit .sub-tit').eq(autoIndexDemand).siblings().css({'border-bottom-color':'#e8e8e8','color':'#999'});
		changeFaDemand(autoIndexDemand)
	},10000)
}