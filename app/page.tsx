import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PaymentSection } from "@/components/payment-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <PaymentSection />
        <ContactSection />
      </main>
      <footer className="border-t border-gray-200 bg-white py-6 text-center text-sm text-gray-500">
        <div className="container mx-auto px-4">
          <p>© 2024 Sinaria INCO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

