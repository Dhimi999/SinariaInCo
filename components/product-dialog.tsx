"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ZoomOrderForm } from "@/components/zoom-order-form"
import { PaymentMethodSelector } from "@/components/payment-method-selector"
import { Button } from "@/components/ui/button"
import type { ProductDetails } from "@/types/product"

interface ProductDialogProps {
  product: ProductDetails
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProductDialog({ product, open, onOpenChange }: ProductDialogProps) {
  const [step, setStep] = useState<"details" | "payment">("details")
  const [orderDetails, setOrderDetails] = useState<any>(null)

  const handleOrderSubmit = (details: any) => {
    setOrderDetails(details)
    setStep("payment")
  }

  const handlePaymentComplete = () => {
    onOpenChange(false)
    setStep("details")
    setOrderDetails(null)
  }

  const renderContent = () => {
    if (product.type === "zoom") {
      return <ZoomOrderForm onSubmit={handleOrderSubmit} />
    }

    return (
      <div className="space-y-4">
        <p className="text-lg">Harga: Rp {product.basePrice?.toLocaleString()}</p>
        <p className="text-gray-600">{product.description}</p>
        <Button onClick={() => handleOrderSubmit({ totalPrice: product.basePrice })}>
          Pesan Sekarang
        </Button>
      </div>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
          <DialogDescription>
            {product.description}
          </DialogDescription>
        </DialogHeader>
        <Tabs value={step} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="details">Detail Produk</TabsTrigger>
            <TabsTrigger value="payment" disabled={!orderDetails}>
              Pembayaran
            </TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="border rounded-lg p-4">
            {renderContent()}
          </TabsContent>
          <TabsContent value="payment" className="border rounded-lg p-4">
            {orderDetails && (
              <PaymentMethodSelector 
                amount={orderDetails.totalPrice} 
                onPaymentComplete={handlePaymentComplete}
              />
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

