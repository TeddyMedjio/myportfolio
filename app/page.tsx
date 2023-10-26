import Head from "next/head";
import Front from "@/components/Front";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          N. Jean Claude - Freelance webdesigner & Graphique designer
        </title>
        <meta name="keywords" content="Graphic-design, web development" />
      </Head>
      <main className="lg:flex items-center h-screen">
        <Navbar />
        <Front />
      </main>
    </>
  );
}
