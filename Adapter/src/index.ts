import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PayonnerAdapter from "./adapters/PayonnerAdapter";
import MercadoPago from "./mercadopago/MercadoPago";
import Payonner from "./payonner/Payonner";
import IPayPalPayment from "./paypal/IPaypalPayment";

const payment1: IPayPalPayment = new PayonnerAdapter(new Payonner());

payment1.payPalPayment();
payment1.payPalReceive();

const payment2: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago());

payment2.payPalPayment();
payment2.payPalReceive();
