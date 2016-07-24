module.exports =  function(str) {
  var output = '';

  for (i=0; i < str.length; i++) {
    output += str[i].charCodeAt(0).toString(2);
  }

  return output;
}
