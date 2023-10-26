import Realisation from "@/components/Realisation";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const Page = () => {
  return (
    <>
      <Head>
        <title>Projets-N.Jean Claude </title>
      </Head>
      <main className="lg:flex items-center h-screen">
        <Navbar />
        <Realisation />
      </main>
    </>
  );
};

export default Page;
