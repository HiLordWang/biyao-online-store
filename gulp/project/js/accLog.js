
	var ouserName=document.getElementById("userName");
	var ophoneCode=document.getElementById("phoneCode");
	var opassword=document.getElementById("password");
	var orepeatPassword=document.getElementById("repeatPassword");
	var ocheckbtn=document.getElementById("checkbtn");
	var oaccbtn=document.getElementById("accbtn");




	ouserName.onblur=function(){
		var reg = /^1[3-9]\d{9}$/;
		if(this.value==""){
			this.nextSibling.innerHTML=("请输入手机号");
			this.style.borderColor="#f49f26";
			return null;
		}
		if(reg.test(this.value)){
			this.nextSibling.innerHTML=("");
		}else{
			this.nextSibling.innerHTML=("手机号格式错误");
			this.style.borderColor="#f49f26";
		}				
	}
	ophoneCode.onblur=function(){
		var reg = /^\d{6}$/;
		if(this.value==""){
			this.nextSibling.innerHTML=("请输入短信验证码");
			this.style.borderColor="#f49f26";
			return null;
		}
		if(reg.test(this.value)){
			this.nextSibling.innerHTML=("");
			this.style.borderColor="#e8e8e8";
		}else{
			this.nextSibling.innerHTML=("手机验证码格式错误");
			this.style.borderColor="#f49f26";
		}				
	}
	
	opassword.onblur = function(){
		var a=0;
		var b=0;
		var c=0;
		if(this.value==""){
				this.nextSibling.innerHTML="请输入登录密码";
				this.style.borderColor="#f49f26";
				return null;
			}

			var reg1=/^.{6,12}$/;
			if(!reg1.test(this.value)){
				this.nextSibling.innerHTML=("请输入6-32位字符，需字母数字符号两种以上组合");
				this.style.borderColor="#f49f26";
				return null;
			};
			var reg2=/\d+/g;
			if(reg2.test(this.value)){
				a=1;
			};
			var reg3=/[a-z]+/gi
			if(reg3.test(this.value)){
				b=1;
			};
			var reg4=/[^0-9a-zA-Z]+/g
			if(reg4.test(this.value)){
				c=1;
			};
			var x=a+b+c;
			if(x<2){
				this.nextSibling.innerHTML=("请输入6-32位字符，需字母数字符号两种以上组合");
				this.style.borderColor="#f49f26";
			}else{
				this.nextSibling.innerHTML=("");
				this.style.borderColor="#e8e8e8";
			};
			
		
		
	}
	
	orepeatPassword.onblur = function(){
		if(this.value===opassword.value){
			this.nextSibling.innerHTML="";
			this.style.borderColor="#e8e8e8";
		}else{
			this.nextSibling.innerHTML="两次密码不一致";
			this.style.borderColor="#f49f26";
		}
	}

//	oaccbtn.onclick=function(){
//		if(!ocheckbtn.checked){
//			alert("ヽ(●-`Д´-)ノ同意服务协议 ") 
//			return null;
//		}
//		
//		
//	}
	
	$(oaccbtn).click(function(){
		if(!ocheckbtn.checked){
			alert("ヽ(●-`Д´-)ノ同意服务协议 ") 
			return null;
		}
			$.ajax({
				type:"post",
				url:"http://localhost/gulp/project/data/register.php",
				data:{
					user:$(ouserName).val(),
					pass:$(opassword).val()
				},
				async:true
			})
		})
		


