// JavaScript Document

window.onload=function(){
			var oIn=document.getElementById('input')
			var oYi=document.getElementById('yinc')
			var sdiv=oYi.getElementsByTagName('li')
			oIn.onmouseover=function(){
				oYi.style.display='block';
			}
			oIn.onmouseout=function(){
				oYi.style.display='none';
			}
			for(var i=0; i<sdiv.length; i++){
				sdiv[i].onmouseover=function(){
					
					for(var j=0; j<sdiv.length; j++){
						sdiv[j].style.background='#fff';
					}
					this.style.background='#ccc';
				}
				
			};
		
		
			
			var oLe=document.getElementById('left')
			oLe.onmouseover=function(){
				this.className='left_i1';
				}
			oLe.onmouseout=function(){
				this.className='left_i';
				}	
			var oLe1=document.getElementById('right')
			oLe1.onmouseover=function(){
				this.className='right_i1';
				}
			oLe1.onmouseout=function(){
				this.className='right_i';
				}
			
			var list= document.getElementById('yidUL');
			var aList_li = list.getElementsByTagName('li');
			var i=0;
			var list_l = aList_li.length;
			
			oLe.onclick = function(){
				if(list_l-1 == i){
					return false;	
				}
				i++;	
				list.style.left = i*-1240+'px';
				
			}
			
			oLe1.onclick = function(){
				if( i==0){
					return false;
				}
				i--;
				list.style.left = i*-1240+'px';
			}
			
	//变色

	bians('daoh');
	bians('xiu');
	
	//		
	tab('wod','guan');
	tab('Ali','shi')
	tab('Bli','ying')
	
	xuan('yin','li','Xul','li')
	xuan('yin1','li','Xul1','li')
	
	tabN('lunb1');
	tabN('lunb2');
	tabN('lunb3');
	tabN('lunb4');
	tabN('lunb5');
	tabN('lunb6');
	tabN('lunb7');
	tabN('lunb8');
	tabN('lunb9');
	tabN('lunb10');
			
	tabm('Aul')	;
	tabm('IDul');
	tabm('clas');
	tabm('xingX');
	tabm('xingU');
	tabm('yuL');
	tabm('yuL1');
	tabm('yuL2');
	tabm('yuL3');
	tabm('yuL4');
	tabm('wangl')
			
}

function tab(wo,gu){
		var oWo=document.getElementById(wo)
		var oGu=document.getElementById(gu)
		
		oWo.onmouseover=function(){
				oGu.style.display='block';
			}
		oWo.onmouseout=function(){
				oGu.style.display='none';
			}
			
			
	
	}

function tabN(wod){
		var oWo=document.getElementById(wod)
		var oGu=oWo.getElementsByTagName('a')[0]
		//var oGu=document.getElementById(gu)
		 
		oWo.onmouseover=function(){
				oGu.style.display='block';
			}
		oWo.onmouseout=function(){
				oGu.style.display='none';
			}	
	
	}


function tabm(wodm){
		var oWo=document.getElementById(wodm)
		
		var oGu=oWo.getElementsByTagName('li')
		
		for(var k=0; k<oGu.length ;k++){
			oGu[k].onmouseover=function(){
				var oGua=this.getElementsByTagName('a')[0];
				oGua.style.display='block';
				
				}
			oGu[k].onmouseout=function(){
				var oGua=this.getElementsByTagName('a')[0]
				oGua.style.display='none';
				
				}
			
			}
		//var oGu=document.getElementById(gu)
		 
		
	
	}


function xuan(btn,Bli,s_list,Sli){
		var oBtnList = document.getElementById(btn);
		var aLi = oBtnList.getElementsByTagName(Bli);
		var oList = document.getElementById(s_list);
		var aList = oList.getElementsByTagName(Sli);
		for(var k=0; k<aLi.length ;k++){
			
			aLi[k].index = k;
			aLi[k].onmouseover=function(){
				for(var j=0; j<aLi.length;j++){
					aLi[j].className = '';
					aList[j].style.display='';
				}
				aList[this.index].style.display ='block';
				this.className = 'ying_li';
				}
		}
	}

function bians(da){
	var aDa= document.getElementById(da);
	var aLI = aDa.getElementsByTagName('li');
		for(var j=0; j<aLI.length; j++){
			aLI[j].onmouseover=function(){ 
				this.className='daoH_li';
				}
			aLI[j].onmouseout=function(){
				this.className='';
				}	
		}
}















































































































