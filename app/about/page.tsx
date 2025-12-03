import About from "@/components/About";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "About",
  description:
    "Designer UX/UI et développeur frontend passionné avec plus de 8 ans d'expérience. Découvrez mon parcours, mes compétences et ma vision du design et du développement web.",
  openGraph: {
    title: "À propos • N. Jean Claude",
    description:
      "Designer UX/UI et développeur frontend passionné avec plus de 8 ans d'expérience. Découvrez mon parcours, mes compétences et ma vision du design et du développement web.",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos • N. Jean Claude",
    description:
      "Designer UX/UI et développeur frontend passionné avec plus de 8 ans d'expérience. Découvrez mon parcours, mes compétences et ma vision du design et du développement web.",
  },
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
