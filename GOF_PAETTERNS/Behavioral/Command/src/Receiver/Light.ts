// Receiver
// This represents the receiver of the command, which knows how to perform the action.
export default class Light {
  turnOn(): void {
    console.log("Light is on");
  }

  turnOff(): void {
    console.log("Light is off");
  }
}
