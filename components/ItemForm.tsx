import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash } from "lucide-react";

const schema = z.object({
  items: z.array(
    z.object({
      name: z.string().nonempty("Name is required"),
      quantity: z.number().optional(),
      unitPrice: z.number().min(0, "Unit Price must be a positive number"),
    }),
  ),
});

type FormValues = z.infer<typeof schema>;

export default function ItemForm() {
  const {
    control,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { items: [{ name: "", quantity: undefined, unitPrice: 0 }] },
    resolver: zodResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const onValueChange = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Card className={"mt-4"}>
      <CardHeader>
        <CardTitle>Contenu</CardTitle>
      </CardHeader>
      <CardContent>
        {fields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-4 gap-4 mb-4 items-end">
            <div className="col-span-1">
              <Input {...register(`items.${index}.name`)} placeholder="Nom" />
              {errors.items?.[index]?.name && (
                <p className="text-red-500 text-sm">
                  {errors.items[index].name?.message}
                </p>
              )}
            </div>
            <div>
              <Input
                type="number"
                {...register(`items.${index}.quantity`)}
                placeholder="Quantité"
              />
              {errors.items?.[index]?.quantity && (
                <p className="text-red-500 text-sm">
                  {errors.items[index].quantity?.message}
                </p>
              )}
            </div>
            <div>
              <Input
                type="number"
                {...register(`items.${index}.unitPrice`)}
                placeholder="Prix"
              />
              {errors.items?.[index]?.unitPrice && (
                <p className="text-red-500 text-sm">
                  {errors.items[index].unitPrice?.message}
                </p>
              )}
            </div>
            <Button
              type="button"
              variant="destructive"
              size={"icon"}
              onClick={() => remove(index)}
            >
              <Trash />
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="secondary"
          onClick={() =>
            append({ name: "", quantity: undefined, unitPrice: 0 })
          }
        >
          Ajouter une ligne
        </Button>
      </CardContent>
    </Card>
  );
}
