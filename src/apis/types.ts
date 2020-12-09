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

type MetadataV2 = {
  guid: string
  url: string
  created_at: string
  updated_at: string
}

type PaginatedV2<T> = {
  total_results: number
  total_pages: number
  prev_url: null | string
  next_url: null | string
  resources: T[]
}

type APIError = {
  description: string
  error_code: string
  code: number
}

type EntityV2<T> = {
  metadata: MetadataV2
  entity: T
}

export { PaginatedV3, PaginatedV2, APIError, MetadataV2, EntityV2 }
