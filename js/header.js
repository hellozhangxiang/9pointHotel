/*(()=>{
  ajax("get","html/header.html","","text")
    .then(html=>{
  document.getElementById("header").innerHTML=html;
  })
})();*/

(function(){	
	$("#header").load("html/header.html",function(){
		//获得页头 用户搜索框输入的内容
		var $topInput=$("#top-input");
		if(window.sessionStorage["mid"]){
			var mname=window.sessionStorage["mname"];
			console.log(mname);
			var htl="";
			htl+="<span>欢迎回来:";
			htl+=mname;
			htl+="</span>";
			$("#headlogin").html(htl);
		};
		$topInput.parent().on("click","img,span",function(){	
			var str=$.trim($topInput.val());
				if(str!=""){
				window.location.href="./reservation.html?kw="+$topInput.val();}
				//location.search="kw="+$topInput.val();
		
				//pageLd();
			})
	})
			
})()
