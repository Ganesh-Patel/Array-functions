import { sum, removeDuplicates, average, max, min, firstN, lastN, isSorted, frequencyCount, flatten } from './index.js';

const arr = [1, 2, 3, 4, 5, 2, 1];

console.log(sum(arr));               // Output: 18
console.log(removeDuplicates(arr));  // Output: [1, 2, 3, 4, 5]
console.log(average(arr));           // Output: 2.57
console.log(max(arr));               // Output: 5
console.log(min(arr));               // Output: 1
console.log(firstN(arr, 3));         // Output: [1, 2, 3]
console.log(lastN(arr, 3));          // Output: [4, 5, 2]
console.log(isSorted(arr));          // Output: false
console.log(frequencyCount(arr));    // Output: { '1': 2, '2': 2, '3': 1, '4': 1, '5': 1 }
console.log(flatten([arr, [6, 7]])); // Output: [1, 2, 3, 4, 5, 2, 1, 6, 7]
