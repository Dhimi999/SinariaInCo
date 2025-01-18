export const zoomPricing: Record<string, { [key: string]: number | null }> = {
  '100': {
    '1_hour': 3500,
    '3_hour': 10000,
    '1_day': 13000,
    '3_day': 30000,
    '1_week': 45000,
  },
  '300': {
    '1_hour': 20500,
    '3_hour': 30000,
    '1_day': 31000,
    '3_day': 90000,
    '1_week': null,
  },
  '500': {
    '1_hour': 44000,
    '3_hour': null,
    '1_day': 55000,
    '3_day': 180000,
    '1_week': null,
  },
  '1000': {
    '1_hour': 60000,
    '3_hour': null,
    '1_day': 98000,
    '3_day': null,
    '1_week': null,
  },
}

export const zoomFeatures = [
  { id: "streaming", label: "Live Streaming", price: 5000 },
  { id: "admin", label: "Admin+", price: 25000 },
  { id: "notes", label: "Notulen", price: 25000 },
  { id: "recording", label: "Video Record to Google Drive", price: 10000 },
]

export const paymentMethods = {
  ewallet: [
    {
      name: 'Shopeepay',
      accountNumber: '0881036592711',
      accountName: 'Dhimas Rizky Handoko',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shopeepay-rAPIJvn49oCy74kTBf4OmA0xEitwhy.png',
    },
    {
      name: 'DANA',
      accountNumber: '0881036592711',
      accountName: 'Dhimas Rizky Handoko',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DANA-L5KK3RnfY5OEQbJ5VBYJPubmIcsoAT.png',
    },
    {
      name: 'Gopay',
      accountNumber: '0881036592711',
      accountName: 'Dhimas Rizky Handoko',
      additionalFee: 500,
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQr6k8mfC6GBDKB8m3iCf1rdyU_FbWHS8lMA&s',
    },
    {
      name: 'OVO',
      accountNumber: '0881036592711',
      accountName: 'Dhimas Rizky Handoko',
      additionalFee: 1000,
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OVO-5eV6wNfhV8GxFNe0QvSUbPf54B6dj1.png',
    },
  ],
  bank: [
    {
      name: 'BRI',
      accountNumber: '623101017948505',
      accountName: 'Dhimas Rizky Handoko',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BRI-BMjvfgkCNdfgcSrc5IkRrubnSKGfQ1.png',
    },
    {
      name: 'BCA',
      accountNumber: '3340463675',
      accountName: 'Dhimas Rizky Handoko',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BCA-6VyjzPZuGqH8oyldHl9DTceemUONRH.png',
    },
    {
      name: 'Seabank',
      accountNumber: '901315195982',
      accountName: 'Dhimas Rizky Handoko',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Seabank-nznubWJ0NfVryv5f4uVRw2JOwj0MBg.png',
    },
    {
      name: 'BTN',
      accountNumber: '0003001610105928',
      accountName: 'Dhimas Rizky Handoko',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4dYPJR-8bCpm44BxKHwJnwFKEpJtYrmiYAg&s',
    },
  ],
  qris: {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-18%20at%2012.30.09_0ddbbbb5.jpg-ZJrwyDlcduv10sQig8EsgHL4rTbCtV.jpeg",
    name: "QRIS",
    merchantName: "DHIMI SKIES, BNGSLSR",
    nmid: "ID1025370985125",
  }
}

export const digitalProducts: ProductDetails[] = [
  {
    name: "Zoom Meeting",
    description: "Video conferencing and virtual meeting solution",
    basePrice: 3500,
    image: "/placeholder.svg?height=200&width=200",
    type: "zoom",
  },
  {
    name: "Canva Premium",
    description: "Graphic design platform with premium features",
    basePrice: 4000,
    image: "/placeholder.svg?height=200&width=200",
    type: "canva",
  },
  {
    name: "Vidio Platinum",
    description: "Streaming service with premium content",
    basePrice: 15000,
    image: "/placeholder.svg?height=200&width=200",
    type: "vidio",
  },
  {
    name: "Netflix",
    description: "Popular streaming service for movies and TV shows",
    basePrice: 32000,
    image: "/placeholder.svg?height=200&width=200",
    type: "netflix",
  },
]

