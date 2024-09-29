// Create two person objects
const person1 = {
    name: "Ac",
    age: 23
};

const person2 = {
    name: "bc",
    age: 24
};

// Function to introduce a person
function introduce() {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}

// Use the call method to make person2 introduce itself
introduce.call(person2);  // Output: Hello, I'm Bob, and I'm 32 years old.
