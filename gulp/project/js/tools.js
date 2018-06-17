//格式化日期:
		function myDate(){
			var d = new Date();
			var y = d.getFullYear();
			var m1 = d.getMonth();
			var mydate = d.getDate();
			var day = d.getDay()
			var h = d.getHours()
			var m2 = d.getMinutes()
			var s = d.getSeconds()
			switch(day){
				case 0:day = "星期日";break;
				case 1:day = "星期一";break;
				case 2:day = "星期二";break;
				case 3:day = "星期三";break;
				case 4:day = "星期四";break;
				case 5:day = "星期五";break;
				case 6:day = "星期六";break;
			}
			return y+"年"+zero(m1+1)+"月"+zero(mydate)+"日 "+day+" "+zero(h)+":"+zero(m2)+":"+zero(s);
		}



//补零:
		function zero(n){
			if(n<10 || n.length<2){
				return "0"+n;
			}else{
				return n;
			}
		}

//		cookie	设置、获取与删除
		function setCookie(key,value,num){
			var mydate=new Date();
			mydate.setDate(mydate.getDate()+num)
			document.cookie=key+"="+value+";expires="+mydate;		
		}
	
		
		function getCookie(key){			
			var astr=document.cookie.split("; ");
			for( var i=0;i<astr.length;i++){
			  var astr2=astr[i].split("=");
				if(astr2[0]==key){
					return astr2[1];
				}	
			}
			return null;
		}
		
		
		
		function deleteCookie(key){			
			setCookie(key,1,-1)			
		}		
		
		
		//阻止事件冒泡
		function stopBubble(a){
			if(a.stopPropagation){
				a.stopPropagation()
			}else{
				a.cancelBubble = true;
			}
		}
		

//		封装事件委托
//		将事件委托中的this指向当前点击的元素,而不是绑定事件的元素或者window
		function eventEnt(children,callback){
			return function(eve){
				var e = eve || window.event;
				var target = e.target || e.srcElement;
				for(var i=0;i<children.length;i++){
					if(children[i] == target){
						if(callback) callback.bind(target)();
					}
				}
			}
		}
	
//	获取非行内样式（兼容问题）

		function getStyle(obj,attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr]
			}else{
				return getComputedStyle(obj,false)[attr]
			}
		}
		
		//阻止默认事件
		function stopDefault(b){
			if(b.preventDefault){
				b.preventDefault()
			}else{
				b.returnValue = false;
			}
		}
		
//  链式运动

	function sport(ele,obj,fn){
		clearInterval(ele.timer);	
		ele.timer=setInterval(function(){
			var onOff=true;
			for(var attr in obj){			
				if(attr=="opacity"){
					var iNow=getStyle(ele,attr)*100					
				}else{
					var iNow=parseInt( getStyle(ele,attr))
				}
					var speed=(obj[attr]-iNow)/7
				if(speed<0){
					speed=Math.floor(speed)
				}else{
					speed=Math.ceil(speed)
				}
				if(!(obj[attr]-iNow==0)){
					onOff=false;
				}
				if(attr=="opacity"){
					iNow+=speed;
					ele.style.opacity=iNow/100;		
				}else{
					ele.style[attr]=iNow+speed+"px"
				}		
											
			}
			if(onOff){
				clearInterval(ele.timer)
					if(fn){
						fn()
					}						
			}				
		},30)
		
	}
	

//		removeE(obox,'click',fn)
//		DOM2级绑定事件
//		事件监听方式绑定事件
		var myeve={
			addE: function(obj,myevent,fn){
			if(obj.addEventListener){
			obj.addEventListener(myevent,fn)
			}else if(obj.attachEvent){
				obj.attachEvent("on"+myevent,fn)
			}else{
				obj["on"+myevent]=fn;
			}	
		},		
			removeE: function(obj,myevent,fn){
			if (obj.addEventListener) {
				obj.removeEventListener(myevent, fn)
			} else if(obj.attachEvent){
				obj.detachEvent("on"+myevent,fn)
			}else{
				obj["on"+myevent]=null;
			}	
			}
		
		}
		
