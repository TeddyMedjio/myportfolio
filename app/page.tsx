import Front from "@/components/Front";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "N. Jean Claude",
  description: "I'am UI/UX Designer & Frontend dev",
};

export default function Home() {
  return (
    <div>
      <main className="lg:flex items-center h-screen">
        <Navbar />
        <Front />
      </main>
    </div>
  );
}
