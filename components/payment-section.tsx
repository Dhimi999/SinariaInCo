import Image from "next/image"

const paymentMethods = [
  {
    name: "QRIS",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QRIS-kU26Dm8dMGPdwui5tYHsQzjz1WpKjy.png",
  },
  {
    name: "BRI",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BRI-BMjvfgkCNdfgcSrc5IkRrubnSKGfQ1.png",
  },
  {
    name: "BCA",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BCA-6VyjzPZuGqH8oyldHl9DTceemUONRH.png",
  },
  {
    name: "Seabank",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Seabank-nznubWJ0NfVryv5f4uVRw2JOwj0MBg.png",
  },
  {
    name: "BTN",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4dYPJR-8bCpm44BxKHwJnwFKEpJtYrmiYAg&s",
  },
  {
    name: "Shopeepay",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shopeepay-rAPIJvn49oCy74kTBf4OmA0xEitwhy.png",
  },
  {
    name: "DANA",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DANA-L5KK3RnfY5OEQbJ5VBYJPubmIcsoAT.png",
  },
  {
    name: "Gopay",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQr6k8mfC6GBDKB8m3iCf1rdyU_FbWHS8lMA&s",
  },
  {
    name: "OVO",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OVO-5eV6wNfhV8GxFNe0QvSUbPf54B6dj1.png",
  },
]

export function PaymentSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">Metode Pembayaran</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl">
              Kami menerima berbagai metode pembayaran untuk kenyamanan Anda
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-3 gap-6 pt-12 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9">
          {paymentMethods.map((method) => (
            <div key={method.name} className="flex items-center justify-center">
              <div className="relative h-12 w-24">
                <Image
                  src={method.logo}
                  alt={method.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

