// JavaScript Document
function findInArr(arr,item){
	for(var i=0; i<arr.length; i++){
		if(arr[i]==item){
			return true;
		}
	}
	return false;
}
function getByClass(obj,sClass){
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(sClass);
	}else{
		var aResult=[];
		var aEle=obj.getElementsByTagName('*');
		for(var i=0; i<aEle.length; i++){
			var aClass=aEle[i].className.split(' ');
			if(findInArr(aClass,sClass)){
				aResult.push(aEle[i]);
			}
		}
		return aResult;
	}
}