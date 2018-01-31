 //页头画布
  var can=document.getElementById("canva");
  var canWid=can.width=document.body.scrollWidth;
	var ctx=can.getContext("2d");
		ctx.textAlign="left";
		ctx.textBaseline="top";
	function palo(){	
		ctx.lineWidth=2;
		ctx.font="bold 44px arial";
		ctx.strokeStyle=colo(80,255);
		ctx.strokeText("欢迎登录九点！",posit(5,canWid-200),posit(10,50));
		setTimeout(function(){ctx.clearRect(0,0,canWid,100)},1500);
	}
	palo();
	var timer=setInterval(palo,1600);
	function img_click(){
		ctx.clearRect(0,0,canWid,100);
	}
	//随机颜色
	function colo(min,max){
		var r=Math.floor(Math.random()*(max-min+1)+min);
		var g=Math.floor(Math.random()*(max-min+1)+min);
		var b=Math.floor(Math.random()*(max-min+1)+min);
		var result="rgb(";
		result+=r;
		result+=",";
		result+=g;
		result+=",";
		result+=b;
		result+=")";
		return result;
	}
	//随机位置
	function posit(min,max){
		return Math.floor(Math.random()*(max-min+1)+min)
	}
	//登录、注册转换
	$(".rl").on("click",function(e){
		e.preventDefault();
		$(this).parent().parent().parent().addClass("hid");
		$(this).parent().parent().parent().siblings(".change").removeClass("hid");
	});

//登录界面
var $uname,$upwd,$email,$phone,$runame,$rupwd;
function vali($this,minlen,maxlen,msg){
  //获得当前元素的内容val
  var val=$this.val();
  val=val.replace(/\s+/g,"");
  //找到当前元素的下一个兄弟$span
  var $span=$this.parent().next();
  //如果val的长度>=3且<=9
  if(val.length>=minlen&&val.length<=maxlen){
    //设置$span的内容为"<img src='img/ok.png'>"
    $span.html("<img src='img/ok.png'>");
    return true;
  }else{//否则
    //设置$span的内容为
    $span.html(msg);
    return false;
  }
};
//设置账户失去焦点验证格式
$("#name").blur(function(){
		vali($(this),3,9,"用户名介于3~9位");
	});
//设置密码失去焦点验证格式
$("#upwd").blur(function(){
  vali($(this),6,8,"密码介于6~8位")
});
//给提交按钮利用AJAX绑定单击事件
$("#login .button").click(function(){
	$uname=$("#name");$upwd=$("#upwd");
  var rname=
    vali($uname,3,9,"用户名介于3~9位");
  //调用vali验证$upwd，将结果保存在rpwd中
  var rpwd=
    vali($upwd,6,8,"密码介于6~8位");
  //如果rname和rpwd不都为true
  if(!(rname&&rpwd)){
    return false;
  }else{
		$.ajax({
		type:"POST",
		url:"./data/login.php",
		data:{name:$uname.val(),upwd:$upwd.val()},
		success:function(data){
				/*if(data.code==(-2))//也可以选择在PHP中验证账户密码格式
					$("#login :text").attr("placeholder",data.msg);
				else if(data.code==(-1))
					$("#login :password").attr("placeholder",data.msg);
				else if(data.code==0)
					alert(data.msg);
				else if(data.code==1){*/
					window.sessionStorage["mid"]=parseInt(data.mid);
					window.sessionStorage["mname"]=data.mname;
					$("div.zhezhao").css("zIndex","10");
					var i=3;
					setInterval(function(){
						$("div.zhezhao>div").html(data.msg+i+"秒后自动跳到首页！");
						i--;
						if(i<0){location.href="./index.html";}
						},1000);
					
					//alert(data.msg);
					
				/*}*/
			}
		})
  }
});
//注册面设置
$("#register .button").click(function(){
	$runame=$("#rname").val();
	$rupwd=$("#rupwd").val();
	$email=$("#email").val();
	$phone=$("#phone").val();
	$.ajax({
	type:"POST",
	url:"./data/register.php",
	data:{runame:$runame,rupwd:$rupwd,email:$email,phone:$phone},
	success:function(data){
			if(data.code==0)
				$(".msg>h3").html(data.msg).css("color","red");
			else if(data.code==(-1))
				$(".msg>h3").html(data.msg).css("color","red");
			else if(data.code==(-2))
				$(".msg>h3").html(data.msg).css("color","red");
			else if(data.code==-3)
				$(".msg>h3").html(data.msg).css("color","red");
			else if(data.code==1){
				$(".msg>h3").html(data.msg).css("color","green");
			}
			$("div.msg").removeClass("hid").css("zIndex","10");
			var timer=setTimeout(function(){
				$("div.msg").addClass("hid").css("zIndex","0");
				if(data.code==1){
					$("#register").addClass("hid");
					$("#login").removeClass("hid");
					//清空输入框
					$("#rname").val("");
					$("#rupwd").val("");
					$("#email").val("");
					$("#phone").val("");
				};
				clearInterval(timer);
			},1000);
		}
	})
})

