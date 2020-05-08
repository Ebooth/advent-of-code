const startRange = 123257;
const endRange = 647015;


function genPasswords(startRange, endRange) {
	let i = startRange;
	let digits = convertNumToDigits(startRange);
	const passwords = [];
	digits = getNext(digits);
	while (convertDigitsToNum(digits) < endRange) {
		if (isPassword(digits)) {
			passwords.push(convertDigitsToNum(digits));
		}

		let num = convertDigitsToNum(digits)
		num += 1;
		digits = convertNumToDigits(num)
		digits = getNext(digits)
	}
	return passwords;
}

function isPassword(digits) {
	for (let i = 1; i < digits.length; i++) {
		if (digits[i - 1] === digits[i]) return true;
	}
	return false;
}
function getNext(digits) {
	let next = [...digits];
	for (let i = 1; i < next.length; i++) {
		if (next[i] < next[i - 1]) {
			next[i] = next[i - 1];
		}

	}
	return next;
}


function convertNumToDigits(num) {
	let digits = num.toString().split('').map(el => parseInt(el, 10))
	return digits;
}


function convertDigitsToNum(digits) {
	let num = parseInt(digits.join(''), 10);
	return num;
}

export const PASSWORDS_1 = genPasswords(startRange, endRange);

