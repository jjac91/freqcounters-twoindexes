// add whatever parameters you deem necessary
function sameFrequency(number1,number2) {
    let num1Obj = createFrequencyCounter(number1.toString())
    let num2Obj = createFrequencyCounter(number2.toString())
    for (let num in num1Obj) {
        if (num1Obj[num] !== num2Obj[num]) {
          return false;
        }
      }
      return true;   
}

function createFrequencyCounter(string) {
    let frequencies = {};
  
    for (let letter of string) {
      let valCount = frequencies[letter] || 0;
      frequencies[letter] = valCount + 1;
    }
  
    return frequencies;
  }