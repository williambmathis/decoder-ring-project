// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if(input == "" || input == undefined || shift == 0 || shift > 25 || shift < -25 || isNaN(shift) || typeof input !== "string" ){ //check to make sure the input and shift are valid
      return false;
    }
    input = input.toLowerCase(); //send the string to lower case
    if(!encode){ //invert the value of shift if the user wants to decode instead of encode
      shift = -shift;
    }
    let result = ""; //declare empty result string
    
    if(shift > 0){ //check to see if the shift is to the right or left
    for(let i = 0; i < input.length; i++){ //loop through the input array
      let tempCharNumber = input.charCodeAt(i);


      for(let j = 0; j < Math.abs(shift); j++){ //loop through adn increment one by one until the number of shifts is reached
        if(tempCharNumber >= 97 && tempCharNumber < 122){
          tempCharNumber ++;
          
        }
        else if(tempCharNumber == 122){ //wrap the alphabet if hits the top of the range
          tempCharNumber = tempCharNumber - 26;
          tempCharNumber ++;
          
        }
        else if(tempCharNumber == 96){ //wrap the alphabet if it hits the bottom of the range
          tempCharNumber = tempCharNumber + 26;
          tempCharNumber ++;
          
        }
        
      }

      let char = String.fromCharCode(tempCharNumber); //get the character back into into letter form
      result += char;
    } 

    //console.log(result);
    return result; // return our result
  }


  else if (shift < 0) { //check to see if the shift is negative
    for(let i = 0; i < input.length; i++){
      let tempCharNumber = input.charCodeAt(i); //get the unicode value of our character


      for(let j = 0; j < Math.abs(shift); j++){
        if(tempCharNumber > 97 && tempCharNumber <= 122){
          tempCharNumber --;
          //loop through and shift to the left
        }
        else if(tempCharNumber == 123){
          tempCharNumber = tempCharNumber - 26;
          tempCharNumber --;
          
        }
        else if(tempCharNumber == 97){
          tempCharNumber = tempCharNumber + 26;
          tempCharNumber --;
          
        }
        
      }

      let char = String.fromCharCode(tempCharNumber);
      result += char;
    } 

    console.log(result);
    return result;
}
  }
  return {
    caesar,
  };
})();


 

module.exports = caesarModule.caesar;
