import { Category,  Quiz } from "./data/types"

function getRandomElement<Type>(arr: Type[]): Type {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateQuiz(categories: Category[], setCategories: React.Dispatch<React.SetStateAction<Category[]>>): Quiz | undefined {
  const category = getRandomElement(categories)
  if (category === undefined) {
    return undefined
  }
  const query = getRandomElement(category.queries)
  const compared = getRandomElement(query.items)
  const contender = getRandomElement(query.items.filter(item => item.name !== compared.name))

  console.log((compared.value > contender.value)
    ? `${compared.name} > ${contender.name}`
    : `${compared.name} < ${contender.name}`
  )
  let editedCategories: Category[] = []

  let items = query.items.filter(item => !(item.name === compared.name || item.name === contender.name))
  if (items.length === 0) {
    let queries = category.queries.filter(catQuery => catQuery.caption !== query.caption)
    if (queries.length === 0) {
      editedCategories = [
        ...categories.filter(otherCategory => otherCategory.title !== category.title)
      ]
    } else {
      editedCategories = [
        ...categories.filter(otherCategory => otherCategory.title !== category.title),
        {
          ...category,
          queries: queries
        }
      ]
    }
  } else {
    editedCategories = [
      ...categories.filter(otherCategory => otherCategory.title !== category.title),
      {
        ...category,
        queries: [
          ...category.queries.filter(otherQuery => otherQuery.caption !== query.caption),
          {
            ...query,
            items: items
          }
        ]
      }
    ]
  }
  setCategories(editedCategories)

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