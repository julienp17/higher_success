import { atom } from "recoil"

const currentScoreAtom = atom({
  key: "currentScore",
  default: 0
})

export default currentScoreAtom