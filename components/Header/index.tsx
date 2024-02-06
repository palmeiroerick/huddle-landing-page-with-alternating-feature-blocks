import Logo from "../Logo";
import Mockups from "../Mockups";
import Text from "../Text";
import Title from "../Title";

const Header = () => {
  return (
    <header className="m-auto flex w-[375px] flex-col gap-24 bg-veryPaleCyan bg-mobile bg-no-repeat p-5 lg:w-auto lg:items-center lg:gap-14 lg:bg-desktop lg:bg-top lg:p-8">
      <section className="flex justify-between lg:w-[1280px]">
        <Logo />
        <button className="h-6 w-24 rounded-full bg-white font-openSans text-xs font-bold shadow-[0_8px_16px] shadow-[#d4dae9] lg:h-8 lg:w-32">
          Try It Free
        </button>
      </section>
      <section className="flex flex-col gap-11 lg:w-[1280px] lg:flex-row lg:items-center">
        <div className="flex flex-col gap-7 lg:w-[480px]">
          <Title />
          <Text />
          <button className="m-auto h-10 w-60 rounded-full bg-pink font-openSans text-xs font-bold text-white lg:m-0">
            Get Started For Free
          </button>
        </div>
        <Mockups />
      </section>
    </header>
  );
};

export default Header;
