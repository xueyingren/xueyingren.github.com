// JavaScript Document
function wufneg(oBox,active){
	var oPrev=oBox.children[0];
	var oNext=oBox.children[1];
	var oUl=oBox.getElementsByTagName('ul')[0];
	var aLi=oUl.children;
	var oOl=oBox.getElementsByTagName('ul')[1];
	var aBtn=oOl.children;
	var time=null;
	
	// oBox.onmouseover=function (){
	// 	oPrev.style.display='block';
	// 	oNext.style.display='block';
	// };
	// oBox.onmouseout=function (){
	// 	oPrev.style.display='none';
	// 	oNext.style.display='none';
	// };
	
	oUl.innerHTML+=oUl.innerHTML;
	oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
	var iNow=0;
	var w=oUl.offsetWidth/2;
	
	for(var i=0; i<aBtn.length; i++){
		(function (index){
			aBtn[i].onclick=function (){
				iNow=Math.floor(iNow/aBtn.length)*aBtn.length+index;
				tab();
			};
		})(i);
	}
	function tab(){
		for(var i=0; i<aBtn.length; i++){
			aBtn[i].className='';
		}
		if(iNow>0){
			aBtn[iNow%aBtn.length].className=active;
		}else{
			aBtn[(iNow%aBtn.length+aBtn.length)%aBtn.length].className=active;
		}
		document.title=-iNow*aLi[0].offsetWidth+'px';
		startMove(oUl,-iNow*aLi[0].offsetWidth);
	}
	oNext.onclick=function (){
		clearInterval(time);
		iNow++;
		tab();
		time=setInterval(function(){
			iNow++;
			tab();
		},1000)
	};
	oPrev.onclick=function (){
		clearInterval(time);
		iNow--;
		tab();
		time=setInterval(function(){
			iNow++;
			tab();
		},1000)
	};
	time=setInterval(function(){
			iNow++;
			tab();
		},1000)
	
	var left=0;
	function startMove(obj,iTarget){
		var start=left;
		var dis=iTarget-start;
		var count=Math.floor(500/30);
		var n=0;
		
		clearInterval(obj.timer);
		obj.timer=setInterval(function (){
			n++;
			
			var a=1-n/count;
			left=start+dis*(1-Math.pow(a,3));
			if(left<0){
				obj.style.left=left%w+'px';
			}else{
				obj.style.left=left%w-w+'px';
			}
			if(n==count){
				clearInterval(obj.timer);
			}
		},30);
	}
	}