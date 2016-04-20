
var form=document.forms[0];
var fname=form.elements["name"];
var fpw=form.elements["password"];
var frpw=form.elements["rpassword"];
var password;
var flag={
	name:false,
	pw:false,
	rpw:false
}
var levels=$("J_level").getElementsByTagName("span");
var formChoice=form.elements["choice"];
/***输入框内部提示****/
var tips={
	_fname:$("J_input_tips1"),
	_fname_info:$("J_name_info"),
	_fname_error:$("J_name_error"),
	_fname_right:$("J_name_right"),
	_fpw:$("J_input_tips2"),
	_fpw_info:$("J_pw_info"),
	_fpw_error:$("J_pw_error"),
	_fpw_right:$("J_pw_right"),
	_frpw:$("J_input_tips3"),
	_frpw_info:$("J_rpw_info"),
	_frpw_error:$("J_rpw_error"),
	_frpw_right:$("J_rpw_right"),
	_low:$("J_l_low"),
	_mid:$("J_l_mid"),
	_high:$("J_l_high")

}


/****会员名验证****/


addEvent(fname,"blur",function(){
	flag.name=false;
	var value=trim(fname.value);
	hide(tips._fname_info);
	removeClass(fname,"input-focus");
	if(value==""){
		show(tips._fname);
	}else if(!/^[0-9a-zA-Z_]{4,20}$/.test(value)){
		show(tips._fname_error);
	}else{
		show(tips._fname_right);
		flag.name=true;

	}
})

/******密码验证*******/
addEvent(fpw,"blur",function(){
	flag.pw=false;
	hide(tips._fpw);
	hide($("J_level"))
	var value=(fpw.value);
	hide(tips._fpw_info);
	removeClass(fpw,"input-focus");
	if(value==""){
		show(tips._fpw);
	}else if(!/[a-zA-Z0-9]{6,16}/.test(value)){
	 	show(tips._fpw_error);
	 }else{
	 	show(tips._fpw_right);
	 	flag.pw=true;
	 	password=value;
	 }

})
addEvent(fpw,"keyup",function(){
	var value=trim(fpw.value);
	var code_length=0;
	if(/[a-z]/.test(value)){
		code_length++;
	};
	if(/[A-Z]/.test(value)){
		code_length++;
	};
	if(/[0-9]/.test(value)){
		code_length++;
	}
	if(code_length==3){
		for(var i=0;i<levels.length;i++){
			removeClass(levels[i],"b-orange");
		}
		addClass(tips._high,"b-orange")
	}else if(code_length==2){
		for(var i=0;i<levels.length;i++){
			removeClass(levels[i],"b-orange");
		}
		addClass(tips._mid,"b-orange");
	}else{
		for(var i=0;i<levels.length;i++){
			removeClass(levels[i],"b-orange");
		}
		addClass(tips._low,"b-orange");
	}
})


/******再次验证密码****/
addEvent(frpw, "blur", function() {
			flag.rpw=false;
			hide(tips._frpw);
			hide($("J_level"))
			var value = frpw.value;
			hide(tips._frpw_info);
			removeClass(frpw, "input-focus");
			if (value == "") {
				show(tips._frpw);
			} else if (!/[a-zA-Z0-9]{6,16}/.test(value)) {
				show(tips._frpw_error);
			} else if(password==value){
				show(tips._frpw_right);
				flag.rpw=true;
			}else{
				show(tips._frpw_error)
			}
	})

/***注册是否成功判断**/
addEvent($("J_reg_go"),"click",function(){
	if(flag.name==true&&flag.pw==true&&flag.rpw==true&&formChoice.checked==true){
		alert("注册成功")
		success_length=0;
	}
})
showInputTips(tips._fname);
getFocus(fname,"fname");
getFocus(fpw,"fpw",1);
getFocus(frpw,"frpw")
showInputTips(tips._fpw);
showInputTips(tips._frpw);

