import Singleton from "./Singleton";

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.assert(instance1 === instance2, "True - As expected");
instance1.loginDatabase("master@example.com", "M@5ter123"); // Granted
instance2.loginDatabase("user@example.com", "user12"); // Denied
console.assert(instance1 === instance2, "True - As expected");
console.assert(instance1 !== instance2, "False - As expected");
