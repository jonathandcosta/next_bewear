import { Header } from "@/components/common/header";
import { db } from "@/db";
import { productVariantTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import Image from "next/image";
import { formatCentsBRL } from "@/helpers/money";
import { Button } from "@/components/ui/button";

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
          className="h-auto w-full object-cover"
          sizes="100vw"
        />

        {/* <div>VARIANTES</div> */}

        {/* DETAILS */}
        <div className="px-5">
          <h2 className="text-lg font-semibold">{productVariant.name}</h2>
          <h2 className="text-muted-foreground text-sm">
            {productVariant.product.name}
          </h2>
          <h3 className="text-lg font-semibold">
            {formatCentsBRL(productVariant.priceInCents)}
          </h3>
        </div>

        {/* QUANTIDADE */}
        <div className="px-5"></div>

        {/* BOTÕES */}
        <div className="flex flex-col space-y-4 px-5">
          <Button className="rounded-full" size="lg" variant="outline">
            Adicionar a sacola
          </Button>
          <Button className="rounded-full" size="lg">
            Comprar agora
          </Button>
        </div>

        {/* DESCRIÇÃO */}
        <div className="px-5">
          <p className="text-sm">{productVariant.product.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductVariantPage;
