
(function(){

	$.ajax({  
             type: "GET",  
             url: "html/footer.html",   
             dataType: "text",  
             success: function(html){ 
 /*ajax("get","html/footer.html","","text")
    .then(html=>{*/
  document.getElementById("footer").innerHTML=html;
			}
  })
})();