import { atom } from "recoil"
import compareCategories from "../../data"

const selectedCategoriesAtom = atom({
  key: "selectedCategories",
  default: compareCategories.map(category => category.title)
})

export default selectedCategoriesAtom