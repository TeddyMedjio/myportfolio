import About from "@/components/About";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "About",
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
