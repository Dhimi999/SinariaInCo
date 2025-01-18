"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { paymentMethods } from "@/lib/constants"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface PaymentMethodSelectorProps {
  amount: number
  onPaymentComplete: () => void
}

export function PaymentMethodSelector({
  amount,
  onPaymentComplete,
}: PaymentMethodSelectorProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>("")

  const handlePaymentConfirmation = () => {
    // In a real application, you would handle the payment processing here
    onPaymentComplete()
  }

  const getFinalAmount = (methodName: string): number => {
    const method = paymentMethods.ewallet.find(m => m.name === methodName)
    return amount + (method?.additionalFee || 0)
  }

  return (
    <Tabs defaultValue="ewallet" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="ewallet">E-Wallet</TabsTrigger>
        <TabsTrigger value="bank">Transfer Bank</TabsTrigger>
        <TabsTrigger value="qris">QRIS</TabsTrigger>
      </TabsList>

      <TabsContent value="ewallet">
        <Accordion type="single" collapsible className="w-full">
          {paymentMethods.ewallet.map((method) => (
            <AccordionItem value={method.name} key={method.name}>
              <AccordionTrigger className="text-left">
                <div className="flex items-center space-x-2">
                  <Image
                    src={method.logo || "/placeholder.svg"}
                    alt={method.name}
                    width={24}
                    height={24}
                    className="h-6 w-auto object-contain"
                  />
                  <span>{method.name}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Card className={`cursor-pointer transition-all ${
                  selectedMethod === method.name ? "ring-2 ring-primary" : ""
                }`} onClick={() => setSelectedMethod(method.name)}>
                  <CardContent className="pt-4">
                    <div className="text-sm text-gray-500">
                      <p>Nama: {method.accountName}</p>
                      <p>Nomor: {method.accountNumber}</p>
                      {method.additionalFee && (
                        <p className="text-yellow-600 mt-1">
                          *Biaya tambahan Rp {method.additionalFee.toLocaleString()}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </TabsContent>

      <TabsContent value="bank">
        <Accordion type="single" collapsible className="w-full">
          {paymentMethods.bank.map((method) => (
            <AccordionItem value={method.name} key={method.name}>
              <AccordionTrigger className="text-left">
                <div className="flex items-center space-x-2">
                  <Image
                    src={method.logo || "/placeholder.svg"}
                    alt={method.name}
                    width={24}
                    height={24}
                    className="h-6 w-auto object-contain"
                  />
                  <span>{method.name}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Card className={`cursor-pointer transition-all ${
                  selectedMethod === method.name ? "ring-2 ring-primary" : ""
                }`} onClick={() => setSelectedMethod(method.name)}>
                  <CardContent className="pt-4">
                    <div className="text-sm text-gray-500">
                      <p>Nama: {method.accountName}</p>
                      <p>Nomor Rekening: {method.accountNumber}</p>
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </TabsContent>

      <TabsContent value="qris">
        <Card>
          <CardHeader>
            <CardTitle>QRIS</CardTitle>
            <CardDescription>
              Scan QR code dibawah ini untuk melakukan pembayaran
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Image
              src={paymentMethods.qris.image || "/placeholder.svg"}
              alt="QRIS Payment"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <div className="mt-4 text-center">
              <p className="font-semibold">{paymentMethods.qris.merchantName}</p>
              <p className="text-sm text-gray-500">NMID: {paymentMethods.qris.nmid}</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <div className="mt-4 space-y-4">
        <div className="text-lg font-semibold">
          Total Pembayaran: Rp {selectedMethod ? getFinalAmount(selectedMethod).toLocaleString() : amount.toLocaleString()}
          {selectedMethod && paymentMethods.ewallet.find(m => m.name === selectedMethod)?.additionalFee ? 
            " (termasuk biaya admin)" : ""}
        </div>
        <Button
          className="w-full"
          disabled={!selectedMethod}
          onClick={handlePaymentConfirmation}
        >
          Konfirmasi Pembayaran
        </Button>
      </div>
    </Tabs>
  )
}

