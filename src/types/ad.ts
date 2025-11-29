export interface AdForm {
  title: string

  author: string
  content: string
  landingUrl: string
  bid: number
}

export interface Ad {
  id: number
  title: string
  content: string
  author: string
  clicks: number
  bid: number
  landingUrl: string
}
