#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp, printSucces } from "./service/log.service.js";

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    printSucces("s");
  }
  if (args.t) {
    printSucces("t");
  }
  // вывести город
};

initCLI();
