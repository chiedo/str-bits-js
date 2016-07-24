zeroPad = function(num) {
  return "00000000".slice(String(num).length) + num
}

strBits =  function(str) {
  var output = '';

  for (i=0; i < str.length; i++) {
    output += zeroPad(str[i].charCodeAt(0).toString(2));
  }

  return output;
}

module.exports = strBits;
