// Create a Set to store unique numbers
const uniqueNumbers = new Set([1, 2, 3, 4, 5, 2, 3, 6, 7, 8]);

// Create a Map to associate each number with its square
const numberSquares = new Map();

// Populate the Map with numbers and their squares
uniqueNumbers.forEach(num => {
    numberSquares.set(num, num * num);
});

// Print the unique numbers and their corresponding squares
console.log("Unique Numbers and their Squares:");
numberSquares.forEach((square, number) => {
    console.log(`${number}: ${square}`);
});