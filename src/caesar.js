// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if(input == "" || input == undefined || shift == 0 || shift > 25 || shift < -25 || isNaN(shift) || typeof input !== "string" ){
      return false;
    }
    input = input.toLowerCase();
    if(!encode){
      shift = -shift;
    }
    let result = "";
    
    if(shift > 0){
    for(let i = 0; i < input.length; i++){
      let tempCharNumber = input.charCodeAt(i);


      for(let j = 0; j < Math.abs(shift); j++){
        if(tempCharNumber >= 97 && tempCharNumber < 122){
          tempCharNumber ++;
          //console.log(tempCharNumber);
        }
        else if(tempCharNumber == 122){
          tempCharNumber = tempCharNumber - 26;
          tempCharNumber ++;
          //console.log(tempCharNumber);
        }
        else if(tempCharNumber == 96){
          tempCharNumber = tempCharNumber + 26;
          tempCharNumber ++;
          //console.log(tempCharNumber);
        }
        
      }

      let char = String.fromCharCode(tempCharNumber);
      result += char;
    } 

    console.log(result);
    return result;
  }


  else if (shift < 0) {
    for(let i = 0; i < input.length; i++){
      let tempCharNumber = input.charCodeAt(i);


      for(let j = 0; j < Math.abs(shift); j++){
        if(tempCharNumber > 97 && tempCharNumber <= 122){
          tempCharNumber --;
          //console.log(tempCharNumber);
        }
        else if(tempCharNumber == 123){
          tempCharNumber = tempCharNumber - 26;
          tempCharNumber --;
          //console.log(tempCharNumber);
        }
        else if(tempCharNumber == 97){
          tempCharNumber = tempCharNumber + 26;
          tempCharNumber --;
          //console.log(tempCharNumber);
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
