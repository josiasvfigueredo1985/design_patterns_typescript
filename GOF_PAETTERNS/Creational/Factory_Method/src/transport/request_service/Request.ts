import Services from "../enums/services";
import BikeTransport from "../vehicle_factory/BikeTransport";
import CarTransport from "../vehicle_factory/CarTransport";
import MotorcycleTransport from "../vehicle_factory/MotorcycleTransport";
import Transport from "../vehicle_factory/Transport";
import RequestService from "./RequestService";

export default class RequestUber extends RequestService {
  requestUber(service: string): void {
    this.requestService(service);
  }
  protected requestService(service: string): void {
    let transport: Transport;
    service = service.toUpperCase();

    if (Services[0].includes(service)) {
      transport = new CarTransport();
      transport.startTransport();
    } else if (Services[1].includes(service)) {
      transport = new MotorcycleTransport();
      transport.startTransport();
    } else if (Services[2].includes(service)) {
      transport = new BikeTransport()
      transport.startTransport()
    } else {
      console.error(
        "We terribly sorry but the selected service is not available yet!"
      );
    }
  }
}
