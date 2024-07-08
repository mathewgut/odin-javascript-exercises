const removeFromArray = function(inputArray) {
    for(position in arguments){
        if(position == 0){
            continue
        }else{
            if(inputArray.indexOf(arguments[position]) == -1)
                continue
            else{
                while (inputArray.indexOf(arguments[position]) != -1){
                    inputArray.splice(inputArray.indexOf(arguments[position]), 1)
                }
            }
        }
    }
    return inputArray
};

removeFromArray([3,2,1,1,7],3,2,1)
// Do not edit below this line
module.exports = removeFromArray;