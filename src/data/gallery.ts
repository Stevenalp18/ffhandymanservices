import type { Lang } from "../i18n";

export type Category = "interior" | "exterior" | "kitchens" | "bathrooms";
type Alt = Record<Lang, string>;

export interface Photo {
  file: string;
  alt: Alt;
  category: Category;
}

const range = (prefix: string, count: number, category: Category, label: Alt): Photo[] =>
  Array.from({ length: count }, (_, i) => ({
    file: `${prefix}-${i + 1}.jpeg`,
    alt: {
      en: `${label.en}, project photo ${i + 1}`,
      es: `${label.es}, foto del proyecto ${i + 1}`,
    },
    category,
  }));

export const categories: Category[] = ["interior", "exterior", "kitchens", "bathrooms"];

export const photos: Photo[] = [
  { file: "basement-floor-1.jpeg", alt: { en: "New wood flooring installed in a basement", es: "Piso de madera nuevo instalado en un sótano" }, category: "interior" },
  ...range("interior", 13, "interior", { en: "Interior painting and flooring", es: "Pintura interior y pisos" }),

  { file: "exterior-home-1.jpeg", alt: { en: "Two-story brick home with ladders up for exterior painting", es: "Casa de ladrillo de dos pisos con escaleras para pintura exterior" }, category: "exterior" },
  { file: "patio-paint.jpeg", alt: { en: "Covered patio floor painted gray", es: "Piso de patio techado pintado de gris" }, category: "exterior" },
  { file: "deck-work-1.jpeg", alt: { en: "Deck cleaned, power washed and stained", es: "Deck limpiado, lavado a presión y teñido" }, category: "exterior" },
  { file: "exterior-1.jpeg", alt: { en: "Exterior siding and trim work", es: "Trabajo exterior de siding y molduras" }, category: "exterior" },
  ...range("deck", 7, "exterior", { en: "Deck staining and sealing", es: "Teñido y sellado de deck" }),

  { file: "kitchen-remodel-1.jpeg", alt: { en: "Finished kitchen remodel with pendant lights over the island", es: "Cocina remodelada con lámparas colgantes sobre la isla" }, category: "kitchens" },
  { file: "kitchen-remodel-2.jpeg", alt: { en: "New countertop and backsplash", es: "Encimera y backsplash nuevos" }, category: "kitchens" },
  { file: "kitchen-remodel-3.jpeg", alt: { en: "Kitchen cabinets repainted white", es: "Gabinetes de cocina pintados de blanco" }, category: "kitchens" },
  ...range("kitchen", 12, "kitchens", { en: "Kitchen remodel", es: "Remodelación de cocina" }),

  { file: "bathroom-renovation-1.jpeg", alt: { en: "Fully renovated bathroom with glass shower door", es: "Baño completamente renovado con puerta de ducha de vidrio" }, category: "bathrooms" },
  ...range("bathroom", 12, "bathrooms", { en: "Bathroom renovation", es: "Renovación de baño" }),
];
