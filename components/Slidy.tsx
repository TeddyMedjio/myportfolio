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
            alt=""
            className="items w-full h-full"
          />
          <Image
            src="/finsura.jpg"
            width={1440}
            height={720}
            alt=""
            className="items w-full h-full"
          />
          <Image
            src="/barbershop.jpg"
            width={1440}
            height={720}
            alt=""
            className="items w-full h-full"
          />
          <Image
            src="/zuhechia.jpg"
            width={1440}
            height={720}
            alt=""
            className="items w-full h-full"
          />
          <Image
            src="/emarketing.jpg"
            width={1440}
            height={720}
            alt=""
            className="items w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Slidy;
