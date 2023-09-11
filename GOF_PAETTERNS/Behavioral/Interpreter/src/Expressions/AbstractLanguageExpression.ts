// Abstract Expression class
export default abstract class LanguageExpression {
  abstract interpret(word: string): string;
}
