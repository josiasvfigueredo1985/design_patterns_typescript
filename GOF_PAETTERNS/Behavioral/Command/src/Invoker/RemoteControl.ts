import Command from "../Interfaces/ICommand";

// Invoker
// This represents the invoker of the command and executes the command when needed.
export default class RemoteControl {
  private command: Command | null;

  setCommand(command: Command): void {
    this.command = command;
  }

  pressButton(): void {
    if (this.command) {
      this.command.execute();
    }
  }
}
