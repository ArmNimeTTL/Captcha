function captcha(Operator,Left,Right){
	var Operator = new Operator();
	var Left = new Left();
	var Right = new Right();

	return Left + ' ' + Oparetor + ' ' + Right;
}
function pattern(p){
	var p = new p();
}
function oaerator(Operator){}
	var Operator = new Operator();
	if(Operator === 0) {return '+';}
	else if(Operator === 1) {return '-';}
	else if(Operator === 2) {return '*';}
	else if(Operator === 3) {return '/';}
}