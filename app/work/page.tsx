import Head from "next/head";
import Realisation from "@/components/Realisation";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <>
      <Head>
        <title>Projets | N. Jean Claude </title>
        <meta name="Projets" content="Portfolio" key="work" />
      </Head>
      <main className="lg:flex items-center h-screen">
        <Navbar />
        <Realisation />
      </main>
    </>
  );
};

export default Page;
