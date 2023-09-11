import LanguageExpression from "../Expressions/AbstractLanguageExpression";

// Context class
export default class LanguageContext {
  private expressions: LanguageExpression[] = [];

  addExpression(expression: LanguageExpression): void {
    this.expressions.push(expression);
  }

  detectLanguage(word: string): string {
    for (const expression of this.expressions) {
      const language = expression.interpret(word);
      if (language !== "Unknown") {
        return language;
      }
    }
    return "Unknown";
  }
}
