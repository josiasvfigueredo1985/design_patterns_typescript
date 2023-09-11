import App from "../Interfaces/IApp";

// RealSubject class
export default class PaidApp implements App {
  displayFeatures(): void {
    console.log("Displaying all features for paid users:");
    this.exclusiveFeatures();
  }

  private exclusiveFeatures(): void {
    console.log("You're now an exclusive user!");
    this.feature2();
  }

  private feature1(): void {
    let detail = "";
    for (let i = 0; i < 57; i++) {
      detail += "*";
    }
    console.log(detail);
  }
  private feature2(): void {
    this.feature1();
    console.log("Thank you for you purchase! You're a premium user now!!!!");
    this.feature1();
  }
}
