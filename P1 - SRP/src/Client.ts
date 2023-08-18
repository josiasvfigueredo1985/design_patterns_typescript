import Helpers from "./Helpers";
import IClient from "./IClient";

export default class Client implements IClient {
  FirstName: string;
  LastName: string;
  Email: string;
  Age: number;
  PhoneNumber: string | number;
  Address: {
    Street: string;
    Number?: number;
    Province?: string;
    City: string;
    Country: string;
  };
  Role?: string;
  Interests?: string[];

  constructor() {
    this.FirstName = "";
    this.LastName = "";
    this.Email = "";
    this.Age = 0;
    this.PhoneNumber = "";
    this.Address = {
      Street: "",
      City: "",
      Country: "",
    };
  }

  create(
    FirstName: string,
    LastName: string,
    Email: string,
    Age: number,
    PhoneNumber: string | number,
    Address: {
      Street: string;
      Number?: number;
      Province?: string;
      City: string;
      Country: string;
    },
    Role?: string,
    Interests?: string[]
  ): this {
    // When an object is the same type as it´s class, then "this" can be used to represent it
    console.log("Creating new client...\n");
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Email = Email;
    this.Age = Age;
    this.PhoneNumber = PhoneNumber;
    this.Address = Address;
    this.Role = Role;
    this.Interests = Interests;
    console.log("New Client created:\n");
    console.log(this);
    return this;
  }

  read(): void {
    console.log("Reading client...\n");
    for (const key in this) {
      if (typeof this[key] === "object") {
        console.log(this[key.valueOf()]);
      } else {
        console.log(this[key]);
      }
    }
  }

  update(ClientKey: string, ClientValue: string): Client {
    const reg = new Helpers();

    console.log("Updating new client...\n");
    let updatedClient;
    try {
      if (reg.StringRegex(ClientValue)) {
        updatedClient = this[ClientKey] = ClientValue;
        console.log(this);
      } else {
        console.log("Client not updated\n");
      }
    } catch (err) {
      console.log("Error updating client:\n'" + err.message);
    } finally {
      console.log("Updated process ended!");
    }
    return updatedClient;
  }

  delete(): boolean {
    console.log("Deleting client...\n");
    for (const key in this) {
      if (this.hasOwnProperty(key)) {
        if (typeof this[key] === "object") {
          this[key.valueOf()] = {};
        } else {
          this[key.valueOf()] = "";
        }
      }
    }
    const values = Object.values(this);
    const delClient = values.some((value) => value === "" || value === null);
    if (delClient) {
      console.log("Client successfully deleted:\n");
      console.log(this.valueOf());
      return delClient;
    } else {
      console.log("Error: Client not deleted");
      return delClient;
    }
  }
}
