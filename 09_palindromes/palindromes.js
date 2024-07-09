const palindromes = function () {
    const input = palindromes.arguments[0].toLowerCase();
    words = input.replace(/[^\w\s\']/g, "");
    words = words.replace(/\s+/g, "")
    let j = words.length-1;
    for(let i = 0; i < words.length; i++){
        console.log(words[i],words[j])
        if(words[i] == words[j]){
            j--
            console.log('j: ', j, 'i: ', i)
            continue
        }else{
            return false
        }
    }
    return true
        
};

console.log(palindromes('Animal loots foliated detail of stool lamina'))

// Do not edit below this line
module.exports = palindromes;
