const ROMAN = {
    "I": 1,
    "IV": 4,
    "V": 5,
    "IX": 9,
    "X": 10
}

class Roman {
    constructor(number) {
        this.number = number
    }
    convertBackup() {
        let romanNumber;

        if (this.number === 1) {
            romanNumber = "I"
        } else if (this.number === 2) {
            romanNumber = "II"
        } else {
            romanNumber = "III"
        }
        return romanNumber
    }
    convert() {
        let finalRomanNumber = "";
        const listOfRomanNumbers = Object.keys(ROMAN).reverse();
        for (let i = 0; i < listOfRomanNumbers.length; i++) {
            const numberInTest = ROMAN[listOfRomanNumbers[i]];
            console.log(numberInTest)
            // const subtraction = this.number - numberInTest;
            let currentNumber = this.number;

            while (currentNumber > 0) {
                const result = currentNumber - numberInTest
                console.log("result", result)
                if (result >= 0) {
                    finalRomanNumber += listOfRomanNumbers[i]
                    console.log("currentnumber", currentNumber)
                    currentNumber -= numberInTest
                    console.log("finalRoman Number", finalRomanNumber)
                }

            }
            this.number -= currentNumber
            // else if (subtraction === -1) {
            //     return finalRomanNumber = "I" + listOfRomanNumbers[i]
            // }
        }
        return finalRomanNumber;
    }
}

module.exports = Roman