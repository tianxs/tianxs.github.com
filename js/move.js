
           function getStyle(obj,name){
                return (obj.currentStyle || getComputedStyle(obj,false))[name];
            }
            function move(obj,json,openar){
                openar=openar||{};
                openar.time=openar.time|| 700;
                openar.type=openar.type|| 'ease-out';
                var n=0;  //计数器
                 var iCont=parseInt(openar.time/30);  // 分几次运动
                //var star=parseFloat(getStyle(obj,name)); //对象初始位置
               
                //var dis=iTargit-star; //运动距离
                var star={};
                var dis={};

                for(var name in json){
                    star[name]=parseFloat(getStyle(obj,name));
                    dis[name]=json[name]-star[name];
                }
                

                clearInterval(obj.timer);
                obj.timer=setInterval(function(){
                    n++;
                    
                    for(var name in json){
                        switch(openar.type){
                            case 'linear':
                            var a=n/iCont;
                            var niu=star[name]+dis[name]*a;
                            break;
                            case 'ease-in':
                            var a=n/iCont;
                            var niu=star[name]+dis[name]*a*a*a;
                            break;
                            case 'ease-out':
                            var a=1-n/iCont;
                            var niu=star[name]+dis[name]*(1-a*a*a);


                        }
                        
                        if(name=='opacity'){
                        obj.style.opacity=niu;
                        obj.style.filter='alpha(opacity:'+niu*100+')';

                        }else{
                        obj.style[name]=niu+'px';
                        }
                        if(n==iCont){
                        clearInterval(obj.timer);
                        openar.end && openar.end();
                        
                        }
                    }
                    
                },30)
                
            }