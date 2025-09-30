// Simple mask: replaces all but last 4 characters with '*'
function maskValue(input) {
	if (typeof input !== 'string') {
		input = String(input);
	}
	if (input.length <= 4) {
		return input;
	}
	var visible = input.slice(-4);
	var masked = '*'.repeat(input.length - 4) + visible;
	return masked;
}


