import DataBase from "../servers/DataBase";
import Middleware from "./Middleware";

export default class CheckUserMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    if (email.indexOf("@") === -1) {
      console.error("E-mail inválido!");
      return false;
    }
    if (
      !DataBase.filter(
        (item) => item.email === email && item.password === password
      ).length
    ) {
      console.error("E-mail ou senha inválidos");
      return false;
    }
    return this.checkNext(email, password);
  }
}
