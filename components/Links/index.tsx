const Links = () => {
  return (
    <section className="flex flex-col gap-4 lg:flex-row lg:gap-32 font-openSans text-lg lg:mt-[52px]">
      <div className="flex flex-col gap-4">
        <a>About Us</a>
        <a>What We Do</a>
        <a>FAQ</a>
      </div>
      <div className="flex flex-col gap-4">
        <a>Career</a>
        <a>Blog</a>
        <a>Contact Us</a>
      </div>
    </section>
  );
};

export default Links;
