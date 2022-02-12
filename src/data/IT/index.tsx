import { Query } from '../types'
import mostUsed from "./mostUsed"

const IT: Query[] = [
  {
    caption: "most used",
    items: mostUsed,
    formatValue: "%"
  }
]

export default IT