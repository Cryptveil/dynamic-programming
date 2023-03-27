// Recursive implementation - O(n^m * m)
//const bestSum = (targetSum, numbers) => {
//    if (targetSum === 0) return [];
//    if (targetSum < 0) return null;
//
//    let shortestCombination = null;
//
//    for (const number of numbers){
//        const remainder = targetSum - number;
//        const remainderCombination = bestSum(remainder, numbers);
//        if (remainderCombination !== null){
//            const combination = [...remainderCombination, number];
//            if ( shortestCombination === null || combination.length < shortestCombination.length){
//                shortestCombination = combination;
//            }
//        }
//    }
//    return shortestCombination;
//};

// Memoized implementation - O(m^2 * n)
const bestSum = (targetSum, numbers, memoObject = {}) => {
    if (targetSum in memoObject) return memoObject[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (const number of numbers){
        const remainder = targetSum - number;
        const remainderCombination = bestSum(remainder, numbers, memoObject);
        if (remainderCombination !== null){
            const combination = [...remainderCombination, number];
            if ( shortestCombination === null || combination.length < shortestCombination.length){
                shortestCombination = combination;
            }
        }
    }
    memoObject[targetSum] = shortestCombination;
    return shortestCombination;
};

// Test cases
console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]
