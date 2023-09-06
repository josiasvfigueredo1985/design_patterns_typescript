import IBuilder from "../builders/IBuilder";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";
import Engine from "../components/engine";
import Transmission from "../components/transmission";

export default class Director {
  constructor(private builder: IBuilder) {}

  constructSedan() {
    this.builder.setVehicleType(VehicleType.SEDAN);
    this.builder.setEngine(new Engine(1600));
    this.builder.setSeats(5);
    this.builder.setTransmission(Transmission.AUTOMATIC);
    this.builder.addWheel(new Wheel(15));
    this.builder.addWheel(new Wheel(15));
    this.builder.addWheel(new Wheel(15));
    this.builder.addWheel(new Wheel(15));
  }

  constructTruck() {
    this.builder.setVehicleType(VehicleType.TRUCK);
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.setEngine(new Engine(16000));
    this.builder.setTransmission(Transmission.AUTOMATIC_SEQUENTIAL);
    this.builder.setSeats(5);
  }

  constructMotorcycle() {
    this.builder.setVehicleType(VehicleType.MOTORCYCLE);
    this.builder.addWheel(new Wheel(21));
    this.builder.addWheel(new Wheel(19));
    this.builder.setEngine(new Engine(150));
    this.builder.setTransmission(Transmission.MANUAL_SEQUENTIAL);
    this.builder.setSeats(2);
  }
}
