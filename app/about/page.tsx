import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <title>A Propos-N.Jean Claude </title>
        <meta name="A propos" content="About" />
      </Head>
      <main className="lg:flex items-center h-screen">
        <Navbar />
        <About />
      </main>
    </>
  );
};

export default page;
