import { Printer, FileEdit, ImageIcon, ScanIcon, Copy, VoicemailIcon, CloudIcon, Truck } from 'lucide-react'
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Percetakan",
    description: "Layanan percetakan berkualitas tinggi untuk berbagai kebutuhan",
    icon: Printer,
    startingPrice: "500",
  },
  {
    title: "Edit Dokumen",
    description: "Jasa pengeditan profesional untuk dokumen Anda",
    icon: FileEdit,
    startingPrice: "5.000",
  },
  {
    title: "Cetak Banner",
    description: "Cetak banner dengan berbagai ukuran dan material",
    icon: ImageIcon,
    startingPrice: "50.000",
  },
  {
    title: "Scan Dokumen",
    description: "Digitalisasi dokumen dengan kualitas tinggi",
    icon: ScanIcon,
    startingPrice: "1.000",
  },
  {
    title: "Fotocopy",
    description: "Layanan fotocopy cepat dan berkualitas",
    icon: Copy,
    startingPrice: "300",
  },
  {
    title: "Kirim & Terima Fax",
    description: "Layanan fax domestik dan internasional",
    icon: VoicemailIcon,
    startingPrice: "5.000",
  },
  {
    title: "Cetak Jarak Jauh",
    description: "Cetak dokumen Anda dari mana saja",
    icon: CloudIcon,
    startingPrice: "1.000",
  },
  {
    title: "Pengantaran",
    description: "Layanan antar untuk area tertentu",
    icon: Truck,
    startingPrice: "10.000",
  },
]

export function ServicesSection() {
  return (
    <section id="layanan" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">Layanan Kami</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl">
              Kami menyediakan berbagai layanan profesional untuk memenuhi kebutuhan Anda
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-200">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                  <div className="mt-auto">
                    <p className="text-sm text-gray-500 mb-3">
                      Start from <span className="font-semibold text-primary">Rp{service.startingPrice},-</span> per lembar
                    </p>
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">
                      Pesan Sekarang
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

