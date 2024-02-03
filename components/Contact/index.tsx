import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div className="flex gap-6 pr-1">
        <Image
          className="mt-1 h-[18px]"
          src="/assets/icon-location.svg"
          alt=""
          width={13}
          height={18}
        />
        <p className="font-openSans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="flex gap-[19px]">
        <Image
          className="mt-1 h-[18px]"
          src="/assets/icon-phone.svg"
          alt=""
          width={18}
          height={18}
        />
        <p className="font-openSans">+1-543-123-4567</p>
      </div>
      <div className="flex gap-[17px]">
        <Image
          className="mt-1 h-4"
          src="/assets/icon-email.svg"
          alt=""
          width={20}
          height={16}
        />
        <p className="font-openSans">example@huddle.com</p>
      </div>
    </>
  );
};

export default Contact;
