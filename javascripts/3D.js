'use strict'
window.onload=function(){
	var oUl = document.querySelector('.xinxi');
	var aLi = oUl.children;
	var oBox = document.querySelector('.box');
	var oBoC = oBox.children;
	var oSho = document.querySelector('#sho');
	var oShC = oSho.children;
	function sho(){
		for(var i=0; i<oShC.length; i++){
			oShC[i].style.opacity = 0;
			oShC[i].style.zIndex = 0;
			oShC[i].style.WebkitTransform = 'scale(1,1) translate(0,100px)';
			oShC[i].style.MozTransform = 'scale(1,1) translate(0,100px)';
			oShC[i].style.MskitTransform = 'scale(1,1) translate(0,100px)';
			oShC[i].style.transform = 'scale(1,1) translate(0,100px)';
			oBoC[i].children[0].style.opacity = 1;

		}
	}
	var bOk1 = false;
	aLi[0].onclick=function(){
		if(bOk1)return;
		bOk1 = true;
		iNow = 0;
		// setTimeout(function(){
		// 	oShs.style.opacity = 0;
		// 	oShs.style.WebkitTransform = 'scale(1,1) translate(0,100px)';
		// },1);

		setTimeout(sho,1);
	
		setTimeout(function(){
		oBox.style.WebkitTransform='perspective(800px) rotateY(0deg) rotateX(0deg)';
		oBox.style.MozTransform='perspective(800px) rotateY(0deg) rotateX(0deg)';
		oBox.style.MsTransform='perspective(800px) rotateY(0deg) rotateX(0deg)';
		oBox.style.transform='perspective(800px) rotateY(0deg) rotateX(0deg)';
		},1000);
		setTimeout(function(){
			oBoC[0].children[0].style.opacity = 0;
			oShC[0].style.opacity = 1;
			oShC[0].style.zIndex = 100;
			oShC[0].style.WebkitTransform = 'scale(6,3) translate(1px,68px)';
			oShC[0].style.MozTransform = 'scale(6,3) translate(1px,68px)';
			oShC[0].style.MsTransform = 'scale(6,3) translate(1px,68px)';
			oShC[0].style.transform = 'scale(6,3) translate(1px,68px)';
			bOk1 = false;
		},2000);

	}
	aLi[1].onclick=function(){
		if(bOk1)return;
		bOk1 = true;
		iNow = 1;
		setTimeout(sho,1);
		setTimeout(function(){
		oBox.style.WebkitTransform='perspective(800px) rotateY(180deg) rotateX(0deg)';
		oBox.style.MozTransform='perspective(800px) rotateY(180deg) rotateX(0deg)';
		oBox.style.MsTransform='perspective(800px) rotateY(180deg) rotateX(0deg)';
		oBox.style.transform='perspective(800px) rotateY(180deg) rotateX(0deg)';
		},1000);
		
		setTimeout(function(){
			oBoC[1].children[0].style.opacity = 0;
			oShC[1].style.opacity = 1;
			oShC[1].style.zIndex = 100;
			oShC[1].style.WebkitTransform = 'scale(6,3) translate(1px,68px)';
			oShC[1].style.MozTransform = 'scale(6,3) translate(1px,68px)';
			oShC[1].style.MsTransform = 'scale(6,3) translate(1px,68px)';
			oShC[1].style.transform = 'scale(6,3) translate(1px,68px)';
			bOk1 = false;
		},2000);
	}
	aLi[2].onclick=function(){
		if(bOk1)return;
		bOk1 = true;
		iNow = 2;
		setTimeout(sho,1);
		setTimeout(function(){
			oBox.style.WebkitTransform='perspective(800px) rotateY(90deg) rotateX(0deg)';
			oBox.style.MozTransform='perspective(800px) rotateY(90deg) rotateX(0deg)';
			oBox.style.MsTransform='perspective(800px) rotateY(90deg) rotateX(0deg)';
			oBox.style.transform='perspective(800px) rotateY(90deg) rotateX(0deg)';
		},1000);
		setTimeout(function(){
			oBoC[2].children[0].style.opacity = 0;
			oShC[2].style.opacity = 1;
			oShC[2].style.zIndex = 100;
			oShC[2].style.WebkitTransform = 'scale(6,3) translate(1px,68px)';
			oShC[2].style.MozTransform = 'scale(6,3) translate(1px,68px)';
			oShC[2].style.MsTransform = 'scale(6,3) translate(1px,68px)';
			oShC[2].style.transform = 'scale(6,3) translate(1px,68px)';
			bOk1 = false;
		},2000);
	}
	aLi[3].onclick=function(){
		if(bOk1)return;
		bOk1 = true;
		iNow = 3;
		setTimeout(sho,1);
		setTimeout(function(){
			oBox.style.WebkitTransform='perspective(800px) rotateY(-90deg) rotateX(0deg)';
			oBox.style.MozTransform='perspective(800px) rotateY(-90deg) rotateX(0deg)';
			oBox.style.MsTransform='perspective(800px) rotateY(-90deg) rotateX(0deg)';
			oBox.style.transform='perspective(800px) rotateY(-90deg) rotateX(0deg)';
		},1000);
		setTimeout(function(){
			oBoC[3].children[0].style.opacity = 0;
			oShC[3].style.opacity = 1;
			oShC[3].style.zIndex = 100;
			oShC[3].style.WebkitTransform = 'scale(6,3) translate(1px,68px)';
			oShC[3].style.MozTransform = 'scale(6,3) translate(1px,68px)';
			oShC[3].style.MsTransform = 'scale(6,3) translate(1px,68px)';
			oShC[3].style.transform = 'scale(6,3) translate(1px,68px)';
			bOk1 = false;
		},2000);
	}
	aLi[4].onclick=function(){
		if(bOk1)return;
		bOk1 = true;
		iNow = 4;
		setTimeout(sho,1);
		setTimeout(function(){
			oBox.style.WebkitTransform='perspective(800px) rotateY(0deg) rotateX(-90deg)';
			oBox.style.MozTransform='perspective(800px) rotateY(0deg) rotateX(-90deg)';
			oBox.style.MsTransform='perspective(800px) rotateY(0deg) rotateX(-90deg)';
			oBox.style.transform='perspective(800px) rotateY(0deg) rotateX(-90deg)';
		},1000);
		setTimeout(function(){
			oBoC[4].children[0].style.opacity = 0;
			oShC[4].style.opacity = 1;
			oShC[4].style.zIndex = 100;
			oShC[4].style.WebkitTransform = 'scale(6,3) translate(1px,68px)';
			oShC[4].style.MozTransform = 'scale(6,3) translate(1px,68px)';
			oShC[4].style.MsTransform = 'scale(6,3) translate(1px,68px)';
			oShC[4].style.transform = 'scale(6,3) translate(1px,68px)';
			bOk1 = false;
		},2000);
	}
	aLi[5].onclick=function(){
		if(bOk1)return;
		bOk1 = true;
		iNow = 5;
		setTimeout(sho,1);
		setTimeout(function(){
			oBox.style.WebkitTransform='perspective(800px) rotateY(0deg) rotateX(90deg)';
			oBox.style.MozTransform='perspective(800px) rotateY(0deg) rotateX(90deg)';
			oBox.style.MsTransform='perspective(800px) rotateY(0deg) rotateX(90deg)';
			oBox.style.transform='perspective(800px) rotateY(0deg) rotateX(90deg)';
		},1000);
		setTimeout(function(){
			oBoC[5].children[0].style.opacity = 0;
			oShC[5].style.opacity = 1;
			oShC[5].style.zIndex = 100;
			oShC[5].style.WebkitTransform = 'scale(6,3) translate(1px,68px)';
			oShC[5].style.MozTransform = 'scale(6,3) translate(1px,68px)';
			oShC[5].style.MsTransform = 'scale(6,3) translate(1px,68px)';
			oShC[5].style.transform = 'scale(6,3) translate(1px,68px)';
			bOk1 = false;
		},2000);
	};


	//弹性菜单
	var oBlock = document.querySelector('#block');
	var iNow = 0;

	for(var i=0;i<aLi.length-1;i++){
		aLi[i].onmouseover=function(){
			//oBlock.style.left = this.offsetLeft+'px';
			move1(oBlock,this.offsetLeft);
		};
		aLi[i].onmouseout=function(){
			move1(oBlock,iNow*aLi[0].offsetWidth);
		};
		// ;(function(index){
		// 	aLi[i].onclick=function(){
		// 		iNow = index;
		// 	};
		// })(i);
	}


  //var oUl = document.querySelectorAll('.ul1');
  //3D菜单
  var aLis = document.querySelectorAll('.ul1 li');
  var oPrev = document.querySelector ('.left_a');
  var oNext = document.querySelector ('.right_a');
  var aClass = [];
  for(var i=0;i<aLis.length;i++){
    aClass[i] = aLis[i].className;
  }
  var bOk = false;
  oPrev.onclick=function(){
    if(bOk)return;
    bOk = true;
    aClass.push(aClass.shift());
    tab();
  };
  oNext.onclick=function(){
    if(bOk)return;
    bOk = true;
    aClass.unshift(aClass.pop());
    tab();
  };
  function tab(){
    for(var i=0;i<aLis.length;i++){
      aLis[i].className=aClass[i];
    }
    var oCur = document.querySelector('.cur');
    function fnEnd(){
      oCur.removeEventListener('transitionend',fnEnd,false);
      bOk = false;
    }
    oCur.addEventListener('transitionend',fnEnd,false);
  }


//
	var As = document.querySelector('.ul1');
	
    var oAs = As.getElementsByTagName('a');
	for(var i=0;i<oAs.length;i++){
		

	    oAs[i].onmouseover=function(){
	    	var oS = this.children[0];
	    	console.log(oS);
	    	startMove(oS,{bottom:0})
	    }
	    oAs[i].onmouseout=function(){
	    	var oS = this.children[0];
	    	startMove(oS,{bottom:-oS.offsetHeight})
	    }
	}


	//整页
	var oSfq=document.getElementById('sfq');
	var aFq=oSfq.children;
	var at=0;
	var zong=700;
	for(var i=1; i<aFq.length; i++){
		aFq[i].style.left=zong-(aFq.length-i)*100+'px';
		aFq[i].index=i;
		aFq[i].onmouseover=function(){
			at=this.index
			if(at!=0){
				for(var j=1; j<=at; j++){
					startMove(aFq[j].children[0],{left:-200},{duration:500,easing:'ease-out'});
				}
				at--;
			}
		}
		aFq[i].onmouseout=function(){
			at=this.index
			if(at!=0){
				for(var j=1; j<=at; j++){
					startMove(aFq[j].children[0],{left:0},{duration:500,easing:'ease-out'});
				}
				at--;
			}
		}
	}
	// var oSfq=document.getElementById('sfq');
	// var aFq=oSfq.children;
	// var defaultW=40;
	// var w=600;
	
	// for(var i=1; i<aFq.length; i++){
	// 	aFq[i].style.left=w-(aFq.length-i)*defaultW+'px';
	// }
	// for(var i=0; i<aFq.length; i++){
	// 	(function (index){
	// 		aFq[i].onmouseover=function (){
	// 			for(var i=0; i<aFq.length; i++){
	// 				if(i<=index){
	// 					//aLi[i].style.left=i*defaultW+'px';
	// 					startMove(aFq[i],{left:i*defaultW},{duration:500,easing:'ease-out'});
	// 				}else{
	// 				//aLi[i].style.left=w-(aLi.length-i)*defaultW+'px';
	// 					startMove(aFq[i],{left:w-(aFq.length-i)*defaultW},{duration:500,easing:'ease-out'});
	// 				}
	// 			}
	// 		};
	// 	})(i);
	// }



//我的技能
	var oWarks=document.getElementById('works');
	var aLia = oWarks.getElementsByTagName('li');
	var oWa=document.getElementById('wok');
	var aLiw = oWa.getElementsByTagName('li');
	for(var i=0;i<aLia.length;i++){
		aLia[i].index=i;
		through(aLia[i],aLiw[aLia[i].index],aLiw);
	}	


}


