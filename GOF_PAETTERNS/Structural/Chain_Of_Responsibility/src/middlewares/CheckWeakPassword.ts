import Middleware from "./Middleware";

export default class CheckWeakPasswords extends Middleware {
  private checkPwd = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])/;

  public check(_email: string, password: string): boolean {
    if (!this.checkPwd.test(password)) {
      console.log("Sua senha aparenta  estar fora dos padrões.");
      console.log(
        "Considere altera - la adicionando símbolos, números e pelo menos 1 letra maiúscula!"
      );
      console.log("Exemplo: P@55word");
      return true;
    } else {
      console.log("Senha em conformidade!");
      return true;
    }
  }
}
