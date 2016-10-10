function captcha(Pattren,Operator,LeftOperand,RightOperand){
	var Operator = new Operator(Operator);
	var LeftOperand = new LeftOperand();
	var RightOperand = new RightOperand();

	return LeftOperand + ' ' + Oparetor + ' ' + RightOperand;
}
function oaerator(Operator){
	this.tostring = function();{
		if(Operator === 1) {return '+';}
		else if(Operator === 2) {return '-';}
		else if(Operator === 3) {return '*';}
		else if(Operator === 4) {return '/';}
	}
}
