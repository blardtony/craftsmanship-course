
function leapYear(input){
    return (input % 4 === 0) && ((input % 400 === 0 ) || (input % 100 !== 0));
}

module.exports = { leapYear };
