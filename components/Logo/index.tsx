import Image from "next/image";

type LogoProps = {
  white?: boolean;
};

const Logo = ({ white }: LogoProps) => {
  const logo = white ? "/assets/logo-white.svg" : "/assets/logo.svg";
  const width = white ? "w-40" : "w-[100px] lg:w-[144px]";

  return (
    <div className={`${width} relative h-[28px]`}>
      <Image className="object-contain" src={logo} alt="Huddle" fill />
    </div>
  );
};

export default Logo;
