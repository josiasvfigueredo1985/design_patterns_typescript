import IPaymentInstrument from "./IPaymentInstrument";
// Parent Class
export default abstract class NubankCard implements IPaymentInstrument {
  validate(): void {
    console.log("Basic validation");
  }
  collectPayment(): void {
    console.log("Collecting payment");
  }
}
