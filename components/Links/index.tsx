type LinkProps = {
  children: string;
};

const Link = ({ children }: LinkProps) => {
  return <a className="cursor-pointer hover:underline">{children}</a>;
};

const Links = () => {
  return (
    <section className="flex flex-col gap-4 font-openSans text-lg lg:mt-[52px] lg:flex-row lg:gap-32">
      <div className="flex flex-col gap-4">
        <Link>About Us</Link>
        <Link>What We Do</Link>
        <Link>FAQ</Link>
      </div>
      <div className="flex flex-col gap-4">
        <Link>Career</Link>
        <Link>Blog</Link>
        <Link>Contact Us</Link>
      </div>
    </section>
  );
};

export default Links;
