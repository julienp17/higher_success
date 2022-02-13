import numeral from "numeral";
import { Query } from '../types'
import highestGross from './highestGross'

const movies: Query[] = [
  {
    caption: "highest_gross",
    items: highestGross,
    unit: "",
    formatValue: (value: number) => `${numeral(value).format('($ 0.00 a)')}`
  }
]

export default movies