// Will be given an array of numbers
// Need to find the sum 8 between 2 of those numbers
// Return a boolean

// Naive solution:

const array1 = [1, 2 , 3, 9] // false
const array2 = [1, 2, 4, 4] // true

function checkSum1(array) {
    for (let i=0; i < array.length-1; i++) { // array.length - 1 bc I should never get to the end of the array in this loop
            for (let j=i+1; j < array.length; j++) { // j = i + 1 bc I should never compare an index with itself
                if (array[i] + array[j] === 8) return true; // this assumes the sum is 8 always, if not, it would be a parameter
            }
    }
    return false
}

// Better solution:

function checkSum2(array) {
    const mySet = new Set();

    for (let i = 0; i < array.length; i++){
        if (mySet.has(array[i])) return true; // if my set has the complement of the number in the array, return true (because it sums to 8)
        
        mySet.add(8 - array[i]); // again assuming the sum is always 8, but it finds the complement value to get the sum 8
    }
    return false;
}

console.log(checkSum1(array2))
console.log(checkSum2(array2))

// we could improve the code by adding the sum parameter
// we should also know if there's enough memory for the received array

