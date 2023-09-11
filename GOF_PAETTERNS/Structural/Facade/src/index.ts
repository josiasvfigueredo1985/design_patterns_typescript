import CarFacade from "./Facade/CarFacade";

// Example usage

// The client interacts with the CarFacade to start and stop the car.
const car = new CarFacade();
car.startCar(); // Output: Starting the car... Engine started Fuel injected into the engine Air taken in Car started and ready to go!
car.stopCar(); // Output: Stopping the car... Fuel injection stopped Air flow controller turned off Engine stopped Car stopped
