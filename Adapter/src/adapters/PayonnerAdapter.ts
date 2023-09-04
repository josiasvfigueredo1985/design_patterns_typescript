import Payonner from "../payoneer/Payonner";
import IPayPalPayment from "../paypal/IPaypalPayment";
import Token from "../utils/Token";

export default class PayonnerAdapter implements IPayPalPayment {
  constructor(private payonner: Payonner) {
    console.log("Adapting Payonner using PayPalPayment...");
  }

  authToken(): Token {
    return this.payonner.authToken();
  }
  payPalPayment(): void {
    return this.payonner.sendPayment();
  }
  payPalReceive(): void {
    return this.payonner.receivePayment();
  }
}
