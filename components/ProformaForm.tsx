"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createProformaDataSchema } from "@/types/ProformaData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import SelectDate from "@/components/SelectDate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Upload from "./upload";
import ItemForm from "@/components/ItemForm";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = createProformaDataSchema;

const ProformaForm = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [logoBlob, setLogoBlob] = useState<Blob | null>(null);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });
  // const { setFormData } = useAppStore(
  //   (state) => ({
  //     setFormData: state?.setFormData,
  //   }),
  //   shallow,
  // );

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={"p-8"}>
        <h3 className={"my-4 text-xl uppercase font-bold"}>
          Créer un proforma
        </h3>
        <Card>
          <CardHeader>
            <CardTitle>Entête</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="logo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{`Logo`}</FormLabel>
                    <FormControl>
                      <Upload
                        placeholder="Logo"
                        type="file"
                        {...field}
                        onChange={(e) => setLogoBlob(e)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className={"col-start-2"} />
              <FormField
                control={form.control}
                name="referenceNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Numéro de la facture</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Numéro de la facture"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem className={"flex flex-col gap-1 mt-1.5"}>
                    <FormLabel>Date de création</FormLabel>
                    <FormControl>
                      <SelectDate date={date} setDate={setDate} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4 col-span-2">
                <div className="flex flex-col">
                  <h5 className={"my-4 font-bold"}>Destinataire</h5>
                  <FormField
                    control={form.control}
                    name="customer.name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                          <Input placeholder="Nom" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="customer.address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Adresse</FormLabel>
                        <FormControl>
                          <Input placeholder="Adresse" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="customer.email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="customer.phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Numéro de téléphone</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Numéro de téléphone"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col">
                  <h5 className={"my-4 font-bold"}>Emetteur</h5>
                  <FormField
                    control={form.control}
                    name="creator.name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                          <Input placeholder="Nom" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="creator.address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Adresse</FormLabel>
                        <FormControl>
                          <Input placeholder="Adresse" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="creator.email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="creator.phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Numéro de téléphone</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Numéro de téléphone"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <ItemForm />
        <Card className={"mt-4"}>
          <CardHeader>
            <CardTitle>Bas de page</CardTitle>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="conditions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Conditions</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Conditions" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="slogan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slogan</FormLabel>
                  <FormControl>
                    <Input type={"text"} placeholder="Slogan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};

export default ProformaForm;
