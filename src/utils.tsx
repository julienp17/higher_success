import { Quiz } from "./data/types"
import compareCategories from "./data"

function getRandomElement<Type>(arr: Type[]): Type {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateQuiz(): Quiz {
  const category = getRandomElement(compareCategories)
  const query = getRandomElement(category.queries)
  const compared = getRandomElement(query.items)
  const contender = getRandomElement(query.items.filter(item => item.name !== compared.name))

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