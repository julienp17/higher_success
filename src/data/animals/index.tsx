import { Query } from '../types'
import strongestBite from './strongestBite'

const animals: Query[] = [
  {
    caption: "strongest_bite",
    items: strongestBite,
    formatValue: "newtons"
  }
]

export default animals