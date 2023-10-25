import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className=" relative bg-gray-30 lg:w-4/5 w-full h-full px-5 md:px-[40px] lg:px-[50px]  overflow-auto z-50">
      <div className=" pt-[50px] lg:pt-[100px] mx-auto max-w-[1440px]">
        <h1 className="text-white medium-32 medium-32 leading-snug lg:text-[48px] lg:leading-[58px] ">
          UI/UX Designer & <br className="md:hidden" />
          Frontend dev
        </h1>
        <p className="regular-16 mt-5 text-white">
          Basé au Cameroun à Douala plus précisement.
        </p>

        <div className="mt-16 pb-10 flex">
          <div className="card hidden lg:block " data-color="blue">
            <Image
              src="/profil.jpg"
              width={768}
              height={1024}
              alt="photo de n. jean claude"
              className="rounded-lg card-front-image card-image"
            />
            <div className="card-faders">
              <Image
                src="/profil.jpg"
                width={768}
                height={1024}
                alt="photo de n. jean claude"
                className="rounded-lg card-fader card-image"
              />
              <Image
                src="/profil.jpg"
                width={768}
                height={1024}
                alt="photo de n. jean claude"
                className="rounded-lg card-fader card-image"
              />
              <Image
                src="/profil.jpg"
                width={768}
                height={1024}
                alt="photo de n. jean claude"
                className="rounded-lg card-fader card-image"
              />
              <Image
                src="/profil.jpg"
                width={768}
                height={1024}
                alt="photo de n. jean claude"
                className="rounded-lg card-fader card-image"
              />
              <Image
                src="/profil.jpg"
                width={768}
                height={1024}
                alt="photo de n. jean claude"
                className="rounded-lg card-fader card-image"
              />
              <Image
                src="/profil.jpg"
                width={768}
                height={1024}
                alt="photo de n. jean claude"
                className="rounded-lg card-fader card-image"
              />
              <Image
                src="/profil.jpg"
                width={768}
                height={1024}
                alt="photo de n. jean claude"
                className="rounded-lg card-fader card-image"
              />
              <Image
                src="/profil.jpg"
                width={768}
                height={1024}
                alt="photo de n. jean claude"
                className="rounded-lg card-fader card-image"
              />
            </div>
          </div>

          <div className="lg:px-10 ">
            <p className="regular-18 text-gray-300 2xl:text-[20px] 2xl:leading-[28px] ">
              Je fais des sites et des designs, et je le fais bien. Passionné
              par le Web et le graphisme, j&#39;aime collaborer avec des
              personnes qui attachent une importance à l&#39;esthétisme, qui
              comprennent le pouvoir de la simplicité et qui savent qu&#39;une
              bonne expérience client est primoridiale.
            </p>
            <br />
            <p className="regular-18 text-gray-300 2xl:text-[20px] 2xl:leading-[28px]">
              En gardant votre identité au coeur de ma démarche, mon but est de
              faire en sorte de trouver la solution la plus simple pour répondre
              à vos besoins. Mes client·e·s font appel à mes services pour mon
              efficacité, ma polyvalence et mon aisance dans nos échanges et
              aussi parce que je fais des cookies incroyables, le secret c’est
              de mettre beaucoup de beurre demi-sel.
            </p>

            <p className="regular-18 text-gray-300 2xl:text-[20px] 2xl:leading-[28px] ">
              La majorité de mon temps libre est consacrée à la musique et à la
              cuisine, une activité passionnante qui me permet de développer ma
              créativité.
              <br />
              <br />
              J&apos;aime le chiffre 3 je pense sa à un rapport avec le fait que
              je sois née le 3e mois.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
