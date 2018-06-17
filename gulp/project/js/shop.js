class Shop{
	constructor(options){
		this.resultnum=options.resultnum;
		this.resultsum=options.resultsum;
		this.tb=options.tb;
		this.allnum=0;
		this.allsum=0;
		this.acheck=options.allcheck;
		this.delallc=options.delall;
		this.shopmain=options.shopmain;
		this.wrap=options.wrap;
		this.shopCar=options.shopCar;
		this.modalshow=options.modalshow;
		this.carsum=0;
		
		this.load();	
		
	}
	load(){
		var that=this;
		$.ajax({
			url:"http://localhost/gulp/project/data/goods.json"
		}).then(function(res){
			that.res=res;
			if($.cookie("carsum")){
				that.carsum=$.cookie("carsum");
			}
			that.shopCar.html(that.carsum)
			that.getCookie();
			that.display();
			that.remove();
			that.changenum();
			that.allcheck();
			that.delall();
			that.show();
			that.pop();
			
		});
		
	}
	
	getCookie(){
		this.goods=JSON.parse($.cookie("goods"));
	}
	display(){
		var that=this;
		var str="";
		if(this.goods){
			this.res.forEach(function(val1){
				that.goods.forEach(function(val2){
					if (val1.id == val2.id) {
						str +=`<tr data-id="${val1.id}">
									<td width="5%" align="left">
										 <input type="checkbox" name="check" class="check" value=""/>
									</td>
									<td width="10%"><img src="${val1.img}"/></td>
									<td align="left">${val1.info}</td>
									<td width="10%"><i>¥${val1.price}</i></td>
									<td width="10%"><p class="adddel"><b class="del">-</b><b class="good">${val2.num}</b><b class="add">+</b></p></td>
									<td width="10%"><i class="sum">¥${val1.price*val2.num}</i></td>
									<td width="5%"><span>删除</span></td>
								<tr>`
						
						that.allnum += val2.num;
						that.allsum += val1.price*val2.num
					}
				})
				
			})	
		}	
		
		
		this.tb.html(str);
		this.changeresult()
	}
	
	remove(){
		var that=this;
		this.tb.on("click","span",function(){
			var index=$(this).parent().parent().attr("data-id");
			for(var i=0;i<that.goods.length;i++){
				if (that.goods[i].id==parseInt(index)) {
					break;
				}
			}	
			that.carsum-=that.goods[i].num;
			that.allnum-=that.goods[i].num;
			that.allsum-=that.goods[i].price*that.goods[i].num;
			that.goods.splice(i,1);
			var str=JSON.stringify(that.goods);
			$.cookie("goods",str);	
			$(this).parent().parent().remove();
			that.changeresult()
			
			that.shopCar.html(that.carsum)
			$.cookie("carsum",that.carsum);
		})
		
		this.show()
		
	}
	
	
	changenum(){
		var that=this;
		this.tb.on("click",".del",function(){
			var index=$(this).parent().parent().parent().attr("data-id");
			for(var i=0;i<that.goods.length;i++){
				if (that.goods[i].id==parseInt(index)) {
					break;
				}
			}
//			that.goods[i].num--;
//			var mynum=that.goods[i].num;
//			var mysum=mynum*that.goods[i].price;
//			if(mynum<=0){
//				that.goods.splice(i,1);
//				that.changeresult()
//				$(this).parent().parent().parent().remove();
//			}
//			var str=JSON.stringify(that.goods);
//			$.cookie("goods",str);
//			$(this).parent().find(".good").html(mynum);
//			$(this).parent().parent().parent().find(".sum").html("¥"+mysum);
//			that.allnum--;
//			that.allsum-=that.goods[i].price;
//			that.changeresult()


				if(that.goods[i].num>1){
					that.carsum--;
					$.cookie("carsum",that.carsum);
					that.shopCar.html(that.carsum);
					that.goods[i].num--;
					var mynum=that.goods[i].num;
					var mysum=mynum*that.goods[i].price;
					var str=JSON.stringify(that.goods);
					$.cookie("goods",str);
					$(this).parent().find(".good").html(mynum);
					$(this).parent().parent().parent().find(".sum").html("¥"+mysum);
					that.allnum--;
					that.allsum-=that.goods[i].price;
					that.changeresult()
				}else{
					that.modalshow.css({
						display:"block"
					})
				}
		})
		
		
		
		this.tb.on("click",".add",function(){
			var index=$(this).parent().parent().parent().attr("data-id");
			for(var i=0;i<that.goods.length;i++){
				if (that.goods[i].id==parseInt(index)) {
					break;
				}
			}
			that.carsum++;
			$.cookie("carsum",that.carsum);
			that.shopCar.html(that.carsum);
			that.goods[i].num++;
			var mynum=that.goods[i].num;
			var mysum=mynum*that.goods[i].price;
			var str=JSON.stringify(that.goods);
			$.cookie("goods",str);
			$(this).parent().find(".good").html(mynum);
			$(this).parent().parent().parent().find(".sum").html("¥"+mysum);	
			that.allnum++;
			that.allsum+=parseInt(that.goods[i].price);
			that.changeresult()
		})
		this.show()
	}
	
	changeresult(){
		var that=this;
		that.resultnum.html(that.allnum)
		that.resultsum.html("¥"+that.allsum)
	}
	
	allcheck(){
		this.acheck.on("click",function(){

			if(this.checked){
				$(this).parent().parent().parent().parent().find("input").prop("checked",true);			
			}else{				
				$(this).parent().parent().parent().parent().find("input").prop("checked",false);
			}		
		})
		
	}
	
	
	delall(){
		var that=this;
		this.delallc.on("click",function(){
			if(that.acheck[0].checked){
				that.carsum=0;
				$.cookie("carsum",null);
				that.shopCar.html(that.carsum);
				$.cookie("goods",null)
				that.tb.html("");
				that.resultnum.html(0);
				that.resultsum.html(0);
			}
			
		})	
	}
	
	show(){
		if($.cookie("user")){
			if(this.goods){
				this.wrap.css({
					display:"none"
				})	
				this.shopmain.css({
				display:"block"
				})	
			}else{
				this.wrap.css({
				display:"block"
				}).find("#unloginTip").css({
					display:"none"
				})	
				
				this.shopmain.css({
					display:"none"
				})
				
			}
			
		}else{
			this.wrap.css({
				display:"block"
			}).find("#loginTip").css({
					display:"none"
				})	
			
			
			this.shopmain.css({
				display:"none"
				})	
			
		}
		
	}
	
	
	pop(){
		var that=this;
		this.modalshow.find("b").on("click",function(){
			that.modalshow.css({
				display:"none"
			})
			
		});
		this.modalshow.find("#makesure").on("click",function(){
			that.modalshow.css({
				display:"none"
			})
			
		});
	}
	
	
	
	
	
	
	
}


new Shop({
	tb:$("tbody"),
	resultnum:$(".resultnum"),
	resultsum:$(".resultsum"),
	allcheck:$(".allcheck"),
	delall:$(".delall"),
	shopmain:$(".shop-main"),
	wrap:$(".wrap"),
//	loginTip:$("#loginTip"),
//	unloginTip:$("#unloginTip")
	modalshow:$(".modalshow"),
	shopCar:$("#shopCar")
})
