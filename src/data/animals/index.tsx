import { Query } from '../types'
import strongestBite from './strongestBite'

const animals: Query[] = [
  {
    caption: "Strongest bite",
    items: strongestBite,
    formatValue: "newtons"
  }
]

export default animals