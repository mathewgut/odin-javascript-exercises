const sumAll = function(intOne, intTwo) {
    intOne = Number(intOne);
    intTwo = Number(intTwo);

    let sumTotal = 0;
    let smallToBig = [];

    intOne >= intTwo ? smallToBig.push(intOne) && 
    smallToBig.push(intTwo) : false;

    intTwo >= intOne ? smallToBig.push(intOne) && 
    smallToBig.push(intTwo) : false;

    for(let i = smallToBig[0]; i < (smallToBig[1] +1); i++){
        sumTotal += i;
    }
    console.log(sumTotal)
    console.log(smallToBig)
    return sumTotal;
};

sumAll(3,5)

// Do not edit below this line
module.exports = sumAll;
