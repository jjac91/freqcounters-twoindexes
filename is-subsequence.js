// add whatever parameters you deem necessary
function isSubsequence(subsequence, sequence) {
  let subsequencePointer = 0;
  let sequencePointer = 0;
  while (sequencePointer < sequence.length)
    if (subsequence[subsequencePointer] === sequence[sequencePointer]) {
      subsequencePointer++;
      sequencePointer++;
      if (subsequencePointer === subsequence.length) {
        return true;
      }
    } else {
      sequencePointer++;
    }
    return false
}
