import { Query } from '../types'
import numeral from "numeral";
import strongestBite from './strongestBite'

const animals: Query[] = [
  {
    caption: "strongest_bite",
    items: strongestBite,
    unit: "newtons",
    formatValue: (value: number) => `${numeral(value).format('0.0a')}`
  }
]

export default animals