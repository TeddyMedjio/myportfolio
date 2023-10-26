import Head from "next/head";
import About from "@/components/About";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <>
      <Head>
        <title>A Propos | N. Jean Claude </title>
        <meta name="A propos" content="About" key="desc" />
      </Head>
      <main className="lg:flex items-center h-screen">
        <Navbar />
        <About />
      </main>
    </>
  );
};

export default page;
