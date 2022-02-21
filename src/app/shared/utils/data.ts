import { Utils } from "./utils";

const DATA_COUNT = 12;
const NUMBER_CONFIG = {min: 0, max: 300};
const MONTHS = Utils.months({count: DATA_COUNT});
const COUNTRIES = Utils.countries({count: 4});

const multiData = [];

COUNTRIES.forEach((country: string) => {
  const dataset = { "name": country, "series": [] };
  
  for (let i = 0; i < DATA_COUNT; ++i) {
    dataset.series.push({ "name": MONTHS[i], value: Utils.number(NUMBER_CONFIG)})
  }

  multiData.push(dataset);
});

export var multi = multiData;

const singleData = [];

COUNTRIES.forEach((country: string) => {
  const value = multiData.find(x => x.name == country).series[DATA_COUNT - 1].value;
  singleData.push({ "name": country, value: value});
});

export var single = singleData;
  