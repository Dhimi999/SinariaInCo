import { SiteHeader } from "@/components/site-header"
import { ProductCard } from "@/components/product-card"
import { digitalProducts } from "@/lib/constants"

export default function DigitalProductsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Produk Digital</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {digitalProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </main>
      <footer className="border-t border-gray-200 bg-white py-6 text-center text-sm text-gray-500">
        <div className="container mx-auto px-4">
          <p>© 2024 Sinaria INCO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

