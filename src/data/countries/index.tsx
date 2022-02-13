import numeral from "numeral";
import { Query } from '../types'
import highestGDP from './highestGDP'
import mostOlympicGoldMedals from "./mostOlympicGoldMedals";
import longest from "./longest";

const countries: Query[] = [
  {
    caption: "highest_gdp",
    items: highestGDP,
    formatValue: (value: number) => `${numeral(value).format('($ 0.00 a)')}`
  },
  {
    caption: "most_olympic_gold_medals",
    items: mostOlympicGoldMedals,
    formatValue: "gold_medals"
  },
  {
    caption: "longest_penis",
    items: longest,
    formatValue: "cm"
  },
]

export default countries