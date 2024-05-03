class Vehicle {
  constructor(public colour: string) {}

  protected drive(): void {
    console.log("chugga chugga");
  }

  public honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.colour);

class Car extends Vehicle {
  constructor(public wheels: number, colour: string) {
    super(colour);
  }
  drive(): void {
    console.log("vroom");
  }
  public startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(4, "red");
car.startDrivingProcess();
car.honk();
