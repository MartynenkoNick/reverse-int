//Given: number, your task is to implement function that reverse digits of this number.
//For example:
//reverse(123); // 321

module.exports = function reverse (n) {
		num = String(num);
		
		let result = '';
	
		for(i = 0; i < num.length; i++) {
			result = `${num[i]}${result}`;
		};
	
		result = parseInt(result);
	
	return result;
}
