export interface ProductDetails {
  name: string
  description: string
  basePrice: number
  image: string
  type: 'zoom' | 'canva' | 'vidio' | 'netflix'
}

export interface ZoomFormData {
  participants: string
  duration: string
  features: string[]
  eventTitle: string
  eventDate: Date
  eventTime: string
  passcode: string
}

