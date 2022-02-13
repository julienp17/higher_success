import { Query } from '../types'
import mostSales from './mostSales'
import numeral from "numeral";

const videogames: Query[] = [
  {
    caption: "most_sales",
    items: mostSales,
    unit: "copies sold",
    formatValue: (value: number) => `${numeral(value).format('($ 0.00 a)')}`
  }
]

export default videogames