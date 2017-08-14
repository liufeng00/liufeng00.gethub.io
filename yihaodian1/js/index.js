//1.送货地址
$(function(){
	$('#shipping_address').click(function() {
		$('.add').addClass('active').siblings().removeClass('active');
		$('#select').show();
	})
	$('#close').click(function() {
		$('#select').hide();
	})


//2.顶部导航——充值中心当鼠标到mouse上，让ha-menu显示出来(完成)
	$('.mouse').hover(function() {
		$(this).addClass('active').siblings().removeClass('active');
		$(".ha-menu").hide();
		$(this).find(".ha-menu").show();
	})
	$(".mouse").mouseleave(function(){
	 	$(".ha-menu").hide();
	});

//3.顶部购物车——鼠标移入没有商品提示显示出来
	$('#hd-shop-car').hover(function(){
		$('#tips').show();
		$(this).addClass('active');
	})
	$('#hd-shop-car').mouseleave(function(){
		 $('#tips').hide();
		 $(this).removeClass('active');
	});

//4.轮播图
	var len=$('#slide-list li').length;//获取图片数量
	//根据图片数量自动生成小圆点
	for (var i=1;i<=len;i++) {
		var li='<li></li>';
		$('#slide-btn').append(li);
	}
	//手动控制图片
	$('#slide-list li').eq(0).show();
	$('#slide-btn li').eq(0).addClass('dot-active');
	$('#slide-btn li').mouseover(function(){
		$(this).addClass('dot-active').siblings().removeClass('dot-active');
		var index=$(this).index();
		num=index;
		$('#slide-list li').eq(index).stop().show().siblings().stop().hide();
	})
	//自动化轮播
	var num=0;
	var t=setInterval(move,1000);
	function move () {//向右切换图片
		num++;
		if (num==len) {
			num=0;
		}
		$('#slide-btn li').eq(num).addClass('dot-active').siblings().removeClass('dot-active');
		$('#slide-list li').eq(num).show().siblings().hide();
	}
	function moveleft () {//向左切换图片
		num--;
		if (num==-1) {
			num=len-1;
		}
		$('#slide-btn li').eq(num).addClass('dot-active').siblings().removeClass('dot-active');
		$('#slide-list li').eq(num).show().siblings().hide();
	}
	
	$('.slide-show').hover(function(){//鼠标移入清除定时器，移出重新开启定时器
		clearInterval(t);
	},function(){
		t=setInterval(move,1000);
	})
	
	$('#prev').click(function(){//点击左键
		moveleft();
	})
	
	$('#next').click(function(){//点击右键
		move();
	})

//5.倒计时(完成)
	showTime () 
	function showTime () {
		var endtime=new Date('2017/8/30,18:00:00');//结束时间
		var nowtime=new Date();//当前时间
		var lefttime=(endtime-nowtime)/1000;//两个时间点相减之后得到毫秒时间,把毫秒转换成秒
		var day=parseInt(lefttime/(24*60*60));//总的秒数/一天的秒数=天
		var hour=parseInt(lefttime/(60*60)%24);
		var minutes=parseInt(lefttime/60%60);
		var seconds=parseInt(lefttime%60);
		//$('.timed span').html(hour+'时'+minutes+'分'+seconds+'秒');
		$('#hour').html(double(hour));
		$('#minutes').html(double(minutes));
		$('#seconds').html(double(seconds));
		if (lefttime<=0) {
			$('.timed').html('活动结束');
		}
		setInterval(showTime,1000);
	}
	
	function double(n){//判断时间是否为两位
		var m=n;
		n<10? m='0'+n : m;
		return m;
	}


//6.全球进口——当鼠标移到左边菜单上让其下面的子菜单显示出来
	var activeRow = null;
	var activeMenu = null;
	var timer = null;
	var mouseInsub = false;
	$('.hd_show_sort').on('mouseenter', function(e) {
		mouseInsub = true;
	})
	$('.hd_show_sort').on('mouseleave', function(e) {
		mouseInsub = false;
	})

	$('#test').on('mouseenter', function(e) {
		$('.hd_show_sort').eq($(this).index()).show();
	})
	$('#test').on('mouseleave', function(e) {
		$('.hd_show_sort').hide();
		if(activeRow) {
			activeRow.removeClass('active');
			activeRow = null;
		}
		if(activeMenu) {
			activeMenu.hide();
			activeMenu = null;
		}
	})
	$('#test').on('mouseenter', 'li', function(e) {
		if(!activeRow) {
			activeRow = $(e.target).addClass('active');
			activeMenu = $('#' + activeRow.data('id'));
			activeMenu.show();
			return;
		}
		if(timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(function() {
			if(mouseInsub) {
				return;
			}
//			activeRow.removeClass('active');
			activeMenu.hide();

			activeRow = $(e.target);
			activeRow.addClass('active');
			activeMenu = $('#' + activeRow.data('id'));
			activeMenu.show();
			timer = null;
		}, 50)

	})


//7.排行榜——鼠标移到菜单上切换下面的子菜单（完成）
	$('#floorRank_tab li').mousemove(function() {
		$('#floorRank_tab li').eq($(this).index()).addClass('listactive').siblings().removeClass('listactive');
		$('.listingmiage').removeClass('active');
		$('.listingmiage').eq($(this).index()).addClass('active');
	})

//8.右侧导航——当鼠标移到订单上，让我的订单显示出来
	$('#order span').mousemove(function() {
		$('#order p').show();
		$('#order span').css('background', '#FF5C4D');
		$('#order p').css('background', '#FF5C4D');
	})
	$('#order span').mouseout(function() {
		$('#order p').hide();
		$('#order span').css('background', '#3f3c3c');
		$('#order p').css('background', '#3f3c3c');
	})
	
//9.活色生鲜——酒水饮料
	$('#slider-line em').mouseover(function(){
		$(this).addClass('green').siblings().removeClass('green');
	})
//.右导航购物车——当鼠标移到购物车上，让购物车背景色变成	#FF5C4D
//$('.shop-car').mousemove(function(){
//	$('.shop-car a').css('background','#FF5C4D');
//})
})