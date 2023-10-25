import Image from "next/image";
import Link from "next/link";
import Slider from "@/components/Slider";
import Slidy from "./Slidy";

const Front = () => {
  return (
    <div className=" relative bg-gray-30 lg:w-4/5 w-full h-screen px-5 md:px-[40px] lg:px-[50px] pb-[50px] overflow-auto z-50">
      <div className=" backdrop-blur-3xl absolute mx-auto top-0 left-0 w-full h-full -z-50 pb-96"></div>
      <div className="  overflow-hidden mx-auto right-0 absolute top-[40%] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full lg:h-2/3 lg:w-2/3 -z-[51]">
        <div className="green"></div>
        <div className="blue"></div>
      </div>
      <div className=" pt-[50px] lg:pt-[100px] mx-auto max-w-[1440px]">
        <h1 className="text-white medium-32 leading-snug lg:text-[48px] lg:leading-[58px] ">
          UI/UX Designer & <br /> Frontend dev
        </h1>

        {/* card */}
        <div className="grid grid-cols-1 grid-flow-row lg:grid-rows-2 lg:grid-cols-2 gap-4 mt-[50px]">
          <div className=" grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-4 ">
            <div className="bg-gray-10 border border-gray-700 rounded-lg flex flex-col justify-center py-9">
              <h1 className=" medium-48 text-white text-center ">100+</h1>
              <p className="regular-18 2xl:text-[20px] 2xl:leading-[28px] text-gray-20 text-center">
                Projets Réalisés
              </p>
            </div>
            <div className="bg-gray-10 border border-gray-700 rounded-lg flex flex-col justify-center py-9">
              <h2 className=" medium-32 2xl:text-[48px] 2xl:leading-[58px] text-white text-center">
                Designer <br /> Expert
              </h2>
            </div>
            <div className="bg-gray-10 border border-gray-700 rounded-lg flex flex-col justify-center py-9">
              <h1 className=" medium-48 text-white text-center">150+</h1>
              <p className="regular-18 2xl:text-[20px] 2xl:leading-[28px] text-gray-20 text-center">
                Clients Satisfaits
              </p>
            </div>
            <div className="bg-gray-10 border border-gray-700 rounded-lg flex flex-col justify-center py-9">
              <h1 className=" medium-48 text-white text-center">
                8<span className="regular-16">Ans</span>
              </h1>
              <p className="regular-18 2xl:text-[20px] 2xl:leading-[28px] text-gray-20 text-center">
                Experience en Design
              </p>
            </div>
          </div>
          <div className="bg-gray-10 border border-gray-700 rounded-lg pt-[40px] px-8 py-9 flex flex-col items-center justify-center">
            <h2 className=" medium-32 2xl:text-[48px] 2xl:leading-[58px] text-white mb-5 leading-tight">
              Je fais des sites et des designs, et je le fais bien.
            </h2>
            <p className="regular-18 text-gray-20 2xl:text-[20px] 2xl:leading-[28px] ">
              Passionné par le Web et le graphisme, j&#39;aime collaborer avec
              des personnes qui attachent une importance à l&#39;esthétisme, qui
              comprennent le pouvoir de la simplicité et qui savent qu&#39;une
              bonne expérience client est primoridiale.
            </p>
            <div className=" self-start">
              <Link
                href="https://www.linkedin.com/in/jean-claude-nganmedjio-603995a1/"
                target="_blank"
                className="flex items-center mt-5"
              >
                <p className="text-green regular-18 2xl:text-[20px] 2xl:leading-[28px] mr-2 hover:underline transition-all delay-300 ease-in-out">
                  Me Contacter
                </p>{" "}
                <Image
                  src="/arrow.svg"
                  height={14}
                  width={16}
                  alt="arrow icon"
                />
              </Link>
            </div>
          </div>
          <div className="bg-gray-10 border border-gray-700 rounded-lg pt-[40px] px-8 py-9">
            <h2 className=" medium-32 2xl:text-[48px] 2xl:leading-[58px] text-white mb-5 leading-tight">
              Mes Réalisations
            </h2>
            <Link href="/work" className="flex items-center mt-5">
              <p className="text-green regular-18 2xl:text-[20px] 2xl:leading-[28px] mr-2 hover:underline transition-all delay-300 ease-in-out">
                Voir Plus
              </p>{" "}
              <Image src="/arrow.svg" height={14} width={16} alt="arrow icon" />
            </Link>
            <Slidy />
          </div>
          <div className="bg-gray-10 border border-gray-700 rounded-lg pt-[40px] px-8 py-9 flex flex-col justify-between">
            <h2 className=" medium-32 2xl:text-[48px] 2xl:leading-[58px] text-white mb-5 leading-tight">
              Mes Compétences
            </h2>
            <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-10">
              <Image
                src="/figma.svg"
                height={66}
                width={92}
                alt="logo figma"
                className=" 2xl:w-[184px] 2xl:h-[132px]"
              />
              <Image
                src="/nextjs.svg"
                height={66}
                width={92}
                alt="logo nextjs"
                className=" 2xl:w-[184px] 2xl:h-[132px]"
              />
              <Image
                src="/tailwind.svg"
                height={66}
                width={92}
                alt="logo tailwind"
                className=" 2xl:w-[184px] 2xl:h-[132px]"
              />
              <Image
                src="/xd.svg"
                height={66}
                width={92}
                alt="logo xd"
                className=" 2xl:w-[184px] 2xl:h-[132px]"
              />
              <Image
                src="/photoshop.svg"
                height={66}
                width={92}
                alt="logo photoshop"
                className=" 2xl:w-[184px] 2xl:h-[132px]"
              />
              <Image
                src="/illustrator.svg"
                height={66}
                width={92}
                alt="logo illustrator"
                className=" 2xl:w-[184px] 2xl:h-[132px]"
              />
              <Image
                src="/indesign.svg"
                height={66}
                width={92}
                alt="logo indesign"
                className=" 2xl:w-[184px] 2xl:h-[132px]"
              />
              <Image
                src="/aftereffect.svg"
                height={66}
                width={92}
                alt="logo aftereffect"
                className=" 2xl:w-[184px] 2xl:h-[132px]"
              />
            </div>
          </div>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default Front;
