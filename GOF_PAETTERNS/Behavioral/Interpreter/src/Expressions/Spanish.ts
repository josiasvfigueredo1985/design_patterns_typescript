import LanguageExpression from "./AbstractLanguageExpression";
import Languages from "../Enums/Languages";

// Concrete Expression classes
export default class SpanishExpression extends LanguageExpression {
  interpret(word: string): string {
    if (word.toLowerCase() === Languages.SPANISH) {
      return "Spanish";
    }
    return "Unknown";
  }
}
