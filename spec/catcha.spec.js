function Captcha(pt,op,lo,ro){
	this.generate = function(){
		var Operator1 = new operator(op);
		var LeftOperand1 = new LeftOperand(pt,lo);
		var RightOperand1 = new RightOperand(pt,ro);

		return LeftOperand1 + ' ' + Operator1 + ' ' + RightOperand1;
	}
}
function operator(Operator){
	this.toString = function(){
		if(Operator == 1) {return '+';}
		else if(Operator == 2) {return '-';}
		else if(Operator == 3) {return '*';}
		else if(Operator == 4) {return '/';}
	}
}
function LeftOperand(Pattren,LeftOperand){
	this.toString = function(){
		if(Pattren === 1) {return LeftOperand;}
		else if(Pattren === 2){
			if(LeftOperand === 0){return 'ZERO';}
			else if(LeftOperand === 1){return 'ONE';}
			else if(LeftOperand === 2){return 'TWO';}
			else if(LeftOperand === 3){return 'THREE';}
			else if(LeftOperand === 4){return 'FOUR';}
			else if(LeftOperand === 5){return 'FIVE';}
			else if(LeftOperand === 6){return 'SIX';}
			else if(LeftOperand === 7){return 'SEVEN';}
			else if(LeftOperand === 8){return 'EIGHT';}
			else if(LeftOperand === 9){return 'NINE';}
		}
	}
}
function RightOperand(Pattren,RightOperand){
	this.toString = function(){
		if(Pattren === 2) {return RightOperand;}
		else if(Pattren === 1){
			if(RightOperand === 0){return 'ZERO';}
			else if(RightOperand === 1){return 'ONE';}
			else if(RightOperand === 2){return 'TWO';}
			else if(RightOperand === 3){return 'THREE';}
			else if(RightOperand === 4){return 'FOUR';}
			else if(RightOperand === 5){return 'FIVE';}
			else if(RightOperand === 6){return 'SIX';}
			else if(RightOperand === 7){return 'SEVEN';}
			else if(RightOperand === 8){return 'EIGHT';}
			else if(RightOperand === 9){return 'NINE';}
		}
	}
}

describe('Captcha' , function() {
	it('should echo "2 + FIVE" when input (1,1,2,5)',function(){
		let ex1 = new Captcha(1,1,2,5);
	 expect(ex1.generate()).toEqual('2 + FIVE');
 	});
 it('should echo "8 + TWO" when input (1,1,8,2)',function(){
	 let test1 = new Captcha(1,1,8,2);
	expect(test1.generate()).toEqual('8 + TWO');
	});
	it('should echo "1 - ONE" when input (1,2,1,1)',function(){
		let test2 = new Captcha(1,2,1,1);
	 expect(test2.generate()).toEqual('1 - ONE');
	});
	it('should echo "2 * SIX" when input (1,3,2,6)',function(){
		let test3 = new Captcha(1,3,2,6);
	 expect(test3.generate()).toEqual('2 * SIX');
	});
	it('should echo "9 / THREE" when input (1,4,9,3)',function(){
		let test4 = new Captcha(1,4,9,3);
	 expect(test4.generate()).toEqual('9 / THREE');
	});
});
