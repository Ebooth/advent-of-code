const startRange = 123257;
const endRange = 647015;


function genPasswords(startRange, endRange) {
    let i = startRange;
    let passwords = [];


    while (i <= endRange) {
        if (hasDouble(i) && !isIncreasing(i)) {
            passwords.push(i)

        }
        i += 1;

    }
    return passwords;
}

function isIncreasing(num) {
    let digits = convertNumToDigits(num);
    for (let i = 1; i < digits.length; i++) {
        if (digits[i - 1] > digits[i]) {
            return true;
        }
    }
    return false;
}

function hasDouble(num) {
    let digits = convertNumToDigits(num);
    for (let i = 1; i < digits.length; i++) {
        if (digits[i - 1] === digits[i]) {
            return true;
        }
    }
    return false;
}


function hasExactlyADouble(num) {
    let digits = convertNumToDigits(num);
    //console.log(digits)
    let nbOfRepeats = digits.map((digit, index) => {
        let count = 1;
        while (index + count < digits.length && digits[index + count] === digits[index]) {
            count += 1
        }
        return [digit, count]
    })

    //console.log(nbOfRepeats)

    let uniques = Array.from(new Set(digits))
    // console.log(uniques)

    let counts = new Map(uniques.map(num => [num, 0]));



    for (let [digit, count] of nbOfRepeats) {
        // console.log(digit, count)
        if (counts.get(digit) < count) {
            counts.set(digit, count)
        }
    }

    //console.log(Array.from(counts.values()))
    return Array.from(counts.values()).includes(2)

}









function convertNumToDigits(num) {
    let digits = num.toString().split('').map(el => parseInt(el, 10))
    return digits;
}


function convertDigitsToNum(digits) {
    let num = parseInt(digits.join(''), 10);
    return num;
}

export const PASSWORDS_2 = genPasswords(startRange, endRange);

const final = PASSWORDS_2.filter(pass => hasExactlyADouble(pass))
console.log(final.length)

console.log(hasExactlyADouble(123999))