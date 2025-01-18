import { Phone } from 'lucide-react'
import Image from "next/image"

export function ContactSection() {
  return (
    <section id="kontak" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Hubungi Kami</h2>
            <p className="max-w-[900px] text-gray-300 md:text-xl">
              Kami siap membantu Anda dengan berbagai kebutuhan
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 pt-12 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <Phone className="h-6 w-6 text-primary" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp-pO1ndgNYQSxVOdecmw3moiUdbJUccC.webp"
                alt="WhatsApp"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Admin 1</h3>
            <a href="https://wa.me/0881036592711" className="text-gray-600 hover:text-primary transition-colors">
              0881036592711
            </a>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <Phone className="h-6 w-6 text-primary" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp-pO1ndgNYQSxVOdecmw3moiUdbJUccC.webp"
                alt="WhatsApp"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Admin 2</h3>
            <a href="https://wa.me/081999483292" className="text-gray-600 hover:text-primary transition-colors">
              081999483292
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

