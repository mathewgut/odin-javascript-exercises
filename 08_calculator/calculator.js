const add = function() {
	return add.arguments[0] + add.arguments[1];
};

const subtract = function() {
	return subtract.arguments[0] - subtract.arguments[1];
};

const sum = function() {
	const arg = sum.arguments[0];
  return arg.reduce((total, num) => total += num, 0);
};

const multiply = function() {
  const arg = multiply.arguments[0];
  return arg.reduce((total, num) => total * num);
};

const power = function() {
  return power.arguments[0] ** power.arguments[1];
};

const factorial = function() {
	const arg = factorial.arguments[0];
  let total = 1
  for(let i = 2; i < arg + 1; i ++){
    total = total * i;
  };
  return total;

  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
