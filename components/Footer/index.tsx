import Contact from "../Contact";
import Copyright from "../Copyright";
import Links from "../Links";
import Logo from "../Logo";
import SocialIcons from "../SocialIcons";

const Footer = () => {
  return (
    <footer className="m-auto flex w-[375px] flex-col gap-12 bg-veryDarkCyan px-4 pt-28 pb-16 text-veryPaleCyan">
      <section className="flex flex-col gap-8">
        <Logo white />
        <Contact />
      </section>
      <Links />
      <section className="flex flex-col gap-6 items-center">
        <SocialIcons />
        <Copyright />
      </section>
    </footer>
  );
};

export default Footer;
