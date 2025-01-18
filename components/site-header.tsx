import Link from "next/link"
import Image from "next/image"
import { Menu } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Sinaria%20INCO%20(1500%20x%20500%20px)-izM1o2NbTf2n3rQCyIadQ1gc1frHQl.png"
            alt="Sinaria INCO"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            Beranda
          </Link>
          <Link href="#layanan" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            Layanan
          </Link>
          <Link href="/produk-digital" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            Produk Digital
          </Link>
          <Link href="#kontak" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            Kontak
          </Link>
        </nav>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="px-0 text-gray-700 md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">
                Beranda
              </Link>
              <Link href="#layanan" className="text-lg font-medium hover:text-primary transition-colors">
                Layanan
              </Link>
              <Link href="/produk-digital" className="text-lg font-medium hover:text-primary transition-colors">
                Produk Digital
              </Link>
              <Link href="#kontak" className="text-lg font-medium hover:text-primary transition-colors">
                Kontak
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

