import MercadoPago from "../mercadopago/MercadoPago";
import IPayPalPayment from "../paypal/IPaypalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayment {
  constructor(private mercadoPago: MercadoPago) {}

  token: Token;
  authToken(): Token {
    return this.mercadoPago.authMercadoPago();
  }
  payPalPayment(): void {
    this.mercadoPago.sendMercadoPayment();
  }
  payPalReceive(): void {
    this.mercadoPago.requestMercadoPayment();
  }
}
