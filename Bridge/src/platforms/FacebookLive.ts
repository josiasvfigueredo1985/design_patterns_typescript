import IPlatform from "./IPlatform";

export default class FacebookLive implements IPlatform {
  constructor() {
    this.configureRMTP();
    console.log("Transmissão iniciada!");
  }
  configureRMTP(): void {
    this.authToken();
    console.log("FacebookLive: Configurando transmissão...");
  }
  authToken(): void {
    console.log("FacebookLive: Autorizando aplicação...");
  }
}
