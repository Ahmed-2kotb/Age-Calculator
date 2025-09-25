const form = document.getElementById('age-form');
const dobInput = document.getElementById('dob');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function (e) {
	e.preventDefault();

	const dobValue = dobInput.value;
	if (!dobValue) {
		resultDiv.textContent = '⚠️ Please enter your date of birth.';
		return;
	}

	const dob = new Date(dobValue);
	const today = new Date();

	let years = today.getFullYear() - dob.getFullYear();
	let months = today.getMonth() - dob.getMonth();
	let days = today.getDate() - dob.getDate();

	if (days < 0) {
		months--;
		const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
		days += prevMonth.getDate();
	}

	if (months < 0) {
		years--;
		months += 12;
	}

	resultDiv.textContent = `Your age is ${years} years, ${months} months, and ${days} days.`;
});
