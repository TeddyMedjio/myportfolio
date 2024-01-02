import About from "@/components/About";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | N. Jean Claude",
  description: "I'am UI/UX Designer & Frontend dev",
};

const page = () => {
  return (
    <div>
      <main className="lg:flex items-center h-screen">
        <Navbar />
        <About />
      </main>
    </div>
  );
};

export default page;