// 穿墙

	function hoverDir(obj,ev){
		var w=obj.offsetWidth;
		var h=obj.offsetHeight;
		var x=obj.offsetLeft+w/2-ev.clientX;
		var y=obj.offsetTop+h/2-ev.clientY;
		return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;

	}
	function through(obj,ix,ia){
		var oS = obj.children[0];
		
		obj.onmouseover=function(ev){
			
			for(var i=0;i<ia.length;i++){
					ia[i].className='';
			}
			ix.className='explain_li';
			var oEvent = ev||event;
			var oFrom = oEvent.fromElement||oEvent.relatedTarget;
			if(obj.contains(oFrom))return;
			var n = hoverDir(obj,oEvent);
			switch(n){
				case 0:
					oS.style.left='150px';
					oS.style.top=0;
					//alert(1);
				break;
				case 1:
					oS.style.left=0;
					oS.style.top='150px';
					//alert(2);
				break;
				case 2:
					oS.style.left='-150px';
					oS.style.top=0;
					//alert(3);
				break;
				case 3:
					oS.style.left=0;
					oS.style.top='-150px';
					//alert(4);
				break;
			}
			startMove(oS,{top:0,left:0});
		};
		obj.onmouseout=function(ev){

			var oEvent = ev||event;
			var oTo = oEvent.toElement||oEvent.relatedTarget;
			if(obj.contains(oTo))return;
			var n = hoverDir(obj,oEvent);
			switch(n){
				case 0:
					startMove(oS,{top:0,left:150});
				break;
				case 1:
					startMove(oS,{top:150,left:0});
				break;
				case 2:
					startMove(oS,{top:0,left:-150});
				break;
				case 3:
					startMove(oS,{top:-150,left:0});
				break;
			}
		};
	}
		


