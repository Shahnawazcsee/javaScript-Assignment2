// Create a Map to store contact information
const contacts = new Map();

// Function to add a contact
function addContact(name, age, email, location) {
    contacts.set(name, { age, email, location });
}

// Function to retrieve contact details by name
function getContact(name) {
    if (contacts.has(name)) {
        return contacts.get(name);
    } else {
        return `Contact not found for ${name}.`;
    }
}

// Adding some contacts
addContact("Ac", 28, "abc@example.com", "ab");
addContact("Bc", 32, "bcd@example.com", "bc");
addContact("Ca", 25, "acd@example.com", "Cd");

// Retrieving contact details
console.log(getContact("Ac"));   
console.log(getContact("Bc"));     
console.log(getContact("Ca")); 
console.log(getContact("Da"));  
