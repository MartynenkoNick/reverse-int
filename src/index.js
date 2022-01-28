module.exports = function reverse (n) {
		n = String(n);
		
		let result = '';
	
		for(i = 0; i < n.length; i++) {
			result = `${n[i]}${result}`;
		};
	
		result = parseInt(result);
	
	return result;
}
