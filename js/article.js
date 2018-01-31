(function(){
	$.ajax({  
             type: "GET",  
             url: "html/article.html",   
             dataType: "text",  
             success: function(html){ 
  /*ajax("get","html/article.html","","text")
    .then(html=>{*/
  document.getElementById("article").innerHTML=html;
	}
  })
})();