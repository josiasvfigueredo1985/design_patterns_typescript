import IDBProduct from "./IDBProduct";

export default class MYSQLProduct implements IDBProduct {
  getProductId(productId: number): string {
    return `MYSQL Product: ${productId}`;
  }
}
