// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if(alphabet === undefined || alphabet.length != 26) {
      console.log("im in the input validation")
      return false;
    }
    
    for(let i = 0; i < alphabet.length; i++){
      if(alphabet.includes(alphabet[i], i+1)) {
        console.log(alphabet.includes(alphabet[i], i+ 1))
        return false;
      }
    }
    input = input.toLowerCase();
    

    if(encode === true) {
    const ALPHAOBJECT = {
      'a': alphabet[0],
      'b': alphabet[1],
      'c': alphabet[2],
      'd': alphabet[3],
      'e': alphabet[4],
      'f': alphabet[5],
      'g': alphabet[6],
      'h': alphabet[7],
      'i': alphabet[8],
      'j': alphabet[9],
      'k': alphabet[10],
      'l': alphabet[11],
      'm': alphabet[12],
      'n': alphabet[13],
      'o': alphabet[14],
      'p': alphabet[15],
      'q': alphabet[16],
      'r': alphabet[17],
      's': alphabet[18],
      't': alphabet[19],
      'u': alphabet[20],
      'v': alphabet[21],
      'w': alphabet[22],
      'x': alphabet[23],
      'y': alphabet[24],
      'z': alphabet[25]
    }

    let tempChar;
    let tempStr = "";
    for(let i = 0; i < input.length; i ++){
      if(input[i] === " "){
        tempStr += " ";
      }
      else{
      tempChar = ALPHAOBJECT[input[i]];
      tempStr += tempChar;
      console.log(tempChar)
    }
  }
    return tempStr;
  }
  else if(encode === false){
    
  
    const ALPHAOBJECT = {}
    ALPHAOBJECT[alphabet[0]] = 'a';
    ALPHAOBJECT[alphabet[1]] = 'b';
    ALPHAOBJECT[alphabet[2]] = 'c';
    ALPHAOBJECT[alphabet[3]] = 'd';  
    ALPHAOBJECT[alphabet[4]] = 'e';
    ALPHAOBJECT[alphabet[5]] = 'f';
    ALPHAOBJECT[alphabet[6]] = 'g';
    ALPHAOBJECT[alphabet[7]] = 'h';
    ALPHAOBJECT[alphabet[8]] = 'i';
    ALPHAOBJECT[alphabet[9]] = 'j';
    ALPHAOBJECT[alphabet[10]] = 'k';
    ALPHAOBJECT[alphabet[11]] = 'l';
    ALPHAOBJECT[alphabet[12]] = 'm';
    ALPHAOBJECT[alphabet[13]] = 'n';
    ALPHAOBJECT[alphabet[14]] = 'o';
    ALPHAOBJECT[alphabet[15]] = 'p';
    ALPHAOBJECT[alphabet[16]] = 'q';
    ALPHAOBJECT[alphabet[17]] = 'r';
    ALPHAOBJECT[alphabet[18]] = 's';
    ALPHAOBJECT[alphabet[19]] = 't';
    ALPHAOBJECT[alphabet[20]] = 'u';
    ALPHAOBJECT[alphabet[21]] = 'v';
    ALPHAOBJECT[alphabet[22]] = 'w';
    ALPHAOBJECT[alphabet[23]] = 'x';
    ALPHAOBJECT[alphabet[24]] = 'y';
    ALPHAOBJECT[alphabet[25]] = 'z';
    //console.log(ALPHAOBJECT);
    let tempChar;
    let tempStr = "";
    //console.log(input);
    for(let i = 0; i < input.length; i ++){
      if(input[i] === " "){
        tempStr += " ";
      }
      else { 
        tempChar = ALPHAOBJECT[input[i]];
        tempStr += tempChar;
        
      }
    }
    console.log(tempStr)
    return tempStr;
    
  }




  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
