import DB from "../model/DB";
import IDBProduct from "../model/IDBProduct";
import MYSQLProduct from "../model/MYSQLProduct";
import MongoDBProduct from "../model/MongoDBProduct";

export default class DBFactory {
  private static type: DB = DB.MongoDB;
  public static create(): IDBProduct | undefined {
    {
      if (DBFactory.type === DB.MYSQL) {
        return new MYSQLProduct();
      } else if (DBFactory.type === DB.MongoDB) {
        return new MongoDBProduct();
      } else {
        return undefined;
      }
    }
  }
}
