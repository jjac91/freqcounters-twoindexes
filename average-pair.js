// add whatever parameters you deem necessary
function averagePair(arr, desiredAvg) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  while (leftPointer < rightPointer) {
    let avg = (arr[leftPointer] + arr[rightPointer]) / 2;
    if (avg > desiredAvg) {
      rightPointer--;
    } else if (avg < desiredAvg) {
      leftPointer++;
    }else return true
  }
  return false
}
