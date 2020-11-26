type Link = {
  href: string
}

type PaginatedV3<T> = {
  pagination: {
    total_results: number
    total_pages: number
    first: null | Link
    last: null | Link
    next: null | Link
  }
  resources: T[]
}

type PaginatedV2<T> = {
  total_results: number
  total_pages: number
  prev_url: null | string
  next_url: null | string
  resources: T[]
}

export { PaginatedV3, PaginatedV2 }
