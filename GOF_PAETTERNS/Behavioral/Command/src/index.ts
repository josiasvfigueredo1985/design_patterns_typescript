import TurnOffCommand from "./Commands/TurnOff";
import TurnOnCommand from "./Commands/TurnOn";
import RemoteControl from "./Invoker/RemoteControl";
import Light from "./Receiver/Light";

// Example usage
const light = new Light();
const remoteControl = new RemoteControl();

const turnOn = new TurnOnCommand(light);
const turnOff = new TurnOffCommand(light);

remoteControl.setCommand(turnOn);
remoteControl.pressButton(); // Output: Light is on

remoteControl.setCommand(turnOff);
remoteControl.pressButton(); // Output: Light is off
