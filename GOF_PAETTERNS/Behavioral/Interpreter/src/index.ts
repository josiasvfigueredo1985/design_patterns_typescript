import LanguageContext from "./Contexts/LanguageContext";
import EnglishExpression from "./Expressions/English";
import PortugueseExpression from "./Expressions/Portuguese";
import SpanishExpression from "./Expressions/Spanish";

// Example usage
const context = new LanguageContext();
context.addExpression(new SpanishExpression());
context.addExpression(new EnglishExpression());
context.addExpression(new PortugueseExpression());

const word1 = "Hola";
const word2 = "Hello";
const word3 = "Olá";
const word4 = "Bonjour";

console.log(`${word1} is in ${context.detectLanguage(word1)}`); // Hola is in Spanish
console.log(`${word2} is in ${context.detectLanguage(word2)}`); // Hello is in English
console.log(`${word3} is in ${context.detectLanguage(word3)}`); // Olá is in Portuguese
console.log(`${word4} is in ${context.detectLanguage(word4)}`); // Bonjour is in Unknown
