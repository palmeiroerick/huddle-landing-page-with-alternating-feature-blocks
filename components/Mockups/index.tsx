import Image from "next/image";

const Mockups = () => {
  return (
    <div className="relative m-auto h-[216px] w-[300px] lg:w-[680px] lg:h-[560px]">
      <Image
        className="object-contain"
        src="/assets/illustration-mockups.svg"
        alt=""
        fill
      />
    </div>
  );
};

export default Mockups;
