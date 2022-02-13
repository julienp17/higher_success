import { Query } from '../types'
import numeral from "numeral";
import largestTvAudience from './largestTvAudience';

const audience: Query[] = [
  {
    caption: "largest_tv_audience",
    items: largestTvAudience,
    formatValue: (value: number) => `${numeral(value).format('(0.0a)')} viewers`
  }
]

export default audience