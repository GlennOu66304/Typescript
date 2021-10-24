import axios, { AxiosResponse } from "axios";
import colors from "colors";
import { Command } from "commander";
const command = new Command();
command
  .version("0.1.0")
  .option("-c, --city [name]", "Add city name")
  .parse(process.argv);
const options = command.opts();
// if (!options.city)
//   command.outputHelp();
// }
if (process.argv.slice(2).length === 0) {
  command.outputHelp(colors.red);
  process.exit();
}

interface IWeatherResponse {
  status: string;
  count: string;
  info: string;
  infocode: string;
  lives: ILive[];
}

interface ILive {
  province: string;
  city: string;
  adcode: string;
  weather: string;
  temperature: string;
  winddirection: string;
  windpower: string;
  humidity: string;
  reporttime: string;
}

const URL = "https://restapi.amap.com/v3/weather/weatherInfo";
const KEY = "8f0a0f4ab810efdc745636f75395dd9c";

axios
  .get(
    `${URL}?city=${encodeURI(options.city)}&key
=${KEY}`
  )
  .then((res) => {
    // (property) AxiosResponse any>.data: any
    console.log(res.data);
  });
// const log = console.log;
// axios
//   .get(
//     `${URL}?city=${encodeURI(options.city)}&key
// =${KEY}`
//   )
//   .then((res: AxiosResponse<IWeatherResponse>) => {
//     console.log(res.data.lives);
//     // const live = res.data.lives[0];
//     // log(colors.yellow(live.reporttime));
//     // log(colors.white(`${live.province} ${live.city}`));
//     // log(colors.green(`${live.weather} ${live.temperature}`));
//   });
