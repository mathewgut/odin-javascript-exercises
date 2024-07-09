const palindromes = function () {
    const input = palindromes.arguments[0].toLowerCase();
    words = input.replace(/[^\w\s\']/g, "");
    words = words.replace(/\s+/g, "")
    let j = words.length-1;
    for(let i = 0; i < words.length; i++){
        if(words[i] == words[j]){
            j--
        }else{
            return false
        }
    }
    return true
        
};

// Do not edit below this line
module.exports = palindromes;
