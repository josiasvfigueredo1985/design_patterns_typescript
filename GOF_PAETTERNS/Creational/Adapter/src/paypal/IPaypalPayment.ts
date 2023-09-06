import Token from "../utils/Token";

export default interface IPayPalPayment {
  authToken(): Token;
  payPalPayment(): void;
  payPalReceive(): void;
}
