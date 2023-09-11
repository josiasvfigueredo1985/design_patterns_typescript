import Languages from "../Enums/Languages";
import LanguageExpression from "./AbstractLanguageExpression";

export default class PortugueseExpression extends LanguageExpression {
  interpret(word: string): string {
    if (word.toLowerCase() === Languages.PORTUGUESE) {
      return "Portuguese";
    }
    return "Unknown";
  }
}
