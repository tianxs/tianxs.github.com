function jsonp(json){
    //路径
    if(!json.url){
        return;
    }
    //关键词
    json.data=json.data || {};
    //函数名
    json.cbName=json.cbName || 'cb';
    //随机函数名
    var fnName='show'+Math.random();
    //取点
    fnName=fnName.replace('.','');
    //定义函数
    window[fnName]=function(json1){
        json.fnSucc && json.fnSucc(json1);

        oHead.removeChild(oS);
    };
    //{wd:a,cb:show} 转化成 'wd=a&cb=show';
    var arr=[];
    json.data[json.cbName]=fnName;

    for(var name in json.data){
        arr.push(name+'='+json.data[name]);
    }

    var oS=document.createElement('script');
    oS.src=json.url+'?'+arr.join('&');
    var oHead=document.getElementsByTagName('head')[0];
    oHead.appendChild(oS);

}





























