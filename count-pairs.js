// add whatever parameters you deem necessary
function countPairs(arr, goal) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let pairs = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === goal) {
      pairs++;
      left++;
      right--;
    } else if (sum > goal) {
      right--;
    } else {
      left++;
    }
  }
  return pairs;
}
