import Front from "@/components/Front";
import Navbar from "@/components/Navbar";

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
