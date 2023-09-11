import Languages from "../Enums/Languages";
import LanguageExpression from "./AbstractLanguageExpression";

export default class EnglishExpression extends LanguageExpression {
  interpret(word: string): string {
    if (word.toLowerCase() === Languages.ENGLISH) {
      return "English";
    }
    return "Unknown";
  }
}
