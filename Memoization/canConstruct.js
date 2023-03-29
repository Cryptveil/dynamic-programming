// Recursive implementation
//const canConstruct = (targetString, wordBank) => {
//    if (targetString === "") return true;
//    
//    for (const word of wordBank){
//        if (targetString.indexOf(word) === 0){
//            const suffix = targetString.slice(word.length);
//            if (canConstruct(suffix, wordBank)) return true;
//        }
//    }
//    return false;
//};

// Memoized implementation
const canConstruct = (targetString, wordBank, memoObject = {}) => {
    if (targetString in memoObject) return memoObject[targetString];
    if (targetString === "") return true;
    
    for (const word of wordBank){
        if (targetString.indexOf(word) === 0){
            const suffix = targetString.slice(word.length);
            if (canConstruct(suffix, wordBank, memoObject)){
                memoObject[targetString] = true;
                return true;
            }
        }
    }
    memoObject[targetString] = false;
    return false;
};


// Test cases
console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"
])); // false
