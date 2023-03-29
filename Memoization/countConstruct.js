// Recursive implementation - O(n^m * m)
//const countConstruct = (targetString, wordBank) => {
//    if (targetString === "") return 1;
//    let totalCount = 0;
//    for (const word of wordBank){
//        if (targetString.indexOf(word) === 0){
//            const numWaysForRest = countConstruct(targetString.slice(word.length), wordBank);
//            totalCount += numWaysForRest;
//        }
//    }
//    return totalCount;
//};

// Memoized implementation - O(n * m^2)
const countConstruct = (targetString, wordBank, memoObject = {}) => {
    if (targetString in memoObject) return memoObject[targetString];
    if (targetString === "") return 1;
    let totalCount = 0;
    for (const word of wordBank){
        if (targetString.indexOf(word) === 0){
            const numWaysForRest = countConstruct(targetString.slice(word.length), wordBank, memoObject);
            totalCount += numWaysForRest;
        }
    }
    memoObject[targetString] = totalCount;
    return totalCount;
};


// Test cases
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // 4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"
])); // 0
