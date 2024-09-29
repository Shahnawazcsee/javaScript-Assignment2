// Function to display information
function displayInfo(name, role) {
    console.log(`Name: ${name}, Role: ${role}`);
}

// Using call to invoke displayInfo with specific arguments
displayInfo.call(null, "Alice", "Developer"); 
// Output: Name: Alice, Role: Developer

// Using apply to invoke displayInfo with arguments passed as an array
displayInfo.apply(null, ["Bob", "Designer"]); 
// Output: Name: Bob, Role: Designer

// Another function to log a greeting
function greet() {
    console.log(`Hello, I'm ${this.name}, and I work as a ${this.role}.`);
}

// Object to be used as context for the greet function
const person = {
    name: "ab",
    role: "st"
};

// Using bind to create a new function with a specific context
const boundGreet = greet.bind(person);

// Logging the greeting using the bound function
boundGreet(); 
// Output: Hello, I'm Charlie, and I work as a Manager.
