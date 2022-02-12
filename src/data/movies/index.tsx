import { Query } from '../types'
import highestGross from './highestGross'
import numeral from "numeral";

const movies: Query[] = [
  {
    caption: "Highest gross",
    items: highestGross,
    formatValue: (value: number) => `${numeral(value).format('($ 0.00 a)')}`
  }
]

export default movies