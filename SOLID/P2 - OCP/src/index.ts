import TypeVehicle from "./TypeVehicle";
import Car from "./vehicles/Car";
import { Motorcycle } from "./vehicles/Motorcycle";

const type = String(TypeVehicle.CAR);
let vehicle;

// switch (type) {
//   case "CAR":
//     vehicle = new Car("Yellow", 2022, 2.0, 4, 4);
//     console.log(type);
//     break;
//   case "MOTORCYCLE":
//     vehicle = new Motorcycle("Red", 2022, 2.0);
//     console.log(type);
//     break;
//   default:
//     console.log("Unknown type");
//     break;
// }

if (type === TypeVehicle.CAR) {
  console.log("Type: " + type);
  vehicle = new Car("Yellow", 2022, 2.0, 4, 4);
} else if (type === TypeVehicle.MOTORCYCLE) {
  console.log("Type: " + type);
  vehicle = new Motorcycle("Red", 2022, 2.0);
} else {
  console.log("Unknown type: " + type);
}
