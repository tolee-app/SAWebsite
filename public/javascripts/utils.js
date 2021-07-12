function calculatePercentage(numerator, denominator) {
	return (numerator / denominator) * 100;
}

function calculatePercentageStr(numerator, denominator) {
	return calculatePercentage(numerator, denominator) + '%';
}

function calculateDaysLeftFromDate(targetDate) {
	const currentDate = Date.now();
	targetDate = new Date(targetDate).getTime();
	return (targetDate - currentDate) / (24*3600*1000);
}

function calculateAgeFromDob(dob) {
	const currentDate = new Date();
	const dateOfBirth = new Date(dob);

	return (currentDate - dateOfBirth) / (365*24*3600*1000);

}
