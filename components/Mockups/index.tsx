import Image from "next/image";

const Mockups = () => {
  return (
    <div className="relative m-auto h-[216px] w-[300px]">
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
