import Image from "next/image";

const Slidy = () => {
  return (
    <div>
      <div className="slide mt-10 rounded-lg">
        <div className="figure flex items-center flex-nowrap">
          <Image
            src="/notary.jpg"
            width={1440}
            height={720}
            alt="Projet Notary - Design et développement web"
            className="items w-full h-full"
          />
          <Image
            src="/finsura.jpg"
            width={1440}
            height={720}
            alt="Projet Finsura - Interface utilisateur moderne"
            className="items w-full h-full"
          />
          <Image
            src="/barbershop.jpg"
            width={1440}
            height={720}
            alt="Projet Barbershop - Site web responsive"
            className="items w-full h-full"
          />
          <Image
            src="/zuhechia.jpg"
            width={1440}
            height={720}
            alt="Projet Zuhechia - Application web"
            className="items w-full h-full"
          />
          <Image
            src="/emarketing.jpg"
            width={1440}
            height={720}
            alt="Projet E-Marketing - Plateforme marketing digitale"
            className="items w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Slidy;
