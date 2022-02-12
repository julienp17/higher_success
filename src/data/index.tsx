import { Category } from './types'
import USRappers from './USRappers'
import footballers from './football'

const compareCategories: Category[] = [
  {
    title: "US Rappers",
    queries: USRappers
  },
  {
    title: "Football",
    queries: footballers
  }
]

export default compareCategories