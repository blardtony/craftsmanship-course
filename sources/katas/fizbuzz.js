
function fizzbuzz(input) {
    res = "";
    if (input % 3 == 0) {
        res += "fizz";
    }    
    if (input % 5 == 0) {
        res += "buzz";
    }
    return res === "" ? String(input) : res;
}

module.exports = { fizzbuzz };
