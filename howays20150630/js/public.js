
$(document).ready(function(){
	$(".youxiang").click(function(){
		$(".tancB").fadeIn();
	});
	$(".paynow").click(function(){
		$(".tancB").fadeIn();
	});
	$(".closeA").click(function(){
		$(".tancB").fadeOut();
	});
	$(".Tru").click(function(){
		$(".tancB").fadeIn();
	});
	$(".like").click(function(){
		$(this).addClass("active");
	});
    createRightWindow();
    $(window).resize(
    	function () {
        setRightWindow();
    });
    var a = window.navigator.userAgent; 
	 if(a.indexOf("Windows NT")>-1 || a.indexOf("Macintosh")>-1){
		 $(".dropdown").mouseover(function(){
			$(".dropdown").removeClass("open").prop('aria-expanded', 'false');
			$(this).addClass("open").prop('aria-expanded', 'true');
		});	
		 $(".dropdown").mouseout(function(){
		 	$(this).removeClass("open").prop('aria-expanded', 'false');
		 })
	}
	 RightHide();
	 $(document).scroll(function(){
	 	RightHide();	});	$(".weixinErwei>a").hover(
	    	function () {
	    	    $(".erweima").show();
	    	},
	    	function () {
	    	    $(".erweima").hide();
	    	}
	    )

})

function pageScroll(){     
		  //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）    
		  window.scrollBy(0,-100);    
		  //延时递归调用，模拟滚动向上效果    
		  scrolldelay = setTimeout('pageScroll()',10);    
		  //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值    
		  var sTop=$(document).scrollTop()+$("body").scrollTop();    
		  //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）    
		  if(sTop==0) clearTimeout(scrolldelay);
}
function createRightWindow() {
	var strAttr=[
				'<div id="rightFixWindow">',
				'<a href="javascript:;" onclick="pageScroll()" class="topa"><span></span></a>',
				'</div>'
				]
	var str=strAttr.join("");
	$("body").append(str);
    setRightWindow();
}

function setRightWindow() {
    var w = $(window).width();
    if (w >= 1200) {
        $("#rightFixWindow").css("margin-left", 550);
    } else {
        $("#rightFixWindow").css("margin-left", w / 2 - 100);
    }
}

function RightHide(){
    var topN = $(document).scrollTop() + $("body").scrollTop();
	if(topN>400){
    	$("#rightFixWindow").fadeIn();
    }else{
    	$("#rightFixWindow").fadeOut();
    }
    
    
    
}
