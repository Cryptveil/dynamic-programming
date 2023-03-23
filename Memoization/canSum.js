// Recursive implementation
//const canSum = (targetSum, numberArray) => {
//    if (targetSum === 0) return true;
//    if (targetSum < 0) return false;
//    for (const number of numberArray){
//        const remainder = targetSum - number;
//        if (canSum(remainder, numberArray)) return true;
//    }
//    return false;
//};

// Memoized implementation
const canSum = (targetSum, numberArray, memoObject = {}) => {
    if (targetSum in memoObject) return memoObject[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (const number of numberArray){
        const remainder = targetSum - number;
        if (canSum(remainder, numberArray, memoObject)) {
            memoObject[targetSum] = true;
            return true;
        }
    }
    memoObject[targetSum] = false;
    return false;
};

// Test cases
console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 5, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false
console.log(canSum(1000, [7, 14, 32, 55, 2, 1, 30])); // true
