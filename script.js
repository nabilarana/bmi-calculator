function calculateBMI() {
	
	const height = parseFloat(document.getElementById('h').value);
	const weight = parseFloat(document.getElementById('w').value);
	
	if (!height || !weight || height <= 0 || weight <= 0) {
		showError('Please enter valid height and weight values!');
		return;
	}
	
	const bmi = weight / ((height/100) * (height/100));
	const bmiValue = bmi.toFixed(1);
	
	const category = getBMICategory(bmi);
	const description = getBMIDescription(bmi);
	
	displayResults(bmiValue, category, description);
	
	changeBackgroundColor(bmi);
}

function getBMICategory(bmi) {
	if (bmi < 18.5) {
		return 'Underweight';
	} else if (bmi >= 18.5 && bmi < 25) {
		return 'Normal Weight';
	} else if (bmi >= 25 && bmi < 30) {
		return 'Overweight';
	} else {
		return 'Obese';
	}
}

function getBMIDescription(bmi) {
	if (bmi < 18.5) {
		return 'You may need to gain weight. Consult a healthcare provider.';
	} else if (bmi >= 18.5 && bmi < 25) {
		return 'You have a healthy weight. Keep it up!';
	} else if (bmi >= 25 && bmi < 30) {
		return 'You may need to lose some weight. Consider exercise and diet.';
	} else {
		return 'You should consult a healthcare provider for advice.';
	}
}

function displayResults(bmiValue, category, description) {
	document.getElementById('bmi-value').textContent = `Your BMI is ${bmiValue}`;
	document.getElementById('bmi-category').textContent = `Category: ${category}`;
	document.getElementById('bmi-description').textContent = description;
}

function changeBackgroundColor(bmi) {
	let bgColor = "";
	
	if (bmi < 18.5) {
		bgColor = "linear-gradient(120deg, #74b9ff, #a29bfe)"; // Blue
	} else if (bmi >= 18.5 && bmi < 25) {
		bgColor = "linear-gradient(120deg, #55efc4, #00b894)"; // Green
	} else if (bmi >= 25 && bmi < 30) {
		bgColor = "linear-gradient(120deg, #fdcb6e, #f39c12)"; // Orange
	} else {
		bgColor = "linear-gradient(120deg, #ff6b6b, #d63031)"; // Red
	}
	
	document.body.style.backgroundImage = bgColor;
}

function showError(message) {
	document.getElementById('bmi-value').textContent = '⚠️ Error';
	document.getElementById('bmi-category').textContent = message;
	document.getElementById('bmi-description').textContent = '';
	
	document.body.style.backgroundImage = "linear-gradient(120deg,#ff6b6b,#5f27cd)";
}

document.getElementById('h').addEventListener('keypress', function(event) {
	if (event.key === 'Enter') {
		calculateBMI();
	}
});

document.getElementById('w').addEventListener('keypress', function(event) {
	if (event.key === 'Enter') {
		calculateBMI();
	}
});