 function rn(min,max){
          let n = Math.random()*(max-min)+min;
          return Math.floor(n);
       }
function rc(min,max){
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

  var s2=document.getElementById("s2");
       for(let i=0;i<40;i++){
         let c = document.createElementNS(
             "http://www.w3.org/2000/svg",
             "circle");
         c.setAttribute("r",String(rn(20,100)));
         c.setAttribute("cx",String(rn(0,2000)));
         c.setAttribute("cy",String(rn(0,500)));
         c.setAttribute("fill",rc(0,255));
         c.setAttribute("fill-opacity",Math.random());
		 s2.appendChild(c);
         //为当前圆绑点击事件
          c.onclick = function(){
           //为防止当前圆形再次被点击，应取消其事件监听
            this.onclick = null;
            let that = this;
           //启动定时器让当前圆变大，变淡，最后消失
          let timer = setInterval(function(){
             //变大
             let r = that.getAttribute("r");
             r *= 1.05;
             that.setAttribute("r",r);
             //变淡
             let p = that.getAttribute("fill-opacity");
             p *= 0.9;
             that.setAttribute("fill-opacity",p);
             if(p<0.0001){
               clearInterval(timer);
               s2.removeChild(that);//删除元素
              }
            },50);

          }
        }