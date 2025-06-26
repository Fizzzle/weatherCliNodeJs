import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed("ERROR") + " " + error);
};

const printSucces = (message) => {
  console.log(chalk.bgGreen("message") + " " + message);
};

const printHelp = () => {
  console.log(
    dedent(`${chalk.bgCyan(" HELP ")} 
    Без параметров - выводов погоды 
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для сохранения токена
    `)
  );
};

export { printError, printSucces, printHelp };
