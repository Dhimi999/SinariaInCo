import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-yellow-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center text-center space-y-8 relative z-10">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Sinaria%20INCO%20(1500%20x%20500%20px)-izM1o2NbTf2n3rQCyIadQ1gc1frHQl.png"
            alt="Sinaria INCO"
            width={400}
            height={133}
            className="w-full max-w-[400px] object-contain"
          />
          <p className="max-w-[600px] text-gray-600 md:text-xl">
            Solusi lengkap untuk kebutuhan percetakan dan pengeditan dokumen Anda. Kami menghadirkan kualitas terbaik dengan layanan profesional.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button className="bg-yellow-200 text-gray-900 hover:bg-yellow-300 hover:text-black transition-all duration-300 font-semibold">
              Lihat Layanan
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-gray-800 transition-all duration-300 font-semibold">
              Hubungi Kami
            </Button>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary opacity-5 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}

