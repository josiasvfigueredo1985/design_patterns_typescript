import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";
import Engine from "../components/engine";
import Transmission from "../components/transmission";

export default class Vehicle {
  private _vehicleType: VehicleType;
  private _seats: number;
  private _engine: Engine;
  private _transmission: Transmission;
  private _wheels: Wheel[] = [];

  get vehicleType() {
    return this._vehicleType;
  }
  set vehicleType(value: VehicleType) {
    this._vehicleType = value;
  }

  get seats() {
    return this._seats;
  }
  set seats(value: number) {
    this._seats = value;
  }

  get engine() {
    return this._engine;
  }

  set engine(value: Engine) {
    this._engine = value;
  }

  get transmission() {
    return this._transmission;
  }
  set transmission(value: Transmission) {
    this._transmission = value;
  }
  get wheels(): Wheel[] {
    return this._wheels;
  }

  get wheelsTotal(): number {
    return this.wheels.length;
  }

  addWheel(wheel: Wheel) {
    this._wheels.push(wheel);
  }
}
