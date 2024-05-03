interface VehicleSummary {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic: VehicleSummary = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

const printVehicle = (vehicle: VehicleSummary): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
