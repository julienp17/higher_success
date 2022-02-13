import { Query } from '../types'
import mostGoalsForFrance from './mostGoalsForFrance'
import mostTrophiesPlayer from './mostTrophiesPlayer'

const football: Query[] = [
  {
    caption: "most_trophies_won",
    items: mostTrophiesPlayer,
    formatValue: "trophies_won"
  },
  {
    caption: "Most goals for France",
    items: mostGoalsForFrance,
    formatValue: "_goals"
  }
]

export default football