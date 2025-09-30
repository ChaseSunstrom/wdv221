function getDayName(date) {
	return date.toLocaleDateString('en-US', { weekday: 'long' });
}

function getMonthName(date) {
	return date.toLocaleDateString('en-US', { month: 'long' });
}

function getDayOfMonth(date) {
	return date.getDate();
}

function getFullYearValue(date) {
	return date.getFullYear();
}


