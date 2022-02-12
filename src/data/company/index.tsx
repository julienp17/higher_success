import { Query } from '../types'
import richest from './richest'
import numeral from "numeral";

const company: Query[] = [
  {
    caption: "Richest",
    items: richest,
    formatValue: (value: number) => `${numeral(value).format('($ 0.00 a)')}`
  }
]

export default company