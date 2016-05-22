function hoverDir(obj,oEvent){
	var w=obj.offsetWidth;
	var h=obj.offsetHeight;
	var x=obj.offsetLeft+w/2-oEvent.clientX;
	var y=obj.offsetTop+h/2-oEvent.clientY;
		console.log(x);
		console.log(y);
	return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
}
window.onload=function (){
		sh('div1');
		sh('div2');
		sh('div3');
		sh('div4');
		sh('div4');

};

function sh(di){
	var oDiv=document.getElementById(di);
	var oSpan=oDiv.children[0];
	
	oDiv.onmouseenter=function (ev){
		console.log(this);
		var oEvent=ev||event;
		var n=hoverDir(oDiv,oEvent);
		
		switch(n){
			case 0:
				oSpan.style.left='150px';
				oSpan.style.top=0;
				break;
			case 1:
				oSpan.style.left=0;
				oSpan.style.top='150px';
				break;
			case 2:
				oSpan.style.left='-150px';
				oSpan.style.top=0;
				break;
			case 3:
				oSpan.style.left=0;
				oSpan.style.top='-150px';
				break;
		}
		startMove(oSpan,{left:0,top:0});
	};
	oDiv.onmouseleave=function (ev){
		var oEvent=ev||event;
		var n=hoverDir(oDiv,oEvent);
		
		switch(n){
			case 0:
				startMove(oSpan,{left:150,top:0});
				break;
			case 1:
				startMove(oSpan,{left:0,top:150});
				break;
			case 2:
				startMove(oSpan,{left:-150,top:0});
				break;
			case 3:
				startMove(oSpan,{left:0,top:-150});
				break;
		}
		
	};
}