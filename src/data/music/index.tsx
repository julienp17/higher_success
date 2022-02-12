import { Query } from '../types'
import mostListenedMusics from './mostListenedMusics'
import numeral from "numeral";
import bestSellingArtists from './bestSellingArtists';
import grammyAwardsWon from './grammyAwardsWon';

const music: Query[] = [
  {
    caption: "Most listened on Spotify",
    items: mostListenedMusics,
    formatValue: (value: number) => `${numeral(value).format('(0.0a)')}`
  },
  {
    caption: "Certified records sold",
    items: bestSellingArtists,
    formatValue: (value: number) => `${numeral(value).format('(0.0a)')}`
  },
  {
    caption: "Most grammy awards won",
    items: grammyAwardsWon,
    formatValue: "grammies"
  }
]

export default music