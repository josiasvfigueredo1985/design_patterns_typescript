import DBFactory from "../factory/DBFactory";

export default class Payment {
  pay(productId: number): void {
    try {
      const dbProduct = DBFactory.create();
      const product = dbProduct?.getProductId(productId);
      console.log(product);
    } catch (err) {
      console.log(err);
    }
  }
}
