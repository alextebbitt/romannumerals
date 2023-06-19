const Roman = require("./Roman")

test("Converts 1 to a roman numeral I", () => {
    const numberToConvert = 1;
    const roman = new Roman(numberToConvert);

    const result = roman.convert();

    expect(result).toBe("I");
})

test("Converts 2 to a roman numeral II", () => {
    const numberToConvert = 2;
    const roman = new Roman(numberToConvert);

    const result = roman.convert();

    expect(result).toBe("II");
})

test("Converts 3 to a roman numeral III", () => {
    const numberToConvert = 3;
    const roman = new Roman(numberToConvert);

    const result = roman.convert();

    expect(result).toBe("III");
})

test.only("Converts 4 to a roman numeral IV", () => {
    const numberToConvert = 4;
    const roman = new Roman(numberToConvert);

    const result = roman.convert();

    expect(result).toBe("IV");
})

test("Converts 5 to a roman numeral V", () => {
    const numberToConvert = 5;
    const roman = new Roman(numberToConvert);

    const result = roman.convert();

    expect(result).toBe("V");
})