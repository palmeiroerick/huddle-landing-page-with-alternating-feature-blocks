import Image from "next/image";

const Mockups = () => {
  return (
    <div className="relative w-[1035px] h-[739px]">
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
