import { Category } from './types'
import USRappers from './USRappers'
import football from './football'
import movies from './movies'

const compareCategories: Category[] = [
  {
    title: "US Rappers",
    queries: USRappers
  },
  {
    title: "Football",
    queries: football
  },
  {
    title: "Movies",
    queries: movies
  }
]

export default compareCategories