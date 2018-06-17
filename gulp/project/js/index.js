$(".banner-slider").banner({
	items:$(".banner-slider img"),	
	left:$(".slider-left"),				
	right:$(".slider-right"),				
	list:$(".slider-list").children("li"),
	autoPlay:true	
})

class Loadmore{
	constructor(options){
		this.main=options.main;
		this.drop=options.drop;
		this.shopCar=options.shopCar;
		this.carsum=0;
	
		this.load();	
		
	}
	
	load(){
		var that=this;
		$.ajax({
			url:"http://localhost/gulp/project/data/muji.json"
		}).then(function(res){
			that.res=res;
			that.display();
			that.init();
			that.getcookie();
			
		});
		
	}
	
	getcookie(){
		this.carsum=$.cookie("carsum");
		this.shopCar.html(this.carsum)
	}
	
	
	
	display(){
		
		var a=$("<div class='layout'></div>");
		var str="";
		str=`<div class="layout-title">
				<p>${this.res[0].id}</p>
				<a href="#">查看全部 &gt;</a>
			</div>
			<ul >
				<li id="usual">
					<a href="#">
						<i><img src="${this.res[0].img}" alt="" /></i>
						<span>${this.res[0].info}</span>
					</a>
				</li>`
		
		
		for(var i=1;i<this.res.length;i++){
			str+=`<li>
						<a href="#">
							<i><img src="${this.res[i].img}" alt="" /></i>
							<dl>
								<dt>${this.res[i].info}</dt>
								<dd>¥${this.res[i].price}</dd>
							</dl>
						</a>
				</li>`
		}
		
		str+="</ul>";
		a.html(str)
		this.main.append(a);

	}
	
	init(){
		var that=this;
		var onOff=true;
		var index=0
				
		$(window).scroll(function(){
			if(index>=2){
				return null;
			}
			if (($(document).scrollTop()+$(window).height())>that.drop.offset().top) {
				onOff=true;
				if (onOff) {
					that.drop.css({
						display:"block"
					})
					clearTimeout(that.timer)
				 that.timer=setTimeout(()=>{
						that.display();
						that.drop.css({
						display:"none"
						})					
						index++
					},2000)
					onOff=false;					
				}		
			}
			
		})
		
		
		
	}
	
	
	
	



	
	
}


new Loadmore({
	main:$(".main"),
	drop:$(".drop"),
	shopCar:$("#shopCar")
})
