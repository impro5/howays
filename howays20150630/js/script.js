$(function(){	
	function chiCun(){
		var BoxB=$(".BoxB").width();
		 $(".lunBox ul").width(BoxB);
		 var geS=$(".lunBox ul").length;
		 $(".lunBox").width(BoxB*geS);
		 var lunBox=$(".lunBox").height();
		 $(".BoxB").height(lunBox);
		
	}
	chiCun();
	$(window).resize(function(){
		chiCun();
	});
	var 
		 index = 0 ;
		Swidth = $(".lunBox ul").width();
		 timer = null ;
		   len = $(".Div1_title span a").length ; 
		
		function NextPage()
		{	
			if(index>$(".lunBox ul").length-1)
			{
				index = 0 ;
			}
			$(".jpF li").eq(index).children("a").addClass("active");
			$(".jpF li").eq(index).siblings("li").children("a").removeClass("active");
			$(".lunBox").stop(true, false).animate({left: -index*Swidth+"px"},600)		
		}
		
//		function PrevPage()
//		{	
//			if(index<0)
//			{
//				index = $(".lunBox ul").length-1;
//			}
//			$(".Div1_title span a").removeClass("Div1_title_a1").eq(index).addClass("Div1_title_a1");
//			$(".lunBox").stop(true, false).animate({left: -index*Swidth+"px"},600)		
//		}
//		
//		$(".Div1_title span a").each(function(a){
//          $(this).mouseover(function(){
//				index = a ;
//				NextPage();
//			});
//      });

		$(".jpF li").click(function(){
			 index=$(this).index();
			 $(".jpF li").eq(index).children("a").addClass("active");
			 $(".jpF li").eq(index).siblings("li").children("a").removeClass("active");
			 $(".lunBox").stop(true, false).animate({left: -index*Swidth+"px"},600)	
		});
//		//上一页
//		$(".Div1_prev img").click(function(){
//			 index-- ;
//			 PrevPage();
//		});
		//自动滚动
		var timer = setInterval(function(){
				index++ ;
				NextPage();
				chiCun();
			},4000);
			
		$(".lunBox ul").mouseover(function(){
			clearInterval(timer);
		});
		$(".lunBox ul").mouseleave(function(){
			timer = setInterval(function(){
				index++ ;
				NextPage();
				chiCun();
			},4000);	
		});
			
})//建站套餐
