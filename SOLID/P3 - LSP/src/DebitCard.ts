import NuBankCard from "./NuBankCard";
// Child class from NubankCard can extends and represent the same functionality as Parent class, without unexpected behavior issues
export default class DebitCard extends NuBankCard {
  validate(): void {
    console.log("Verifying debit card limit...");
  }
}
