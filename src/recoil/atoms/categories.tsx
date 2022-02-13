import { atom } from "recoil"
import compareCategories from "../../data"

const categoriesAtom = atom({
  key: "categories",
  default: compareCategories
})

export default categoriesAtom