const fibonacci = function(position) {
    // test cases only use a string for not a number tests
    // strings get converted to numbers for comparison anyways
    // meaning no change is necessary
    if (position < 0) {
        return 'OOPS'
    } else if (position == 0) {
        return 0;
    }

    let fibonacciArray = [1,1];

    for(; position > fibonacciArray.length;){
        fibonacciArray.push(fibonacciArray[fibonacciArray.length - 2]
             + fibonacciArray[fibonacciArray.length - 1])
    }
    return fibonacciArray[position-1]
};

// Do not edit below this line
module.exports = fibonacci;
