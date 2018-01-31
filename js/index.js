(function(){
	//轮播图加载
	$.ajax({  
             type: "GET",  
             url: "data/index.php",   
             dataType: "json",  
             success: function(output){ 
	/*ajax("get","data/index.php","")
		.then(function(output){*/
		  var nav=document.getElementById("imgNav");
		var html="<div>";
		//var honor=output.honor;
		for(var i=0;i<output.nav.length;i++){
			html+="<a href=''><img src='";
			html+=output.nav[i].nimg;
			html+="'></a>";
		};
		html+="<div>";
		console.log(output);
				nav.innerHTML=html;
	
	//热门推荐展示介绍-图
		html="";
		for(var i=0;i<output.hot.length;i++){
			html+="<div><div class='zhezhao'></div><img src='";
			html+=output.hot[i].himg;
			html+="' alt=''><h2>";
			html+=output.hot[i].hcity;
			html+="</h2><h3>";
			html+=output.hot[i].htittle;
			html+="</h3></div>";
		};
		 var hotJd=document.getElementById("hotJd");
			 hotJd.innerHTML=html;
			 hotJd.firstElementChild.className="show";
		//城市分店筛选
		var rooms=document.getElementById("cityClass");
		function cityCla(cityName){
			html="<div>";
			for(var i=0;i<output.rooms.length;i++){
				if(cityName!=""){
					if(output.rooms[i].city==cityName){
						html+="<figure><img src='";
						html+=output.rooms[i].rimg;
						html+="' alt=''/>";
						html+="<figcaption><h2>";
						html+=output.rooms[i].city;
						html+="</h2><p>";
						html+=output.rooms[i].intr;
						html+="</p>	</figcaption></figure>";
					};
				}else{
					
					html+="<figure><img src='";
					html+=output.rooms[i].rimg;
					html+="' alt=''/>";
					html+="<figcaption><h2>";
					html+=output.rooms[i].city;
					html+="</h2><p>";
					html+=output.rooms[i].intr;
					html+="</p></figcaption></figure>";
				}
			}
			html+="</div>";
			rooms.innerHTML=html;
		};
		cityCla("北京");
		//添加点击事件筛选目的城市分店
		var tjcity=document.getElementById("tuijian");
		tjcity.onclick=function(e){
			e.preventDefault();
			var that=e.target;
			if(that.nodeName=="A"){
				var a=that.getAttribute("href");
				cityCla(a);
			}
		}


	var timer;
	function topBnanner(WIDTH,id,trTime,arTime){
			  var topJsBox=document.getElementById(id);
			  $(topJsBox).css({"overflow":"hidden","width":WIDTH+"px"});
			 // topJsBox.style.overflow="hidden";
			  //topJsBox.style.width=WIDTH+"px";
			  var topLider=topJsBox.firstElementChild;
			  var topLiderImgs=document.querySelectorAll("#"+id+">div>a");
			  for(var i=0;i<topLiderImgs.length;i++){
					//topLiderImg.style.float="left";
					$(topLiderImgs[i]).css("float","left");
			  };
			  var nextSib=topJsBox.nextElementSibling;
			  //nextSib.style.transition="all .5s linear";
			  $(nextSib).css("transition","all .5s linear");
			  var len=topLiderImgs.length;
			  topLider.style.width=WIDTH*len+"px";
			  topLider.style.position="relative";
			  var i=0;
			  var nas=document.querySelectorAll("#nav>ul>li");
			function circleLi(){
				//图片动画设置
				topLider.style.left=-i*WIDTH+"px";		
				  if(i==len-1){
					  i=0;
					  setTimeout(function(){
						topLider.style.transition="all 0s";
						topLider.style.left=0;
						},trTime);
					}
					topLider.style.transition="all .5s linear";
					//小圆点动画设置
					nas[i].className="liShow";
					 if(i==2){
						nas[i].previousElementSibling.className="";
						nas[0].className="";
					}else if(i==0){
						nas[2].className="";nas[i].nextElementSibling.className="";
					}else if(i>0&&i<2){
						nas[i].previousElementSibling.className="";
						nas[2].className="";nas[i].nextElementSibling.className="";
					}
				 
			};
			  function play(){//轮播定时器启动方法
				clearInterval(timer);
				timer=null;
				timer=setInterval(function(){  
				  i++;
				  setTimeout(function(){nextSib.style.left=0;nextSib.style.transition="all .5s linear";},1000);
				  setTimeout(function(){nextSib.style.transition="";nextSib.style.left="100%";},3600);
				  topLider.style.transition="all "+trTime+"ms linear";
				   circleLi();     
				},arTime);
				
			  };	 
				function stop() {//停止轮播动画方法
					clearInterval(timer);
					timer=null;
				}

			  topLider.style.left=-i*WIDTH+"px"; 
			 
			  play();
				//小圆点点击动画
					for(let na_i=0;na_i<nas.length;na_i++){
						nas[na_i].onclick=function(){
						i=na_i;
						circleLi();
						topLider.style.left=-na_i*WIDTH+"px"; 
						nextSib.style.left="100%";
						nextSib.style.transition="";
						setTimeout(function(){nextSib.style.left=0;nextSib.style.transition="all .5s linear";},600);
						};
					};
					//鼠标移入移除方法
					document.getElementById("nav").onmouseout=play;
					document.getElementById("nav").onmouseover=stop;
					//轮播左右箭头点击动作
					var prev=document.querySelectorAll(".bannerRight");
					var next=document.querySelectorAll(".bannerLeft");
					prev[0].onclick=function(){
						if(i>0)
							i=i-1;
						else
							i=len-2;
						circleLi();
						setTimeout(function(){nextSib.style.left=0;nextSib.style.transition="all .3s linear";},600);
					};
					next[0].onclick=function(){
						if(i<len-2)
							i=i+1;
						else
							i=0;
						circleLi();
					}

			
		  };

		topBnanner(1960,"imgNav",1000,3500);

		//热门推荐
		$("#section>.box").on("click","div",function(){
			$(this).addClass("show");
			$(this).siblings("div").removeClass("show");
		});
		$("#section>.box").on("mouseover","div",function(){
			$(this).children("h3").css("marginTop","0");
			$(this).children(".zhezhao").addClass("zhezhaoShow");
		});
		$("#section>.box").on("mouseout","div",function(){
			$(this).children("h3").css("marginTop","-100%");
			$(this).children(".zhezhao").removeClass("zhezhaoShow");
		});
	}
	})

	//判断是不是IE浏览器
	/*(()=>{
		var userAgent=navigator.userAgent;//获取浏览器的userAgent字符串；
		if(userAgent.indexOf("compatible")>-1&&userAgent.indexOf("MSIE")>-1&&userAgent.indexOf("Opera")<=-1){
			//添加，去除事件  IE：element.attachEvent(“onclick”, function) element.detachEvent(“onclick”, function) 
			$("#section>.box>div")[0].attachEvent("onclick", function(){
				$(this).children("h3").css("marginTop","0");
				$(this).children(".zhezhao").addClass("zhezhaoShow");) 	
			}
			$("#section>.box>div")[0].attachEvent("onmouseover", function(){
				$(this).children("h3").css("marginTop","0");
				$(this).children(".zhezhao").addClass("zhezhaoShow");
			}
			$("#section>.box>div")[0].attachEvent("onmouseout", function(){
				$(this).children("h3").css("marginTop","-100%");
				$(this).children(".zhezhao").removeClass("zhezhaoShow");
			}
	})()*/
	
 })()                                                                      
