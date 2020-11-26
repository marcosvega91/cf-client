type Link = {
  href: string
}

type Paginated<T> = {
  pagination: {
    total_results: number
    total_pages: number
    first: null | Link
    last: null | Link
    next: null | Link
  }
  resources: T[]
}

export { Paginated }
