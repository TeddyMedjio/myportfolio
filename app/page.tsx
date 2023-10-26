import Head from "next/head";
import Front from "@/components/Front";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>N. Jean Claude - UI/UX Designer & Frontend dev</title>
        <meta
          name="keywords"
          content="Graphic-design, web development, UI/UX Designer, Frontend dev"
        />
      </Head>
      <main className="lg:flex items-center h-screen">
        <Navbar />
        <Front />
      </main>
    </>
  );
}
