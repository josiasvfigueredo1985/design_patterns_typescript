import PayonnerAdapter from "./adapters/PayonnerAdapter";
import IPayonnerPayment from "./payoneer/IPayonnerPayment";
import Payonner from "./payoneer/Payonner";
import IPayPalPayment from "./paypal/IPaypalPayment";
import PayPal from "./paypal/PayPal";

const payment: IPayPalPayment = new PayonnerAdapter(new Payonner());

payment.payPalPayment();
payment.payPalReceive();
