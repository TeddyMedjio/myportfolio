import Front from "@/components/Front";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div>
      <main className="lg:flex items-center h-screen">
        <Nav />
        <Front />
      </main>
    </div>
  );
}
