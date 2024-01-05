import Realisation from "@/components/Realisation";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Projets ",
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
