import { Query } from '../types'
import mostGoalsForFrance from './mostGoalsForFrance'
import mostTrophiesPlayer from './mostTrophiesPlayer'

const football: Query[] = [
  {
    caption: "Most trophies won",
    items: mostTrophiesPlayer
  },
  {
    caption: "Most goals for France",
    items: mostGoalsForFrance
  }
]

export default football