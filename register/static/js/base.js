function addEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.addEventListener(type,fn,false)
	}else if(obj.attachEvent){
		obj.attachEvent("on"+type,fn)
	}
}
function $(id){
	return document.getElementById(id)
}
/*去除首尾空格*/
function trim(str){
	if(typeof String.trim=="undefined"){
		return str.replace(/(^\s+)|(\s*$)/g,"")
	}else{
		return str.trim();
	}
}

/******增加属性*******/
function addClass(obj, className) {
		if (!obj.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))) {
			obj.className += " " + className;
		}
}
/*****删除属性*******/
function removeClass(obj,className){
		if(obj.className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))){
			obj.className=obj.className.replace(new RegExp('(\\s|^)'+className+'(\\s|$)'),"")
		}
}
/***隐藏*******/
function hide(obj){
	obj.style.display="none";
}
/****显示*******/
function show(obj){
	obj.style.display="block";
}


/****输入框提示****/
function showInputTips(obj){
	addEvent(obj,"click",function(){
		hide(obj);
		obj.parentNode.getElementsByTagName("input")[0].focus();
	})
}
/****获得焦点时*****/
function getFocus(obj,str,flag){
	addEvent(obj,"focus",function(){
		hide(tips["_"+str+"_error"]);
		hide(tips["_"+str+"_right"]);
		hide(tips["_"+str]);
		addClass(obj,"input-focus");
		show(tips["_"+str+"_info"]);
		if(flag){
			show($("J_level"));
		}
	})	
}