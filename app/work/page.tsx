import Realisation from "@/components/Realisation";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <main className="lg:flex items-center h-screen">
      <Navbar />
      <Realisation />
    </main>
  );
};

export default Page;
