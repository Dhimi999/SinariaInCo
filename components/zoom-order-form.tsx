"use client"

import { useState } from "react"
import { CalendarIcon } from 'lucide-react'
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useForm } from "react-hook-form"
import { zoomPricing, zoomFeatures } from "@/lib/constants"

interface ZoomOrderFormProps {
  onSubmit: (data: any) => void
}

export function ZoomOrderForm({ onSubmit }: ZoomOrderFormProps) {
  const form = useForm({
    defaultValues: {
      participants: "100",
      duration: "1_hour",
      features: [],
      eventTitle: "",
      eventDate: new Date(),
      eventTime: "",
      passcode: "",
    },
  })

  const participants = form.watch("participants")
  const duration = form.watch("duration")
  const selectedFeatures = form.watch("features")

  const basePrice = zoomPricing[participants]?.[duration] || 0
  const featuresPrice = zoomFeatures
    .filter((feature) => selectedFeatures.includes(feature.id))
    .reduce((sum, feature) => sum + feature.price, 0)
  const totalPrice = basePrice + featuresPrice

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => onSubmit({ ...data, totalPrice }))}>
        <div className="grid gap-4 py-4">
          <FormField
            control={form.control}
            name="participants"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jumlah Partisipan</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih jumlah partisipan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="100">100 Partisipan (SZ_100R)</SelectItem>
                    <SelectItem value="300">300 Partisipan (SZ_300R)</SelectItem>
                    <SelectItem value="500">500 Partisipan (SZ_500R)</SelectItem>
                    <SelectItem value="1000">1000 Partisipan (SZ_1000M)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Durasi</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih durasi" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1_hour">1 Jam</SelectItem>
                    <SelectItem value="3_hour">3 Jam</SelectItem>
                    <SelectItem value="1_day">1 Hari</SelectItem>
                    <SelectItem value="3_day">3 Hari</SelectItem>
                    <SelectItem value="1_week">1 Minggu</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="features"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel>Fitur Tambahan</FormLabel>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {zoomFeatures.map((feature) => (
                    <FormField
                      key={feature.id}
                      control={form.control}
                      name="features"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={feature.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(feature.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, feature.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value: string) => value !== feature.id
                                        )
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {feature.label} (+Rp {feature.price.toLocaleString()})
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="eventTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Judul Kegiatan</FormLabel>
                <FormControl>
                  <Input placeholder="Masukkan judul kegiatan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="eventDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Tanggal Kegiatan</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="eventTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jam Kegiatan</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="passcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Passcode (Maksimal 10 karakter)</FormLabel>
                <FormControl>
                  <Input 
                    maxLength={10}
                    placeholder="Masukkan passcode" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-2">
            <div className="text-lg font-semibold">
              Total: Rp {totalPrice.toLocaleString()}
            </div>
            <Button type="submit" className="w-full">
              Lanjut ke Pembayaran
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}

