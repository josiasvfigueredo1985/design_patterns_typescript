import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import * as readline from "readline";
import Server from "./servers/Server";
import CheckWeakPasswords from "./middlewares/CheckWeakPassword";
declare let process;
const server = new Server();

const middleware = new CheckUserMiddleware();
middleware.linkWith(new CheckPermissionMiddleware());
middleware.linkWith(new CheckWeakPasswords());
server.setMiddleware(middleware);

function setPromptQuestions() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Digite seu e-mail: ", (email) => {
    rl.question("Digite sua senha: ", (password) => {
      server.login(email, password);
      rl.close();
    });
  });
  rl.on("close", () => {
    setPromptQuestions();
  });
}

setPromptQuestions();
