const convertToCelsius = function(inputTemp) {
  let fConversion = (inputTemp -32) * 5/9;
  fConversion = Math.round(fConversion *10)/10;
  return fConversion;
};

const convertToFahrenheit = function(inputTemp) {
  let cConversion = (inputTemp *9/5) + 32;
  cConversion = Math.round(cConversion *10)/10;
  return cConversion;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
