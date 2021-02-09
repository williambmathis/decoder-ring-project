// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    if(input == undefined){ //check to make sure that input is given
      return false;
    }
    
    input = input.toLowerCase(); //send our input to the lowercase
    
    const polybiusEncodeObj = { //create an object to the store the values of each letter in our alphabet
      a: "11",
      b: "21",
      c: "31",
      d: "41", 
      e: "51", 
      f: "12", 
      g: "22", 
      h: "32", 
      i: "42",
      j: "42", 
      k: "52",
      l: "13",
      m: "23",
      n: "33", 
      o: "43",
      p: "53", 
      q: "14",
      r: "24",
      s: "34",
      t: "44",
      u: "54",
      v: "15",
      w: "25",
      x: "35",
      y: "45",
      z: "55"
    }

    const polybiusDecodeObj = { //create an object to store the value of each number
      "11": 'a',
      "21": 'b',
      "31": 'c',
      "41": 'd', 
      "51": 'e', 
      "12": 'f', 
      "22": 'g', 
      "32": 'h', 
      "42": '(i/j)', 
      "52": 'k',
      "13": 'l',
      "23": 'm',
      "33": 'n', 
      "43": 'o',
      "53": 'p', 
      "14": 'q',
      "24": 'r',
      "34": 's',
      "44": 't',
      "54": 'u',
      "15": 'v',
      "25": 'w',
      "35": 'x',
      "45": 'y',
      "55": 'z',
      "70": ' '
    }
  
let tempChar;
let tempStr = "";

if(encode === true){ //check to see if the user is encoding or decoding
  for(let i =0; i < input.length; i++){ //loop through the input
    let charValue = input.charCodeAt(i); 
    if(charValue >= 97 && charValue <= 122 ){ //check to make sure the character is a letter
    tempChar = polybiusEncodeObj[input[i]];
    tempStr += tempChar;
    }
    else { //add a space if the character is a space
      tempStr += " ";

    }
  }
  
  return tempStr;
}

else if (encode === false) { //check to see if the user wants to decode

for(let j = 0; j < input.length; j++){
  if(input.charCodeAt(j) === 32){
    input = input.replace(' ', '70'); //replace all spaces in the string with the number 70, this is done so that my function will read as if space were any other letter in the alphabet
  }                                   //70 is defined in our decoder object above so that it will equal a space
}
if(input.length % 2 ==1){ //make sure that the input string is an even number
  
  return false;
}


  for(let i =0; i < input.length; i++){ //loop through the
    
    

    if (i%2 == 0) { //stop at every second character so that we can look at the number in front of it as well
                    // this is necessary so that the numbers are grouped into pairs
    let num = `${input[i]}${input[i+1]}`
    tempChar = polybiusDecodeObj[num];
    tempStr += tempChar;
    
  }
   
}
  
  return tempStr;
}
  
  
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
