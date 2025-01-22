import NumberFlow from "@number-flow/react";

export const headers = [
  {
    name: "Description",
    key: "description",
  },
  {
    name: "Quantité",
    key: "quantity",
    custom: (item: number | string) =>
      typeof item !== "number" ? item : <NumberFlow value={item} />,
  },
  {
    name: "Prix unitaire (FCFA)",
    key: "unitPrice",
    custom: (item: number | string) =>
      typeof item !== "number" ? item : <NumberFlow value={item} />,
  },
  {
    name: "Total (FCFA)",
    key: "totalAmount",
    custom: (item: number | string) =>
      typeof item !== "number" ? item : <NumberFlow value={item} />,
  },
];

export const invoices = [
  {
    invoice: "INV001",
    description: "Conception et développement du site web",
    quantity: 1,
    unitPrice: 850000,
    totalAmount: 850000,
  },
  {
    invoice: "INV002",
    description: "Intégration d’un système de blog",
    quantity: 1,
    unitPrice: "Inclus",
    totalAmount: "Inclus",
  },
  {
    invoice: "INV003",
    description: "Mise en place d’une fonctionnalité newsletter",
    quantity: 1,
    unitPrice: "Inclus",
    totalAmount: "Inclus",
  },
  {
    invoice: "INV004",
    description: "Mise en place du multilinguisme",
    quantity: 1,
    unitPrice: "Inclus",
    totalAmount: "Inclus",
  },
  {
    invoice: "INV005",
    description: "Création de pages de présentation (7 pages)",
    quantity: 7,
    unitPrice: "Inclus",
    totalAmount: "Inclus",
  },
  {
    invoice: "INV006",
    description: "Hébergement, mailing & nom de domaine (1 an)",
    quantity: 1,
    unitPrice: 50000,
    totalAmount: 50000,
  },
];
