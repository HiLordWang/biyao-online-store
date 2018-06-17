



$(".user-server").hover(function(){
	$(".myserver").css({display:"block"});
	$(".user-server .iconfont").css({transform: "rotateZ(180deg)"})
},function(){
	$(".myserver").css({display:"none"});
	$(".user-server .iconfont").css({transform: "rotateZ(0)"})
})
$(".user-app").hover(function(){
	$(".user-app>div").css({display:"block"})
	
},function(){
	$(".user-app>div").css({display:"none"})
})

$(".nav-p").hover(function(){
	$(".nav-p i").css({transform: "rotateZ(180deg)"})
	
})


$(".nav-p").on("mouseenter",function(){
	$(".nav-category .nav-l").css({
		display:"block"
	})
})

$(window).scroll(function(){
	if($("html,body").scrollTop()==0){
		$(".rightBar-top").stop().animate({
		opacity:0
	})
	}else{
		$(".rightBar-top").stop().animate({
		opacity:1
		})
	}


	if ($("html,body").scrollTop()>650) {
		$("#nav-clearfix").css({
			display:"block",
			
		})
	}else{
		$("#nav-clearfix").css({
			display:"none"
		})
	}
//	if ($("html,body").scrollTop()>790) {
//		$(".fixed-bar").stop().animate({
//			height:60	
//		},100)
//	}else{
//		$(".fixed-bar").stop().animate({
//			height:0
//		},100)
//	}

	if ($("html,body").scrollTop()>790) {
		$(".fixed-bar").css({
			display:"block"	
		})
	}else{
		$(".fixed-bar").css({
			display:"none"
		})
	}

	
})


$(".rightBar-top").on("click",function(){
	$("html,body").stop().animate({
		scrollTop:0
	})
})


$(".nav-category .nav-l").on("mouseleave",function(){
	$(".nav-category .nav-l").css({
		display:"none",
	});
	$(".nav-p i").css({transform: "rotateZ(0)"})	
})



$(".banner .nav-l").html($(".nav-category .nav-l").html())


$(".nav-main").on("mouseenter",function(){
	$(this).children("ul").css({
		display:"block"	
	}).end().children("p").css({
		background:"#818085"
	})
	
})
$(".nav-main").on("mouseleave",function(){
	$(this).children("ul").css({
		display:"none"	
	}).end().children("p").css({
		background:"none"
	})
})








$(".category-2 ul").children().hover(function(){
	$(".category-2 ul").children().stop().animate({width:80}).eq($(this).index()).stop().animate({width:620})
})



$(".rightBar-share").on("click",function(){
	$(".shareCon").css({display:"block"})
})
$(".shareCon p b").on("click",function(){
	$(".shareCon").css({display:"none"})
})


$(".section-view-head>p").on("click",function(){
	$(this).parent().children().removeClass().eq($(this).index()).addClass("view-active");
})


$(".left-head").hover(function(){
	$(".left-head-show").css({
		display:"block"
	})},function(){
		$(".left-head-show").css({
		display:"none"
	})
	}
)


$(".editor-picture ul li").on("click",function(){
	$(this).parent().children().removeClass().eq($(this).index()).addClass("choose").end().end().parent().children("p").find("img").attr("src", $(this).children("img")[0].src);

})


$(".editor-optometry").on("click",function(){
	$(".optometry").css({display:"block"})
})
$(".optometry p b").on("click",function(){
	$(".optometry").css({display:"none"})
})

var editorindex=0
$(".editor-return").on("click",function(){
	if (editorindex==$(".editor-model ul li").length-1) {
		editorindex=0
	} else{
		editorindex++
	}
	$(".editor-model ul li").css({
		display:"none"
	}).eq(editorindex).css({
		display:"block"
	})
	
})


$(".editor-reset").on("click",function(){
	editorindex=0;
	$(".editor-model ul li").css({
		display:"none"
	}).eq(editorindex).css({
		display:"block"
	})
	
})


$(".editor-toModel").on("click",function(){
	$(this).parent().parent().css({
		display:"none"
	}).parent().find(".editor-model").css({
		display:"block"
	})

	
})



$(".editor-toPic").on("click",function(){
	$(this).parent().css({
		display:"none"
	}).parent().find(".editor-picture").css({
		display:"block"
	})

	
})


$(".addcar").on("click",function(){
	$("html,body").stop().animate({
		scrollTop:0
	})
});



	var user=getCookie("user");
	var pass=getCookie("pass");
	if (user) {
		if (user.length>0 && pass.length>0) {
			$(".user-out").css({
				display:"none"
			}).parent().find(".user-center").css({
				display:"block"
			}).find("span").html(user)
		}
	}
	
	


$(".login-out").on("click",function(){
	
	$(".user-center").css({
		display:"none"
	}).parent().find(".user-out").css({
		display:"block"
	});

	deleteCookie("user");
	deleteCookie("pass");
	
})


