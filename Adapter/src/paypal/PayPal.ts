import Token from "../utils/Token";
import IPayPalPayment from "./IPaypalPayment";

export default class PayPal implements IPayPalPayment {
  private token: Token;
  authToken(): Token {
    return new Token();
  }
  payPalPayment(): void {
    this.token = this.authToken();
    if (this.token.getToken()) {
      console.log("Token:", this.token.getToken());
      console.log("Sending payment to PayPal...");
    }
  }
  payPalReceive(): void {
    this.token = this.authToken();
    if (this.token.getToken()) {
      console.log("Token:", this.token.getToken());
      console.log("Receiving payment from PayPal...");
    }
  }
}
