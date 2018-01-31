var name="",pno=0,pageSize=3;
function pageLd(){
		var kw=location.search.split("=")[1]||"";
		$.ajax({
		type:"GET",
		url:"./data/reservation.php",
		data:{pno:pno,pageSize:pageSize,kw:kw+name},
		success:function(data){
			var htmls="<p>搜索结果</p>";
			var dat=data.data;
			console.log(data);
			var len=dat.length;
			for(var i=0;i<dat.length;i++){
				var p=dat[i];
				htmls+="<ul><li><img src='";
				htmls+=p.rimg;
					htmls+="'><span>";
					htmls+=p.intr;
					htmls+="</span></li><li><p>人气</p><button>+</button><a>1</a><button>-</button></li><li><p><span>￥</span>";
					htmls+=p.price;
					htmls+="<span>起</span></p><a href='./myroom.html'>预定</a></li></ul>";
				/*htmls+=`<ul>
						<li>
							<img src="${p.rimg}">
							<span>${p.intr}</span>
						</li>
						<li>
							<p>人气</p>
							<button>+</button>
							<a>1</a>
							<button>-</button>
						</li>
						<li>
							<p><span>￥</span>${p.price}<span>起</span></p>
							<a href="./myroom.html">预定</a>
						</li>
					</ul>`;*/
			}
			if(len<1){
				htmls+="<h3>客官，没有您搜索的内容！</h3>"
			}
				htmls+="<span class=''>每页显示</span>";
					htmls+="<input type='text' class='pageSize btn btn-default' value="+len+" >";
					htmls+="<span class=''>条记录</span>";
					htmls+="<a href='' class='first_page btn btn-default'>首页</a>";
					htmls+="<a href='' class='pre btn btn-default'>上一页</a>";
					htmls+="<div style='display:inline-block' class='pagination pageNo'>";
				for(var i=1;i<=Math.ceil(data.pageCont/pageSize);i++){
					htmls+="<a href='' class='btn btn-default'>";
					htmls+=i;
					htmls+="</a>";
				};
					htmls+="</div><a href=''class='next btn btn-default'>下一页</a><a href='' class='last_page btn btn-default'>尾页</a>";
			
			$("#result").html(htmls);//动态生成酒店预定界面搜索结果
			/*$("#first_page").click(function(){
				pno=0;
				e.preventDefault();
					pageLd();
			});
			$("#last_page").click(function(e){
				//alert(Math.ceil((data.pageCont)/pageSize)-1);
				e.preventDefault();
				pno=Math.ceil((data.pageCont)/pageSize)-1;
				//console.log(pno);
					pageLd();
			});*/
				$("#result>a,#result>div>a").on("click",function(e){
					e.preventDefault();
					var $this=$(this);
					if($this.hasClass("first_page")){
						pno=0;
						//pageLd();
					}else if($this.hasClass("last_page")){
						pno=Math.ceil((data.pageCont)/pageSize)-1;
						//pageLd();
					}else if($this.parent("div").hasClass("pagination")){
						pno=parseInt($this.html())-1;
						//pageLd();
					}else if($this.hasClass("pre")){
						if(pno>0){pno-=1;}
					}else if($this.hasClass("next")){
						if(pno<Math.ceil((data.pageCont)/pageSize)-1){pno+=1;}
					}
					pageLd();
				});

		}
	})
	
}
pageLd();
(function(){
	$("#type>ul>li:first-child a,#position>ul>li:first-child a").css("color","red");
	$("#type>ul>li,#position>ul>li").on("click","a",function(e){
		e.preventDefault();
		$(this).css("color","red");
		$(this).parent().siblings().children("a").css("color","black");
		if($(this).attr("name")!=name){
			name=" "+$(this).attr("name");
			pageLd(pno=0,pageSize=3);
		}

	});
	/*$("#price>ul>li:firstchild").click(function(e){
		e.eventDefult();
		var tar=e.target;
		$.ajax({
			type:"GET",
			url:"",
			data:{price:tar}
		}).then(output=>{
			
		})


	})*/
	$("#type>ul").on("click","input",function(e){
		e.preventDefault();
		var tar=$(this);
		var $search=$("#top-input").val();
		tar.parent().siblings().chidren("a").css("color","black");
		tar.siblings().css("color","red");
		if(tar.siblings().html()!="不限"){
			if(!tar.siblings().html().indexOf(name)){
			name+=" "+$(this).siblings().html();
			pageLd(pno=0,pageSize=3);}
			//location="./reservation.html?kw="+$("#top-input").val()+tar.html();

		}

	});

})()