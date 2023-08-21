import IDBProduct from "./IDBProduct";

export default class MongoDBProduct implements IDBProduct {
  getProductId(productId: number): string {
    return `Mongo DB Product: ${productId}`;
  }
}
