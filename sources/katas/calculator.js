
/**
 * 
 * @param {string} numbers 
 * @returns {numbers}
 */
function add(numbers){
    if (!numbers) {
        return 0;
    }

    let stringPatten = "[,\n]";

    if (numbers.startsWith("//")) {
        let sub = numbers.substring(2, numbers.indexOf('\n'));
        stringPatten = "[" + sub + "]"
        numbers = numbers.substring(numbers.indexOf('\n'))
    }

    const regexPattern = new RegExp(stringPatten, 'g');

    let numbersArray = numbers.split(regexPattern).filter(value => value).map(value => parseInt(value));
    
    let negativeArray = numbersArray.filter(value => value < 0);

    if (negativeArray.length) {
        let errorMessage = "negative numbers not supported: " + negativeArray.join(" ");
        throw new Error(errorMessage);
    }
    
    return numbersArray.reduce((a, b) => a + b, 0);
}

module.exports = { add };
