import { Header } from "@/components/common/header";
import { db } from "@/db";
import { productVariantTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import Image from "next/image";

interface ProductVariantPageProps {
  params: Promise<{ slug: string }>;
}

const ProductVariantPage = async ({ params }: ProductVariantPageProps) => {
  const { slug } = await params;

  const productVariant = await db.query.productVariantTable.findFirst({
    where: eq(productVariantTable.slug, slug),
    with: { product: true },
  });
  if (!productVariant) {
    return notFound();
  }

  return (
    <>
      <Header />
      <div className="flex flex-col space-y-6">
        <Image
          src={productVariant.imageUrl}
          alt={productVariant.name}
          width={0}
          height={0}
          className="h-auto w-full"
          sizes="100vw"
        />

        {/* <div>VARIANTES</div> */}
      </div>
    </>
  );
};

export default ProductVariantPage;
