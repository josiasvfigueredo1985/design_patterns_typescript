// Concrete Command classes

import Command from "../Interfaces/ICommand";
import Light from "../Receiver/Light";

// These are concrete commands that encapsulate specific actions.
export default class TurnOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOff();
  }
}
