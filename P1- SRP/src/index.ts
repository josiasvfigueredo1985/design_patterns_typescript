import Client from "./Client";
import Notify from "./Notify";

const client = new Client();
const Address = client.Address;
const notification = new Notify(client);

Address.City = "San Francisco";
Address.Number = 154;
Address.Street = "Los Locos St.";
Address.Country = "US";

client.create(
  "Jhonn",
  "Smith",
  "jhon_smith_1890@gmail.com",
  98,
  "+55 120998-988",
  Address,
  "TI Analyst"
);

notification.sendEmail();
client.read();
client.update("FirstName", "Dimitrii");
notification.sendEmail();
client.delete();
notification.sendEmail();
