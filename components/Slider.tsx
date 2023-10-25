import Image from "next/image";

const Slider = () => {
  return (
    <div className="scroller mt-20 w-full mx-auto ">
      <div className="scroller__inner flex flex-nowrap gap-10 ">
        <Image
          src="/challenge.svg"
          height={150}
          width={150}
          alt="logo challenge"
        />
        <Image
          src="/marketing.svg"
          height={58}
          width={99}
          alt="logo marketing"
        />
        <Image src="/finsura.svg" height={240} width={150} alt="logo finsura" />
        <Image src="/zuhe.svg" height={150} width={150} alt="logo zuhe" />
        <Image src="/scarface.svg" height={50} width={50} alt="logo scarface" />
        <Image
          src="/challenge.svg"
          height={150}
          width={150}
          alt="logo challenge"
        />
        <Image
          src="/marketing.svg"
          height={58}
          width={99}
          alt="logo marketing"
        />
        <Image src="/finsura.svg" height={150} width={150} alt="logo finsura" />
        <Image src="/zuhe.svg" height={150} width={150} alt="logo zuhe" />
        <Image src="/scarface.svg" height={50} width={50} alt="logo scarface" />
        <Image
          src="/challenge.svg"
          height={150}
          width={150}
          alt="logo challenge"
        />
        <Image
          src="/marketing.svg"
          height={58}
          width={99}
          alt="logo marketing"
        />
        <Image src="/finsura.svg" height={150} width={150} alt="logo finsura" />
        <Image src="/zuhe.svg" height={150} width={150} alt="logo zuhe" />
        <Image src="/scarface.svg" height={50} width={50} alt="logo scarface" />
        <Image
          src="/challenge.svg"
          height={150}
          width={150}
          alt="logo challenge"
        />
        <Image
          src="/marketing.svg"
          height={58}
          width={99}
          alt="logo marketing"
        />
        <Image src="/finsura.svg" height={150} width={150} alt="logo finsura" />
        <Image src="/zuhe.svg" height={150} width={150} alt="logo zuhe" />
      </div>
    </div>
  );
};

export default Slider;
