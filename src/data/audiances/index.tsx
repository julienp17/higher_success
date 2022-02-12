import { Query } from '../types'
import mostListenedMusics from './largestTvAudience'
import numeral from "numeral";

const musics: Query[] = [
  {
    caption: "Most listened on Spotify",
    items: mostListenedMusics,
    formatValue: (value: number) => `${numeral(value).format('(0.0a)')}`
  }
]

export default musics