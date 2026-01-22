import { productVariantTable } from "@/db/schema";
import Link from "next/link";

import Image from "next/image";

interface VariantSelectorProps {
  selectedSlug: string;
  variants: (typeof productVariantTable.$inferSelect)[];
}

const VariantSelector = ({ selectedSlug, variants }: VariantSelectorProps) => {
  return (
    <div className="flex items-center gap-4">
      {variants.map((variant) => (
        <Link
          href={`/product-variant/${variant.slug}`}
          key={variant.id}
          className={
            selectedSlug === variant.slug
              ? "border-primary rounded-xl border-2"
              : ""
          }
        >
          <Image
            src={variant.imageUrl}
            alt={variant.name}
            width={68}
            height={68}
            className="rounded-xl"
          />
        </Link>
      ))}
    </div>
  );
};

export default VariantSelector;
