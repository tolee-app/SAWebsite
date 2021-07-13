function calculatePercentage(numerator, denominator) {
	return Math.round((numerator / denominator) * 100);
}
module.exports.calculatePercentage = calculatePercentage;

function calculatePercentageStr(numerator, denominator) {
	return calculatePercentage(numerator, denominator) + '%';
}
module.exports.calculatePercentageStr = calculatePercentageStr;

function calculateDaysLeftFromDate(targetDate) {
	const currentDate = Date.now();
	targetDate = new Date(targetDate).getTime();
	return Math.round((targetDate - currentDate) / (24*3600*1000));
}
module.exports.calculateDaysLeftFromDate = calculateDaysLeftFromDate;

function calculateAgeFromDob(dob) {
	const currentDate = new Date();
	const dateOfBirth = new Date(dob);

	return Math.round((currentDate - dateOfBirth) / (365*24*3600*1000)) + ' yrs';

}
module.exports.calculateAgeFromDob = calculateAgeFromDob;
