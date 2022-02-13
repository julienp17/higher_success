import { Query } from '../types'
import mostGoalsForFrance from './mostGoalsForFrance'
import mostTrophiesPlayer from './mostTrophiesPlayer'

const football: Query[] = [
  {
    caption: "most_trophies_won",
    items: mostTrophiesPlayer,
    unit: "trophies_won",
  },
  {
    caption: "most_goals_for_france",
    items: mostGoalsForFrance,
    unit: "_goals"
  }
]

export default football