// Create a calculator object with methods
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    calculate: function (operation, num1, num2) {
        if (this[operation]) {
            return this[operation](num1, num2);
        } else {
            return "Invalid operation!";
        }
    }
};

// Use call to perform an addition operation
const sum = calculator.calculate.call(calculator, 'add', 5, 10);
console.log(`Sum: ${sum}`);  // Output: Sum: 15

// Use apply to perform a multiplication operation with arguments as an array
const product = calculator.calculate.apply(calculator, ['multiply', 4, 5]);
console.log(`Product: ${product}`);  // Output: Product: 20

// Create another object named discountCalculator
const discountCalculator = {
    discountPercentage: 10,
    applyDiscount: function (amount) {
        const discount = (amount * this.discountPercentage) / 100;
        return amount - discount;
    }
};

// Use bind to create a new function calculateDiscount
const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);

// Example usage of calculateDiscount
const originalPrice = 200;
const finalPrice = calculateDiscount(originalPrice);
console.log(`Final Price after discount: $${finalPrice}`);  // Output: Final Price after discount: $180