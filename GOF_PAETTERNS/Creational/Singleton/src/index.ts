import Singleton from "./singleton/Singleton";

// Example usage

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.assert(instance1 === instance2, "True - As expected");
instance1.loginDatabase("master@example.com", "M@5ter123"); // Granted
instance2.loginDatabase("user@example.com", "user12"); // Denied
console.assert(instance1 === instance2, "True - True As expected"); // Not displayed on output
console.assert(instance1 !== instance2, "False - False As expected"); // Displayed on Output
