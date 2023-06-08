// this exo will be solved using regExpressions 

const codes = 'F12Q8_30A8a and F1Q8A1 or F9Q5AA2 or F20Q8_16A8 and F1Q8#A3';

// const allCodes = codes.split(/ and | or /); it can be done as well with
const allCodes = codes.match(/F\d+Q\d+(?:_\d+)?A\d+/g);

const validCodes = allCodes.filter((code) => /^F\d+Q\d+(?:_\d+)?A\d+$/.test(code));

const invalidCodes = allCodes.filter((code) => !/^F\d+Q\d+(?:_\d+)?A\d+$/.test(code));

console.log('All Codes:', allCodes);
console.log('Valid Codes:', validCodes);
console.log('Invalid Codes:', invalidCodes);
