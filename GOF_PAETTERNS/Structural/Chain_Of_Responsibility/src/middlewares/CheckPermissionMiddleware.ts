import DataBase from "../servers/DataBase";
import PermissionType from "../servers/PermissionType";
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware {
  public check(email: string, _password: string): boolean {
    const users = DataBase.filter((item) => item.email === email);
    if (!users.length) {
      console.log("E-mail não encontrado!");
      return false;
    }
    if (users[0].permission === PermissionType.ADMIN) {
      console.log("Seja bem-vindo administrador!");
      return true;
    }
    console.log("Seja bem-vindo usuário!");
  }
}
