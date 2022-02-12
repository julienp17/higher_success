import { Category } from './types'
import USRappers from './USRappers'
import football from './football'
import movies from './movies'
import billionaires from './billionaires'
import countries from './countries'
import manga from './manga'
import videogames from './videogames'
import IT from './IT'
import company from './company'

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
  },
  {
    title: "Manga",
    queries: manga
  },
  {
    title: "Company",
    queries: company
  },
  {
    title: "Videogames",
    queries: videogames
  },
  {
    title: "IT",
    queries: IT
  }
]

export default compareCategories