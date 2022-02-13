import { Category, Quiz } from "./data/types"
import { SetterOrUpdater } from "recoil"


function getRandomElement<Type>(arr: Type[]): Type {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateQuiz(categories: Category[], setCategories: SetterOrUpdater<Category[]> ): Quiz {
  let editedCategories = [...categories]
  let category = getRandomElement(editedCategories)
  let query = getRandomElement(category.queries)
  const compared = getRandomElement(query.items)
  const contender = getRandomElement(query.items.filter(item => item.name !== compared.name))

  // query.items = query.items.filter(item => !(item.name === compared.name || item.name === contender.name))
  // if (query.items.length === 0) {
  //   category.queries = category.queries.filter(catQuery => catQuery.caption !== query.caption)
  //   if (category.queries.length === 0) {
  //     setCategories(categories.filter(otherCategory => otherCategory.title === category.title))
  //   }
  // }

  return ({
    category: category,
    query: query,
    contender: {
      left: compared,
      right: contender
    },
    guessedRight: undefined
  })
}

export { generateQuiz }