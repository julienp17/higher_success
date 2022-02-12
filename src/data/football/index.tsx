import { Query } from '../types'
import mostGoalsForFrance from './mostGoalsForFrance'
import mostTrophiesPlayer from './mostTrophiesPlayer'

const football: Query[] = [
  {
    caption: "Most trophies won",
    items: mostTrophiesPlayer,
    formatValue: "trophies won"
  },
  {
    caption: "Most goals for France",
    items: mostGoalsForFrance,
    formatValue: "goals"
  }
]

export default football