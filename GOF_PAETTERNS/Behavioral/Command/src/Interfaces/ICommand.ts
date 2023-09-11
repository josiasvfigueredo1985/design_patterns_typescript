// Command interface
// This defines the common interface for all concrete commands.
export default interface Command {
  execute(): void;
}
