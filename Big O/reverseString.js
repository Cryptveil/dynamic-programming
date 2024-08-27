// reverse a string
// ...pretty straight forward

const string = 'Hi this is a string!';

// O(n) solution:

function reverse(string) {
    const auxString = [];
    const size = string.length - 1;
    if (!string || size < 2 || typeof string !== 'string') return 'not a string';
    
    for (let i = size; i >= 0; i--) {
        auxString.push(string[i]);
    }
    
    console.log(auxString.join(''));
}

reverse(string);