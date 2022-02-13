import { Quiz } from "./data/types"
import compareCategoriesData from "./data"

let compareCategories = [...compareCategoriesData]

function getRandomElement<Type>(arr: Type[]): Type {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateQuiz(resetQuizzes?: boolean): Quiz {
  let category = getRandomElement(compareCategories)
  let query = getRandomElement(category.queries)
  const compared = getRandomElement(query.items)
  const contender = getRandomElement(query.items.filter(item => item.name !== compared.name))

  query.items = query.items.filter(item => !(item.name === compared.name || item.name === contender.name))
  if (query.items.length === 0) {
    category.queries = category.queries.filter(catQuery => catQuery.caption !== query.caption)
    if (category.queries.length === 0) {
      compareCategories = compareCategories.filter(category => category)
    }
  }

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