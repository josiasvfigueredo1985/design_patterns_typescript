export default interface IClient {
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
}
