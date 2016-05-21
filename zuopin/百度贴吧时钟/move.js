'use strict'
function getStyle(obj,sName){
	return obj.currentStyle?obj.currentStyle[sName]:getComputedStyle(obj,false)[sName];
}
function startMove(obj,json,time,type,fn){
	var start={};
	var dis={};
	for(var name in json){
		start[name]=parseFloat(getStyle(obj,name));
		dis[name]=json[name]-start[name];
	}
	var count=Math.floor(time/30);
	var n=0;
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		n++;
		for(var name in json){
			switch(type){
				case 'linear':
				var cur=start[name]+dis[name]*n/count;
				break;
				case 'ease-in':
				var cur=start[name]+dis[name]*Math.pow(n/count,3);
				break;
				case 'ease-out':
				var cur=start[name]+dis[name]*(1-Math.pow(1-n/count,3));
				break;
			}
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name]=cur+'px';
			}
		}
		if(n==count){
			clearInterval(obj.timer);
			fn&&fn();
		}
	},30);
}












