import Token from "../utils/Token";
import IPayonnerPayment from "./IPayonnerPayment";

export default class Payonner implements IPayonnerPayment {
  private payonnerToken: Token;
  authToken(): Token {
    return new Token();
  }
  sendPayment(): void {
    console.log("Payonner token sent...");
    
      this.payonnerToken = this.authToken();
      console.log(this.payonnerToken.getToken());
    if (this.payonnerToken.getToken()) {
      console.log("Payonner token ok, sending payment...");
    }
  }
  receivePayment(): void {
    console.log("Payonner token received...");
    console.log(this.payonnerToken.getToken());
    if (this.payonnerToken.getToken()) {
      console.log("Payonner token ok, processing payment...");
    }
  }
}
