import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div>
        <Image src="/assets/icon-location.svg" alt="" width={13} height={18} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div>
        <Image src="/assets/icon-phone.svg" alt="" width={18} height={18} />
        <p>+1-543-123-4567</p>
      </div>
      <div>
        <Image src="/assets/icon-email.svg" alt="" width={20} height={16} />
        <p>example@huddle.com</p>
      </div>
    </>
  );
};

export default Contact;
