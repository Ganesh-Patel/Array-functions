// 1. Sum of All Elements
export const sum = function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
};

// 2. Remove Duplicates from Array
export const removeDuplicates = function(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
};

// 3. Get the Average of Elements
export const average = function(arr) {
    if (arr.length === 0) return 0;
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
};

// 4. Find Maximum Element
export const max = function(arr) {
    if (arr.length === 0) return undefined;
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    return maxValue;
};

// 5. Find Minimum Element
export const min = function(arr) {
    if (arr.length === 0) return undefined;
    let minValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }
    return minValue;
};

// 6. Get First N Elements
export const firstN = function(arr, n) {
    let result = [];
    for (let i = 0; i < n && i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result;
};

// 7. Get Last N Elements
export const lastN = function(arr, n) {
    let result = [];
    let startIndex = arr.length - n;
    if (startIndex < 0) startIndex = 0;
    
    for (let i = startIndex; i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result;
};

// 8. Check if Array is Sorted
export const isSorted = function(arr) {
    if (arr.length <= 1) return true;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
};

// 9. Get Frequency Count of Elements
export const frequencyCount = function(arr) {
    let frequencyMap = {};
    
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (frequencyMap[element] === undefined) {
            frequencyMap[element] = 1;
        } else {
            frequencyMap[element]++;
        }
    }
    
    return frequencyMap;
};

// 10. Flatten Nested Arrays
export const flatten = function(arr) {
    let flatArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                flatArray.push(arr[i][j]);
            }
        } else {
            flatArray.push(arr[i]);
        }
    }
    
    return flatArray;
};
