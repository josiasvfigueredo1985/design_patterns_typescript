import Token from "../utils/Token";

export default interface IMercadoPagoPayment {
  authMercadoPago(): Token;
  sendMercadoPayment(): void;
  requestMercadoPayment(): void;
}
