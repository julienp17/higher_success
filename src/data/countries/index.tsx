import numeral from "numeral";
import { Query } from '../types'
import highestGDP from './highestGDP'
import mostOlympicGoldMedals from "./mostOlympicGoldMedals";
import longest from "./longest";

const countries: Query[] = [
  {
    caption: "Highest GDP",
    items: highestGDP,
    formatValue: (value: number) => `${numeral(value).format('($ 0.00 a)')}`
  },
  {
    caption: "Most olympic gold medals",
    items: mostOlympicGoldMedals,
    formatValue: "gold medals"
  },
  {
    caption: "Longest dick",
    items: longest,
    formatValue: "cm"
  },
]

export default countries