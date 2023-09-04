export default class Engine {
  constructor(private _power: number) {
    // The "_" symbol makes mandatory to the property to have a getter and setter method
  }

  get power(): number {
    return this._power;
  }
  set power(power: number) {
    this._power = power;
  }
}
