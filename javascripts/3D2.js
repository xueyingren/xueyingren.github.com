window.onload=function(){
	var oWarks=document.getElementById('works');
	var aLia = oWarks.getElementsByTagName('li');
	var owok=document.getElementById('wok');
	var aLiw = owok.getElementsByTagName('li');
	
	
	for(var i=0;i<aLia.length;i++){
		through(aLia[i]);

	}
};


	function hoverDir(obj,ev){
		var w=obj.offsetWidth;
		var h=obj.offsetHeight;
		var x=obj.offsetLeft+w/2-ev.clientX;
		var y=obj.offsetTop+h/2-ev.clientY;
		return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;

	}
	function through(obj){
		var oS = obj.children[0];
		console.log(obj);
		obj.onmouseover=function(ev){
			
			

			var oEvent = ev||event;
			var oFrom = oEvent.fromElement||oEvent.relatedTarget;
			if(obj.contains(oFrom))return;
			var n = hoverDir(obj,oEvent);
			switch(n){
				case 0:
					oS.style.left='150px';
					oS.style.top=0;
				break;
				case 1:
					oS.style.left=0;
					oS.style.top='150px';
				break;
				case 2:
					oS.style.left='-150px';
					oS.style.top=0;
				break;
				case 3:
					oS.style.left=0;
					oS.style.top='-150px';
				break;
			}
			move(oS,{top:0,left:0});
		};
		obj.onmouseout=function(ev){
			var oEvent = ev||event;
			var oTo = oEvent.toElement||oEvent.relatedTarget;
			if(obj.contains(oTo))return;
			var n = hoverDir(obj,oEvent);
			switch(n){
				case 0:
					move(oS,{top:0,left:150});
				break;
				case 1:
					move(oS,{top:150,left:0});
				break;
				case 2:
					move(oS,{top:0,left:-150});
				break;
				case 3:
					move(oS,{top:-150,left:0});
				break;
			}
		};
	}

