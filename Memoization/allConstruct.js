// Recursive implementation - O(n^m)
//const allConstruct = (targetString, wordBank) => {
//    if (targetString === "") return [[]];
//
//    const result = [];
//
//    for (const word of wordBank){
//        if (targetString.indexOf(word) === 0){
//            const suffix = targetString.slice(word.length);
//            const suffixWays = allConstruct(suffix, wordBank);
//            const targetWays = suffixWays.map(way => [word, ...way]);
//            result.push(...targetWays);
//        }
//    }
//    return result;
//};

// Memoized implementation - O(n^m)
const allConstruct = (targetString, wordBank, memoObject = {}) => {
    if (targetString in memoObject) return memoObject[targetString];
    if (targetString === "") return [[]];

    const result = [];

    for (const word of wordBank){
        if (targetString.indexOf(word) === 0){
            const suffix = targetString.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memoObject);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }
    memoObject[targetString] = result;
    return result;
};

// Test cases
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); 
// [
    // ["purp", "le"],
    // ["p", "ur", "p", "le"]
// ]
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])); 
// [
    // ["ab", "cd", "ef"],
    // ["ab", "c", "def"],
    // ["abc", "def"],
    // ["abcd", "ef"],
// ]
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); 
// []
console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa"])); 
// []
