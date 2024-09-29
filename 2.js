const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);
console.log(`Sorted Ages: ${ages}`);

// Find the minimum and maximum age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log(`Min Age: ${minAge}, Max Age: ${maxAge}`);

// Find the median age
let medianAge;
const mid = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
    medianAge = (ages[mid - 1] + ages[mid]) / 2; // Average of the two middle numbers
} else {
    medianAge = ages[mid]; // Middle number
}
console.log(`Median Age: ${medianAge}`);

// Find the average age
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;
console.log(`Average Age: ${averageAge}`);

// Find the range of the ages
const range = maxAge - minAge;
console.log(`Range of Ages: ${range}`);

// Compare (min - average) and (max - average) using abs()
const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);
console.log(`|Min - Average|: ${minDiff}, |Max - Average|: ${maxDiff}`);
