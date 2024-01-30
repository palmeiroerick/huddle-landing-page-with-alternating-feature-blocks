import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative w-[240px] h-[39px] ">
      <Image
        className="object-contain"
        src="/assets/logo.svg"
        alt="Huddle"
        fill
      />
    </div>
    // <div className="relative w-[240px] h-[39px]">
    //   <Image
    //     className="object-contain"
    //     src="/assets/logo-white.svg"
    //     alt="Huddle"
    //     fill
    //   />
    // </div>
  );
};

export default Logo;
