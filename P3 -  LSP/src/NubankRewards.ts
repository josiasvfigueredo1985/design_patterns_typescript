import IPaymentInstrument from "./IPaymentInstrument";
// Class that implements as same the Parent class, without compromise the Parent class
export default class NubankRewards implements IPaymentInstrument {
  validate(): void {
    console.log("Validating rewards score");
  }
  collectPayment(): void {
    console.log("Pay with rewards score!");
  }
}
