import Client from "./vehicles/client/Client";
import Company from "./vehicles/consts/Company";
import LimeTransport from "./vehicles/factories/LimeTransport";
import NineNineTransport from "./vehicles/factories/NIneNineTransport";
import UberTransport from "./vehicles/factories/UberTransport";
import ITransportFactory from "./vehicles/factories/interfaces/ITransportFactory";

const currentCompany = Company.LIME;
let factory: ITransportFactory | null = null;
switch (currentCompany) {
  case Company.NINE_NINE:
    factory = new NineNineTransport();
    break;
  case Company.UBER:
    factory = new UberTransport();
    break;
  case Company.LIME:
    factory = new LimeTransport();
    break;
  default:
    console.error("Unknown company");
}
if (factory) {
  const client = new Client(factory);
  client.startRoute();
}
