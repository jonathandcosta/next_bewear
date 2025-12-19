import Header from "@/components/common/header";

import Image from "next/image";

const Home = () => {
  return (
    <>
      <Header />
      <div className="space-y-6 px-5">
        <Image
          src="/img/banner_01.png"
          alt="Leve a vida com estilo"
          width={0}
          height={0}
          sizes="100vw"
          className="mt-5 h-auto w-full"
        />

        <div className="flex gap-3"></div>

        <Image
          src="/img/banner_02.png"
          alt="Leve a vida com estilo"
          width={0}
          height={0}
          sizes="100vw"
          className="mt-5 h-auto w-full"
        />
      </div>
    </>
  );
};

export default Home;
