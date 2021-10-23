// import { Command } from "commander";
// const program = new Command();

// program
//   .version("0.1.0")
//   .option("-p, --peppers", "Add peppers")
//   .option("-P, --pineapple", "Add pineapple")
//   .option("-b, --bbq-sauce", "Add bbq sauce")
//   .option(
//     "-c, --cheese [type]",
//     "Add the specified typeof cheese [marble]",
//     "marble"
//   )
//   // [ts] Cannot find name 'process'.
//   .parse(process.argv);
import colors from "colors";
import { Command } from "commander";
const command = new Command();
command
  .version("0.1.0")
  .option("-c, --city [name]", "Add city name")
  .parse(process.argv);
const options = command.opts();
// if (!options.city) {
//   command.outputHelp();
// }
if (process.argv.slice(2).length === 0) {
  command.outputHelp(colors.red);
  process.exit();
}

console.log(options.city);

// yarn ts-node src/index.ts --city chengdu
// true
