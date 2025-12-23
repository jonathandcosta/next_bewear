import CategorySelector from "@/components/common/category-sellector";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import { db } from "@/db";

import Image from "next/image";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });

  const categories = await db.query.categoryTable.findMany({});

  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="px-5">
          <Image
            src="/img/banner_01.png"
            alt="Leve a vida com estilo"
            width={0}
            height={0}
            sizes="100vw"
            className="mt-5 h-auto w-full"
          />
        </div>

        <ProductList title="Mais vendidos" products={products} />

        <div className="px-5">
          <CategorySelector categories={categories} />
        </div>

        <div className="flex gap-3"></div>

        <div className="px-5">
          <Image
            src="/img/banner_02.png"
            alt="Leve a vida com estilo"
            width={0}
            height={0}
            sizes="100vw"
            className="mt-5 h-auto w-full"
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
