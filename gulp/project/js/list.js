class List{
	constructor(options){
		this.list=options.list;
		this.shopCar=options.shopCar;
		this.load()	
	}
	load(){
		var that=this;
		$.ajax({
			url:"http://localhost/gulp/project/data/goods.json"
		}).then(function(res){
			that.res=res;
			that.display();
			that.init();
		});
		
	}
	display(){
		var str="";
		for(var i=0;i<this.res.length;i++){
			str +=`<li data-id="${this.res[i].id}" data-price="${this.res[i].price}">
					<a href="http://localhost/gulp/project/item.html">
						<i><img src="${this.res[i].img}" /></i>
						
						<dl>
							<dt>${this.res[i].info}</dt>
							<dd>¥${this.res[i].price}</dd>
						</dl>
					</a>
					<span>加入购物车</span>
				</li>`;
		}
		
		this.list.html(str);
		this.shopCar.html($.cookie("carsum"))
	}
	
	init(){	
		var that=this;
		var carsum=$.cookie("carsum")
		if (!carsum) {
			carsum=0;
		}
		this.list.on("click","span",function(){
			carsum++
			if($.cookie("user")){
				var index=$(this).parent().attr("data-id");
				var price=$(this).parent().attr("data-price");
				var goods=[];
				if(!$.cookie("goods")){
					goods.push({
						"id":index,
						"num":1,
						"price":price,
					})
					var a=JSON.stringify(goods);
					that.shopCar.html("1")
					$.cookie("goods",a)	
				}else{
					goods = JSON.parse($.cookie("goods"));
					var onOff=true;
					
					for(var i=0;i<goods.length;i++){
						if (index==goods[i].id) {
							goods[i].num++;
							onOff =false;
						}
					}
					
					if (onOff) {
						goods.push({
							"id":index,
							"num":1,
							"price":price,
						})
					}
					
					var b=JSON.stringify(goods);
					$.cookie("goods",b);	
				}
				
				$.cookie("carsum",carsum);
				that.shopCar.html($.cookie("carsum"))
			}
		})
	}
}


new List({
	list:$(".main-list"),
	shopCar:$("#shopCar")
})
