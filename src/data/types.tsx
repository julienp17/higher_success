type Item = {
  name: string,
  imageUri: string,
  value: number
}

type Query = {
  caption: string,
  items: Item[]
}

type Category = {
  title: string,
  queries: Query[]
}

export type { Item, Query, Category }
