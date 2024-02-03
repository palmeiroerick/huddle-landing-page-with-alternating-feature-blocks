import Image from "next/image";
import { ReactNode } from "react";

type Children = {
  children: ReactNode;
};

const Container = ({ children }: Children) => {
  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl p-10 shadow-[0_0_16px] shadow-[#e6edff]">
      {children}
    </div>
  );
};

const ImageWrapper = ({ children }: Children) => {
  return <div className="relative mb-6 h-56 w-64">{children}</div>;
};

const CardTitle = ({ children }: Children) => {
  return <h2 className="font-poppins text-xl font-bold">{children}</h2>;
};

const CardText = ({ children }: Children) => {
  return <p className="font-openSans text-sm text-grayishBlue text-center">{children}</p>;
};

const Cards = () => {
  return (
    <section className="flex flex-col items-center gap-10">
      <Container>
        <ImageWrapper>
          <Image
            className="object-contain"
            src="/assets/illustration-grow-together.svg"
            alt=""
            fill
          />
        </ImageWrapper>
        <CardTitle>Grow Together</CardTitle>
        <CardText>
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </CardText>
      </Container>
      <Container>
        <ImageWrapper>
          <Image
            className="object-contain"
            src="/assets/illustration-flowing-conversation.svg"
            alt=""
            fill
          />
        </ImageWrapper>
        <CardTitle>Flowing Conversations</CardTitle>
        <CardText>
          You wouldn&apos;t paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </CardText>
      </Container>
      <Container>
        <ImageWrapper>
          <Image
            className="object-contain"
            src="/assets/illustration-your-users.svg"
            alt=""
            fill
          />
        </ImageWrapper>
        <CardTitle>Your Users</CardTitle>
        <CardText>
          It takes no time at all to integrate Huddle with your app&apos;s
          authentication solution. This means, once signed in to your app, your
          users can start chatting immediately.
        </CardText>
      </Container>
    </section>
  );
};

export default Cards;
