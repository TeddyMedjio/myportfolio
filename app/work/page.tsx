import Realisation from "@/components/Realisation";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets | N. Jean Claude",
  description: "I'am UI/UX Designer & Frontend dev",
};

const Page = () => {
  return (
    <div>
      <main className="lg:flex items-center h-screen">
        <Navbar />
        <Realisation />
      </main>
    </div>
  );
};

export default Page;
