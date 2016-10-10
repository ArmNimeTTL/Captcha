function Captcha(Pattren,Operator,LeftOperand,RightOperand){
	var Operator = new Operator(Operator);
	var LeftOperand = new LeftOperand();
	var RightOperand = new RightOperand();

	return LeftOperand + ' ' + Oparetor + ' ' + RightOperand;
}
function operator(Operator){
	this.tostring = function(){
		if(Operator === 1) {return '+';}
		else if(Operator === 2) {return '-';}
		else if(Operator === 3) {return '*';}
		else if(Operator === 4) {return '/';}
	}
}
function LeftOperand(Pattren,LeftOperand){
	this.tostring = function(){
		if(p === 1) {return LeftOperand;}
		else if(p === 2){
			if(LeftOperand === 0){return 'ZERO';}
			if(LeftOperand === 1){return 'ONE';}
			if(LeftOperand === 2){return 'TWO';}
			if(LeftOperand === 3){return 'THREE';}
			if(LeftOperand === 4){return 'FOUR';}
			if(LeftOperand === 5){return 'FIVE';}
			if(LeftOperand === 6){return 'SIX';}
			if(LeftOperand === 7){return 'SEVEN';}
			if(LeftOperand === 8){return 'EIGHT';}
			if(LeftOperand === 9){return 'NINE';}v
		}
	}
}
function RightOperand(Pattren,RightOperand){
	this.tostring = function(){
		if(p === 2) {return RightOperand;}
		else if(p === 1){
			if(LeftOperand === 0){return 'ZERO';}
			if(LeftOperand === 1){return 'ONE';}
			if(LeftOperand === 2){return 'TWO';}
			if(LeftOperand === 3){return 'THREE';}
			if(LeftOperand === 4){return 'FOUR';}
			if(LeftOperand === 5){return 'FIVE';}
			if(LeftOperand === 6){return 'SIX';}
			if(LeftOperand === 7){return 'SEVEN';}
			if(LeftOperand === 8){return 'EIGHT';}
			if(LeftOperand === 9){return 'NINE';}v
		}
	}
}

describe('Captcha' , function() {
	it('should echo "2 + FIVE" when input (1,1,2,5)',function(){
		Captcha ex1 = new Captcha(1,1,2,5);
	 expect(Captcha()).toEqual('2 + FIVE');
 });
}
