/* 
* @Author: anchen
* @Date:   2016-06-01 15:48:23
* @Last Modified by:   anchen
* @Last Modified time: 2016-06-27 19:00:14
*/

define(function(require,exports,module){
    var tween=require('move.js').move;
    exports.zuohua=function(){
        var oDiv=document.getElementById('banner');
        var oUl=oDiv.children[0];
        var aLi=oDiv.getElementsByTagName('li');
        var oLift=document.getElementById('left');
        var oRight=document.getElementById('right');
        var oDian=document.getElementById('dian');
        var aa=oDian.getElementsByTagName('a');
        var iNow=0;
        for(var i=0;i<aa.length;i++){
            aa[i].index=i;
            aa[i].onclick=function (){
               iNow =this.index
               tab();

            }
        }
        function tab(){
             for(var j=0;j<aLi.length;j++){
                    aa[j].className='';
                    
                }
                aa[iNow].className='on';
                //oUl.style.left=-900*iNow+'px';
                tween(oUl,{left:-900*iNow});
        }
        
        oLift.onclick=function(){
            iNow--;

            if(iNow==-1){
                    iNow=aLi.length-1;
            }
             tab();
            
        }
        oLift.onmouseover=oRight.onmouseover=function(){
            oLift.style.background='url(images/ad_ctr.png) no-repeat 0px 0px';
            oRight.style.background='url(images/ad_ctr.png) no-repeat 0px -90px';
        }
        oLift.onmouseout=oRight,onmouseout=function(){
            oLift.style.background='url(images/ad_ctr.png) no-repeat 0px -180px';
            oRight.style.background='url(images/ad_ctr.png) no-repeat 0px -270px';
        }
        oRight.onclick=next;
        function next(){
            iNow++;
            iNow%=aLi.length;
            
             tab();
            
        }   
        
        var timer=setInterval(next,3000);
        oDiv.onmouseover=function(){
            clearInterval(timer);
        }
        oDiv.onmouseout = function(){
            timer = setInterval(next,3000);
        }
    }
})