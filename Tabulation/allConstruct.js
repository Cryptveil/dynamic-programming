// Tabulated implementation of allConstruct problem - O(n^m * m) time and O(m^2) space
const allConstruct = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);
  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (const word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombinations = table[i].map((subArray) => [...subArray, word]);
        table[i + word.length].push(...newCombinations);
      }
    }
  }

  return table[target.length];
}

// Test cases
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])); // [ [ 'ab', 'cd', 'ef' ], [ 'ab', 'c', 'def' ], [ 'abc', 'def' ], [ 'abcd', 'ef' ] ]
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // []
console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // [ [ 'enter', 'a', 'p', 'ot', 'ent', 'p', 'ot' ], [ 'enter', 'a', 'p', 'ot', 'ent', 'p', 'o', 't' ], [ 'enter', 'a', 'p', 'o', 't', 'ent', 'p', 'ot' ], [ 'enter', 'a', 'p', 'o', 't', 'ent', 'p', 'o', 't' ] ]
console.log(allConstruct('aaaaaaaaaaaaaaaaaz', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa'])); // []
