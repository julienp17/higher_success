import numeral from "numeral";
import { Query } from '../types'
import richestPeople from "./richestPeople";

const billionaires: Query[] = [
  {
    caption: "Highest networth",
    items: richestPeople,
    formatValue: (value: number) => `${numeral(value).format('($ 0.00 a)')}`
  }
]

export default billionaires