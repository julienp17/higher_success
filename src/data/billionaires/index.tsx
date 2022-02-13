import numeral from "numeral";
import { Query } from '../types'
import richestPeople from "./richestPeople";

const billionaires: Query[] = [
  {
    caption: "highest_networth",
    items: richestPeople,
    unit: "",
    formatValue: (value: number) => `${numeral(value).format('($ 0.00 a)')}`
  }
]

export default billionaires