import numeral from "numeral";
import { Query } from '../types'
import highestGDP from './highestGDP'
import mostOlympicGoldMedals from "./mostOlympicGoldMedals";

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
  }
]

export default countries