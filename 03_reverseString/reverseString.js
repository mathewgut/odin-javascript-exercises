const reverseString = function(inputString) {
    let reversedString = ''
    stringSplit = inputString.split('')
    console.log(stringSplit)

    for(let i = stringSplit.length - 1; i > -1; i--){
        reversedString += stringSplit[i];
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
