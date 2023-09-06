import DataBase from "./DataBase";

export default class Singleton {
  private static instance: Singleton | null = null;

  private constructor() {}

  static getInstance(): Singleton {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }

  loginDatabase(email: string, password: string): boolean {
    const access = DataBase.filter(
      (item) => item.email === email && item.password === password
    );
    if (access.length > 0) {
      console.log("Access granted!");
      console.log(access);
      return true;
    }
    console.log("Access denied!");
    return false;
  }
}
