import { Category } from './types'
import USRappers from './USRappers'
import football from './football'
import movies from './movies'
import billionaires from './billionaires'
import countries from './countries'

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
  },
  {
    title: "Countries",
    queries: countries
  },
  {
    title: "Billionaires",
    queries: billionaires
  }
]

export default compareCategories