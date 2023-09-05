import Token from "../utils/Token";
import IMercadoPagoPayment from "./IMercadoPagoPayment";

export default class MercadoPago implements IMercadoPagoPayment {
  private mercadoToken: Token;
  authMercadoPago(): Token {
    return new Token();
  }

  sendMercadoPayment(): void {
    this.mercadoToken = this.authMercadoPago();
    if (this.mercadoToken.getToken()) {
      console.log(
        "Token recebido com sucesso!\n",
        this.mercadoToken.getToken()
      );
      console.log("Seu pagamento via MercadoPago foi enviado com sucesso!");
    }
  }
  requestMercadoPayment(): void {
    if (this.mercadoToken.getToken()) {
      console.log(
        "Token recebido com sucesso!\n",
        this.mercadoToken.getToken()
      );
      console.log(
        "Você recebeu seu pagamento via MercadoPago e já está rendendo, confira no App!"
      );
    }
  }
}
