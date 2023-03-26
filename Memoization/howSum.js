// Recursive implementation
//const howSum = (targetSum, numbers) => {
//    if (targetSum === 0) return [];
//    if (targetSum < 0) return null;
//
//    for (const number of numbers) {
//        const remainder = targetSum - number;
//        const remainderResult = howSum(remainder, numbers);
//        if (remainderResult !== null) {
//            return [...remainderResult, number];
//        }
//    }
//    return null;
//};

// Memoized implementation
const howSum = (targetSum, numbers, memoObject = {}) => {
    if (targetSum in memoObject) return memoObject[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (const number of numbers) {
        const remainder = targetSum - number;
        const remainderResult = howSum(remainder, numbers, memoObject);
        if (remainderResult !== null) {
            memoObject[targetSum] = [...remainderResult, number];
            return memoObject[targetSum];
        }
    }
    memoObject[targetSum] = null;
    return null;
};

console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])); // null
