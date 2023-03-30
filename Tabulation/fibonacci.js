// Tabulated version of the Fibonacci sequence - O(n) time complexity
const fibonacci = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    return table[n];
}

// Test cases
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13
console.log(fibonacci(8)); // 21
console.log(fibonacci(50)); // 12586269025
