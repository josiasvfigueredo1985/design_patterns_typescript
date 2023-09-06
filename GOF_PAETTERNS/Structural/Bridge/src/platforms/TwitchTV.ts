import IPlatform from "./IPlatform";

export default class TwitchTV implements IPlatform {
  constructor() {
    this.configureRMTP();
    console.log("Transmissão iniciada!");
  }

  configureRMTP(): void {
    this.authToken();
    console.log("TwitchTV: Configurando transmissão...");
  }
  authToken(): void {
    console.log("TwitchTV: Autorizando a aplicação...");
  }
}
