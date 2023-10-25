import Front from "@/components/Front";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="lg:flex items-center h-screen">
      <Navbar />
      <Front />
    </main>
  );
}
