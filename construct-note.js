// add whatever parameters you deem necessary
function constructNote(message, letters) {
  if (letters.length === 0) return false;
  if (message.length === 0) return true;
  let messageObj = createFrequencyCounter(message);
  let lettersObj = createFrequencyCounter(letters);
  for (let key in messageObj) {
    if (messageObj[key] > lettersObj[key]||lettersObj[key]===undefined) {
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
