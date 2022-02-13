import numeral from "numeral";
import { Query } from '../types'
import highestGDP from './highestGDP'
import mostOlympicGoldMedals from "./mostOlympicGoldMedals";
import longest from "./longest";

const countries: Query[] = [
  {
    caption: "highest_gdp",
    items: highestGDP,
    unit: "",
    formatValue: (value: number) => `${numeral(value).format('($ 0.00 a)')}`
  },
  {
    caption: "most_olympic_gold_medals",
    items: mostOlympicGoldMedals,
    unit: "gold_medals"
  },
  {
    caption: "longest_penis",
    items: longest,
    unit: "cm"
  },
]

export default countries