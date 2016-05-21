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
		oBox.style.WebkitTransform='perspective(800px) rotateY(0deg) rotateX(0deg)'
		},1000);
		setTimeout(function(){
			oBoC[0].children[0].style.opacity = 0;
			oShC[0].style.opacity = 1;
			oShC[0].style.zIndex = 100;
			oShC[0].style.WebkitTransform = 'scale(6,3) translate(1px,68px)';
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
		},1000);
		
		setTimeout(function(){
			oBoC[1].children[0].style.opacity = 0;
			oShC[1].style.opacity = 1;
			oShC[1].style.zIndex = 100;
			oShC[1].style.WebkitTransform = 'scale(6,3) translate(1px,68px)';
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
		},1000);
		setTimeout(function(){
			oShC[2].style.opacity = 1;
			oShC[2].style.zIndex = 100;
			oShC[2].style.WebkitTransform = 'scale(6,3) translate(1px,68px)';
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
		},1000);
		setTimeout(function(){
			oShC[3].style.opacity = 1;
			oShC[3].style.zIndex = 100;
			oShC[3].style.WebkitTransform = 'scale(6,3) translate(1px,68px)';
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
		},1000);
		setTimeout(function(){
			oShC[4].style.opacity = 1;
			oShC[4].style.zIndex = 100;
			oShC[4].style.WebkitTransform = 'scale(6,3) translate(1px,68px)';
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
		},1000);
		setTimeout(function(){
			oShC[5].style.opacity = 1;
			oShC[5].style.zIndex = 100;
			oShC[5].style.WebkitTransform = 'scale(6,3) translate(1px,68px)';
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
	    	move(oS,{bottom:0})
	    }
	    oAs[i].onmouseout=function(){
	    	var oS = this.children[0];
	    	move(oS,{bottom:-oS.offsetHeight})
	    }
	}


}


