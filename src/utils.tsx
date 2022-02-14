import React from 'react'
import { Category,  Query,  Quiz } from "./data/types"

function getRandomElement<Type>(arr: Type[]): Type {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateQuiz(categories: Category[], setCategories: React.Dispatch<React.SetStateAction<Category[]>>): Quiz | undefined {
  if (categories.length === 0) {
    return undefined
  }
  const allQueries = categories.reduce((acc: Query[], cur) => acc.concat(cur.queries), [])
  const query = getRandomElement(allQueries)
  const compared = getRandomElement(query.items)
  const contender = getRandomElement(query.items.filter(item => item.name !== compared.name))
  const category = categories.find(
    category => category.queries.find(
      query => query.items.find(
        item => item.name === compared.name
      ) && query.items.find(
        item => item.name === contender.name
      )
    )
  )
  if (category === undefined) {
    return undefined
  }

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