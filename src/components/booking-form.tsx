
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { treatments } from "@/lib/treatments";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "./ui/separator";
import { formatPrice } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  treatment: z.string().min(1, { message: "Please select a treatment." }),
  notes: z.string().optional(),
});

export function BookingForm({ dictionary }: { dictionary: any }) {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [total, setTotal] = useState(0);

  const defaultTreatmentSlug = searchParams.get("treatment");
  const defaultTreatment = treatments.find(t => t.slug === defaultTreatmentSlug);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      treatment: defaultTreatment?.id || "",
      notes: "",
    },
  });

  const selectedTreatmentId = form.watch("treatment");

  useEffect(() => {
    const selected = treatments.find((t) => t.id === selectedTreatmentId);
    setTotal(selected ? selected.price : 0);
  }, [selectedTreatmentId]);
  
  useEffect(() => {
    if (defaultTreatment) {
        setTotal(defaultTreatment.price);
    }
  }, [defaultTreatment]);


  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: dictionary.form.successTitle,
      description: dictionary.form.successDescription,
      variant: "default",
    });
    form.reset();
  }

  if (!dictionary) return <div>Loading...</div>

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle className="font-headline">{dictionary.form.yourDetails}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="treatment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{dictionary.form.treatment}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={dictionary.form.selectTreatment} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {treatments.map((treatment) => (
                        <SelectItem key={treatment.id} value={treatment.id}>
                          {treatment.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.form.fullName}</FormLabel>
                    <FormControl>
                      <Input placeholder={dictionary.form.fullNamePlaceholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.form.email}</FormLabel>
                    <FormControl>
                      <Input placeholder={dictionary.form.emailPlaceholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{dictionary.form.phone}</FormLabel>
                  <FormControl>
                    <Input placeholder={dictionary.form.phonePlaceholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{dictionary.form.notes}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={dictionary.form.notesPlaceholder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Separator />
            <div className="flex justify-between items-center">
                <span className="text-lg font-headline">{dictionary.form.total}</span>
                <span className="text-2xl font-bold font-headline text-primary">{formatPrice(total)}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
              {dictionary.form.confirmButton}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
