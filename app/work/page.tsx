import Realisation from "@/components/Realisation";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Projets",
  description:
    "Découvrez mes réalisations en design UX/UI et développement web. Plus de 100 projets créatifs incluant Notary, Finsura, Barbershop, Zuhechia et E-Marketing.",
  openGraph: {
    title: "Mes Projets • N. Jean Claude",
    description:
      "Découvrez mes réalisations en design UX/UI et développement web. Plus de 100 projets créatifs incluant Notary, Finsura, Barbershop, Zuhechia et E-Marketing.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mes Projets • N. Jean Claude",
    description:
      "Découvrez mes réalisations en design UX/UI et développement web. Plus de 100 projets créatifs incluant Notary, Finsura, Barbershop, Zuhechia et E-Marketing.",
  },
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
