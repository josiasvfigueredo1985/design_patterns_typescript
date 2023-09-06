import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./director/Director";
import Vehicle from "./products/Vehicle";

const builder: VehicleBuilder = new VehicleBuilder();
const director: Director = new Director(builder);

director.constructSedan();

const sedan: Vehicle = builder.getVehicle();

console.log(
  `New vehicle has been created: \nType: ${sedan.vehicleType}\nNumber of Wheels: ${sedan.wheelsTotal}`
);

director.constructTruck();
const truck: Vehicle = builder.getVehicle();

console.log(
  `New vehicle has been created: \nType: ${truck.vehicleType}\nNumber of Wheels: ${truck.wheelsTotal}`
);

director.constructMotorcycle();
const moto: Vehicle = builder.getVehicle();

console.log(
  `New vehicle has been created: \nType: ${moto.vehicleType}\nNumber of Wheels: ${moto.wheelsTotal}`
);
