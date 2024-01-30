import Contact from "../Contact";
import Copyright from "../Copyright";
import Links from "../Links";
import Logo from "../Logo";
import SocialIcons from "../SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-veryDarkCyan">
      <section>
        <Logo />
        <Contact />
      </section>
      <Links />
      <section>
        <SocialIcons />
        <Copyright />
      </section>
    </footer>
  );
};

export default Footer;
