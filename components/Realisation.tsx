import Image from "next/image";
import Link from "next/link";
import Slider from "./Slider";

const Realisation = () => {
  return (
    <div className=" relative bg-gray-30 lg:w-4/5 w-full h-screen px-5 md:px-[40px] lg:px-[50px] pb-[100px] overflow-auto z-50">
      <div className=" backdrop-blur-3xl absolute mx-auto top-0 left-0 w-full h-full -z-50 pb-96"></div>
      <div className="  overflow-hidden mx-auto right-0 absolute top-[40%] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full lg:h-2/3 lg:w-2/3 -z-[51]">
        <div className="green"></div>
        <div className="blue"></div>
      </div>
      <div className=" pt-[50px] lg:pt-[100px] mx-auto max-w-[1440px]">
        <h1 className="text-white medium-32 leading-snug lg:text-[48px] lg:leading-[58px] ">
          Mes Réalisations
        </h1>

        {/* card */}
        <div className="grid grid-cols-1 grid-flow-row lg:grid-rows-2 lg:grid-cols-2 gap-4 mt-[50px]">
          <div className="bg-gray-10 border border-gray-700 rounded-lg ">
            <div className=" overflow-hidden rounded-tl-lg rounded-tr-lg">
              <Image
                src="/notary.jpg"
                height={1440}
                width={720}
                alt="icon tab"
                className="rounded-tl-lg rounded-tr-lg hover:scale-125 transform transition duration-500"
              />
            </div>
            <div className="pt-[40px] px-8 py-9">
              <div className="flex items-center flex-wrap mb-8 gap-4 ">
                <p className="text-gray-20 border border-gray-20 rounded-md px-3 py-1 regular-13">
                  Figma
                </p>
                <p className="text-gray-20 border border-gray-20 rounded-md px-3 py-1 regular-13">
                  Photoshop
                </p>
                <p className="text-gray-20 border border-gray-20 rounded-md px-3 py-1 regular-13">
                  Next JS
                </p>
                <p className="text-gray-20 border border-gray-20 rounded-md px-3 py-1 regular-13">
                  Tailwind css
                </p>
              </div>
              <div className="flex items-center justify-between ">
                <h2 className="text-[25px] md:text-[32px] text-white  leading-tight ">
                  Notaire Riegelova{" "}
                </h2>
                <Link href="https://notary-virid.vercel.app/" target="_blank">
                  <Image src="/tab.svg" height={21} width={21} alt="icon tab" />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gray-10 border border-gray-700 rounded-lg ">
            <div className=" overflow-hidden rounded-tl-lg rounded-tr-lg">
              <Image
                src="/finsura.jpg"
                height={1440}
                width={720}
                alt="icon tab"
                className="rounded-tl-lg rounded-tr-lg hover:scale-125 transform transition duration-500 "
              />
            </div>
            <div className="pt-[40px] px-8 py-9">
              <div className="flex items-center flex-wrap mb-8 gap-4 ">
                <p className="text-gray-20 border border-gray-20 rounded-md px-3 py-1 regular-13">
                  Figma
                </p>
                <p className="text-gray-20 border border-gray-20 rounded-md px-3 py-1 regular-13">
                  Photoshop
                </p>
                <p className="text-gray-20 border border-gray-20 rounded-md px-3 py-1 regular-13">
                  Illustrator
                </p>
              </div>
              <div className="flex items-center justify-between ">
                <h2 className="text-[25px] md:text-[32px] text-white  leading-tight ">
                  Finsura AG
                </h2>
                <Link href="https://www.behance.net/njean" target="_blank">
                  <Image src="/tab.svg" height={21} width={21} alt="icon tab" />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gray-10 border border-gray-700 rounded-lg ">
            <div className=" overflow-hidden rounded-tl-lg rounded-tr-lg">
              <Image
                src="/emarketing.jpg"
                height={1440}
                width={720}
                alt="icon tab"
                className="rounded-tl-lg rounded-tr-lg hover:scale-125 transform transition duration-500"
              />
            </div>
            <div className="pt-[40px] px-8 py-9">
              <div className="flex items-center flex-wrap mb-8 gap-4 ">
                <p className="text-gray-20 border border-gray-20 rounded-md px-3 py-1 regular-13">
                  Figma
                </p>
                <p className="text-gray-20 border border-gray-20 rounded-md px-3 py-1 regular-13">
                  Photoshop
                </p>
                <p className="text-gray-20 border border-gray-20 rounded-md px-3 py-1 regular-13">
                  Next JS
                </p>
                <p className="text-gray-20 border border-gray-20 rounded-md px-3 py-1 regular-13">
                  Tailwind css
                </p>
              </div>
              <div className="flex items-center justify-between ">
                <h2 className="text-[25px] md:text-[32px] text-white  leading-tight ">
                  Emotional Marketing
                </h2>
                <Link href="https://www.em-marketing.ch/" target="_blank">
                  <Image src="/tab.svg" height={21} width={21} alt="icon tab" />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gray-10 border border-gray-700 rounded-lg ">
            <div className=" overflow-hidden rounded-tl-lg rounded-tr-lg">
              <Image
                src="/barbershop.jpg"
                height={1440}
                width={720}
                alt="icon tab"
                className="rounded-tl-lg rounded-tr-lg hover:scale-125 transform transition duration-500"
              />
            </div>
            <div className="pt-[40px] px-8 py-9">
              <div className="flex items-center flex-wrap mb-8 gap-4 ">
                <p className="text-gray-20 border border-gray-20 rounded-md px-3 py-1 regular-13">
                  Figma
                </p>
                <p className="text-gray-20 border border-gray-20 rounded-md px-3 py-1 regular-13">
                  Photoshop
                </p>
                <p className="text-gray-20 border border-gray-20 rounded-md px-3 py-1 regular-13">
                  Next JS
                </p>
                <p className="text-gray-20 border border-gray-20 rounded-md px-3 py-1 regular-13">
                  Tailwind css
                </p>
              </div>
              <div className="flex items-center justify-between ">
                <h2 className="text-[25px] md:text-[32px] text-white  leading-tight ">
                  OZ Barbershop
                </h2>
                <Link
                  href="https://barbershop-three-phi.vercel.app/"
                  target="_blank"
                >
                  <Image src="/tab.svg" height={21} width={21} alt="icon tab" />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gray-10 border border-gray-700 rounded-lg ">
            <div className=" overflow-hidden rounded-tl-lg rounded-tr-lg">
              <Image
                src="/travel.jpg"
                height={1440}
                width={720}
                alt="icon tab"
                className="rounded-tl-lg rounded-tr-lg hover:scale-125 transform transition duration-500 "
              />
            </div>
            <div className="pt-[40px] px-8 py-9">
              <div className="flex items-center flex-wrap mb-8 gap-4 ">
                <p className="text-gray-20 border border-gray-20 rounded-md px-3 py-1 regular-13">
                  Next JS
                </p>
                <p className="text-gray-20 border border-gray-20 rounded-md px-3 py-1 regular-13">
                  Tailwind css
                </p>
              </div>
              <div className="flex items-center justify-between ">
                <h2 className="text-[25px] md:text-[32px] text-white  leading-tight ">
                  Travel App
                </h2>
                <Link
                  href="https://travel-theta-three.vercel.app/"
                  target="_blank"
                >
                  <Image src="/tab.svg" height={21} width={21} alt="icon tab" />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gray-10 border border-gray-700 rounded-lg ">
            <div className="overflow-hidden rounded-tl-lg rounded-tr-lg">
              <Image
                src="/zuhechia.jpg"
                height={1440}
                width={720}
                alt="icon tab"
                className="rounded-tl-lg rounded-tr-lg hover:scale-125 transform transition duration-500"
              />
            </div>
            <div className="pt-[40px] px-8 py-9">
              <div className="flex items-center flex-wrap mb-8 gap-4 ">
                <p className="text-gray-20 border border-gray-20 rounded-md px-3 py-1 regular-13">
                  Figma
                </p>
                <p className="text-gray-20 border border-gray-20 rounded-md px-3 py-1 regular-13">
                  Photoshop
                </p>
                <p className="text-gray-20 border border-gray-20 rounded-md px-3 py-1 regular-13">
                  Next JS
                </p>
                <p className="text-gray-20 border border-gray-20 rounded-md px-3 py-1 regular-13">
                  Tailwind css
                </p>
              </div>
              <div className="flex items-center justify-between ">
                <h2 className="text-[25px] md:text-[32px] text-white  leading-tight ">
                  Zuhe Chia
                </h2>
                <Link href="https://www.behance.net/njean" target="_blank">
                  <Image src="/tab.svg" height={21} width={21} alt="icon tab" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Slider />
    </div>
  );
};

export default Realisation;
