import About from "@/components/About";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <main className="lg:flex items-center h-screen">
      <Navbar />
      <About />
    </main>
  );
};

export default page;
