import App from "../Interfaces/IApp";

// RealSubject class
export default class FreeApp implements App {
  displayFeatures(): void {
    console.log("Displaying features for free users:");
    this.freeFeatures();
  }
  private freeFeatures(): void {
    console.log("You're a free user, enjoy!");
  }
}
