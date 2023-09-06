export default class Helpers {
  StringRegex(Value: string): boolean {
    const regex = /^[A-Za-z]+$/;
    return regex.test(Value);
  }
}
