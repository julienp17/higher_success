type Contender = {
  name: string,
  imageUri: string,
  value: number
}

type Query = {
  caption: string,
  items: Contender[],
  unit: string,
  formatValue?: ((value: number) => string)
}

type Category = {
  title: string,
  queries: Query[]
}

type Quiz = {
  category: Category,
  query: Query,
  contender: {
    left: Contender,
    right: Contender
  },
  guessedRight: boolean | undefined
}

export type { Contender, Query, Category, Quiz }
