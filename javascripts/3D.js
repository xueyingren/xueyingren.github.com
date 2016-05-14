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
			oShC[i].style.WebkitTransform = 'scale(1,1) translate(0,100px)';
			oBoC[i].children[0].style.opacity = 1;
		}
	}
	aLi[0].onclick=function(){
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
			oShC[0].style.WebkitTransform = 'scale(6,3) translate(1px,68px)';
		},2000);
	}
	aLi[1].onclick=function(){
		iNow = 1;
		setTimeout(sho,1);
		setTimeout(function(){
		oBox.style.WebkitTransform='perspective(800px) rotateY(180deg) rotateX(0deg)';
		},1000);
		
		setTimeout(function(){
			oBoC[1].children[0].style.opacity = 0;
			oShC[1].style.opacity = 1;
			oShC[1].style.WebkitTransform = 'scale(6,3) translate(1px,68px)';
		},2000);
	}
	aLi[2].onclick=function(){
		iNow = 2;
		setTimeout(sho,1);
		setTimeout(function(){
			oBox.style.WebkitTransform='perspective(800px) rotateY(90deg) rotateX(0deg)';
		},1000);
		setTimeout(function(){
			oShC[2].style.opacity = 1;
			oShC[2].style.WebkitTransform = 'scale(6,3) translate(1px,68px)';
		},2000);
	}
	aLi[3].onclick=function(){
		iNow = 3;
		setTimeout(sho,1);
		setTimeout(function(){
			oBox.style.WebkitTransform='perspective(800px) rotateY(-90deg) rotateX(0deg)';
		},1000);
		setTimeout(function(){
			oShC[3].style.opacity = 1;
			oShC[3].style.WebkitTransform = 'scale(6,3) translate(1px,68px)';
		},2000);
	}
	aLi[4].onclick=function(){
		iNow = 4;
		setTimeout(sho,1);
		setTimeout(function(){
			oBox.style.WebkitTransform='perspective(800px) rotateY(0deg) rotateX(-90deg)';
		},1000);
		setTimeout(function(){
			oShC[4].style.opacity = 1;
			oShC[4].style.WebkitTransform = 'scale(6,3) translate(1px,68px)';
		},2000);
	}
	aLi[5].onclick=function(){
		iNow = 5;
		setTimeout(sho,1);
		setTimeout(function(){
			oBox.style.WebkitTransform='perspective(800px) rotateY(0deg) rotateX(90deg)';
		},1000);
		setTimeout(function(){
			oShC[5].style.opacity = 1;
			oShC[5].style.WebkitTransform = 'scale(6,3) translate(1px,68px)';
		},2000);
	};


	//弹性菜单
	var oBlock = document.querySelector('#block');
	var iNow = 0;

	for(var i=0;i<aLi.length-1;i++){
		aLi[i].onmouseover=function(){
			//oBlock.style.left = this.offsetLeft+'px';
			move(oBlock,this.offsetLeft);
		};
		aLi[i].onmouseout=function(){
			move(oBlock,iNow*aLi[0].offsetWidth);
		};
		// ;(function(index){
		// 	aLi[i].onclick=function(){
		// 		iNow = index;
		// 	};
		// })(i);
	}
}