const repeatString = function(stringToRepeat,repititions) {
    stringToRepeat = String(stringToRepeat)
    repititions = Number(repititions)
    let repeatedString = ''
    for(let i = 0; i < repititions; i++){
        repeatedString += stringToRepeat;
    }
    return repeatedString;
};

repeatString("wow",5)
// Do not edit below this line
module.exports = repeatString;
