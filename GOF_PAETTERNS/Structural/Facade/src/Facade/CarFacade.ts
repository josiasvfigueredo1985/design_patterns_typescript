import Engine from "../Subsystem1/Engine";
import FuelInjector from "../Subsystem2/FuelInjector";
import AirFlowController from "../Subsystem3/AirFlowController";

// Facade
// This is the facade class that provides a simplified interface

// to the complex subsystems.
export default class CarFacade {
  private engine: Engine;
  private fuelInjector: FuelInjector;
  private airFlowController: AirFlowController;

  constructor() {
    this.engine = new Engine();
    this.fuelInjector = new FuelInjector();
    this.airFlowController = new AirFlowController();
  }

  startCar(): void {
    console.log("Starting the car...");
    this.engine.start();
    this.fuelInjector.inject();
    this.airFlowController.takeAir();
    console.log("Car started and ready to go!");
  }

  stopCar(): void {
    console.log("Stopping the car...");
    this.fuelInjector.stopInjection();
    this.airFlowController.off();
    this.engine.stop();
    console.log("Car stopped");
  }
}
