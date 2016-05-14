window.onload=function (){
	var oHe=document.getElementById('header');
	var aLi=getByClass(oHe,'mouseover');
	for(i=0; i<aLi.length; i++){
		aLi[i].onmouseover=function(){
			var bot=this.lastElementChild||this.lastChild;
			bot.style.display='block';
			bot.style.zIndex='999';
		};
		aLi[i].onmouseout=function(){
			var bot=this.lastElementChild||this.lastChild;
			bot.style.display='none';
		};
	};
	var oYi=document.getElementById('yi');
	var aXk=getByClass(oYi,'xxk');
	for(i=0; i<aXk.length; i++){
		wufneg(aXk[i],'con_lun_li');
	}
};