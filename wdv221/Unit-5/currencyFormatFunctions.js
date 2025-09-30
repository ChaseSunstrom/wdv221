// Returns a USD currency formatted string for a numeric input
function formatCurrency(value) {
	var number = Number(value);
	if (isNaN(number)) {
		return '';
	}
	return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}


