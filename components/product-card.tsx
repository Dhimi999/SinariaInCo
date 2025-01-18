"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ProductDialog } from "@/components/product-dialog"
import type { ProductDetails } from "@/types/product"

interface ProductCardProps {
  product: ProductDetails
}

export function ProductCard({ product }: ProductCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">
              Mulai dari Rp {product.basePrice.toLocaleString()}
            </span>
            <Button onClick={() => setDialogOpen(true)}>
              Pilih Produk
            </Button>
          </div>
        </div>
      </div>
      <ProductDialog 
        product={product}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  )
}

