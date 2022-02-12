import { Category } from './types'
import animals from './animals'
import music from './music'
import football from './football'
import movies from './movies'
import billionaires from './billionaires'
import countries from './countries'

const compareCategories: Category[] = [
  {
    title: "Animals",
    queries: animals
  },
  {
    title: "Music",
    queries: music
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
  },
]

export default compareCategories