"use client";

import { productTable, productVariantTable } from "@/db/schema";

interface ProductListProps {
  title: string;
  products: (typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  })[];
}

const ProductList = ({ title }: ProductListProps) => {
  return (
    <div className="space-y-6">
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
};

export default ProductList;
