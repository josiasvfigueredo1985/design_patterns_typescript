import IPaymentInstrument from "./IPaymentInstrument";
// Parent Class
export default abstract class NuBankCard implements IPaymentInstrument {
  validate(): void {
    console.log("Basic validation");
  }
  collectPayment(): void {
    console.log("Collecting payment");
  }
}
