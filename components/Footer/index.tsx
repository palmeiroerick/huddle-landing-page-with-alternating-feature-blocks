import Contact from "../Contact";
import Copyright from "../Copyright";
import Links from "../Links";
import Logo from "../Logo";
import SocialIcons from "../SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-veryDarkCyan">
      <div className="m-auto flex w-[375px] flex-col gap-12 px-4 lg:px-0 pb-16 pt-28 text-veryPaleCyan lg:w-[1280px] lg:flex-row lg:justify-between">
        <section className="flex flex-col gap-8 lg:w-96 lg:gap-6">
          <Logo white />
          <Contact />
        </section>
        <Links />
        <section className="flex flex-col items-center gap-6 lg:mt-[52px] lg:w-72 lg:items-start lg:justify-between lg:h-52">
          <SocialIcons />
          <Copyright />
        </section>
      </div>
    </footer>
  );
};

export default Footer;
