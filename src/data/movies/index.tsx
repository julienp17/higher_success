import { Query } from '../types'
import highestGross from './highestGross'

const movies: Query[] = [
  {
    caption: "Highest gross",
    items: highestGross
  }
]

export default movies