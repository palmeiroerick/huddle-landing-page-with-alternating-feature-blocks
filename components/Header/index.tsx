import Button from "../Button";
import Logo from "../Logo";
import Mockups from "../Mockups";
import Text from "../Text";
import Title from "../Title";

const Header = () => {
  return (
    <header>
      <section>
        <Logo />
        <button>Try It Free</button>
      </section>
      <section>
        <div>
          <Title />
          <Text />
          <Button />
        </div>
        <Mockups />
      </section>
    </header>
  );
};

export default Header;
