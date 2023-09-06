import NuBankCard from "./NuBankCard";
// Child class from NubankCard can extends and represent the same functionality as Parent class, without unexpected behavior issues
export default class CreditCard extends NuBankCard {
  validate(): void {
    console.log("Verifying credit card limit...");
  }
}
