export default class Token {
  private token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkhDT0RFIiwiaWF0IjoxNTE2Mjg3MzkwMjJ9.cnCjJQrneay9fWop0u-W7bkjmzC4mQyVxsmnHMeBjZc";

  getToken(): string {
    return this.token;
  }
}
