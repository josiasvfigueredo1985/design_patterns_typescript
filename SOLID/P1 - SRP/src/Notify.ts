import Client from "./Client";

export default class Notify {
  constructor(private client: Client) {}

  sendEmail(): boolean {
    const email = this.client.Email;
    if (email) {
      console.log(
        "Sending email to client..." +
          this.client.FirstName +
          " " +
          this.client.LastName
      );
      console.log("Email sent to: " + this.client.Email);
      return true;
    }
    console.log(
      "Email not sent to client: " +
        this.client.FirstName +
        " " +
        this.client.LastName
    );
    return false;
  }
}
