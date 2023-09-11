import FreeApp from "../App/FreeApp";
import PaidApp from "../App/PaidApp";
import App from "../Interfaces/IApp";

// Proxy class
export default class AppProxy implements App {
  private realApp: App | null;

  constructor(private isPaidUser: boolean) {
    this.realApp = null;
  }

  displayFeatures(): void {
    if (this.isPaidUser) {
      if (this.realApp === null) {
        this.realApp = new PaidApp();
      }
      this.realApp.displayFeatures();
    } else {
      if (this.realApp === null) {
        this.realApp = new FreeApp();
      }
      this.realApp.displayFeatures();
    }
  }
}
