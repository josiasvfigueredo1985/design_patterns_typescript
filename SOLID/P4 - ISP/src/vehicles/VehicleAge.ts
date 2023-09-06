export default class VehicleAge {
  vehicleYearCalculation(vehicleYear: number): number {
    const year = new Date();
    let currentYear = year.getFullYear();

    return vehicleYear - currentYear;
  }
}
