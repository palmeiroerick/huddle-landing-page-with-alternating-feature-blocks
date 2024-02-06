import Image from "next/image";
import { Children, ReactNode } from "react";

type Children = {
  children: ReactNode;
};

type ContainerProps = {
  flexRowReverse?: boolean;
};

const Container = ({ children, flexRowReverse }: Children & ContainerProps) => {
  const flexRow = flexRowReverse ? "lg:flex-row-reverse" : "lg:flex-row";

  return (
    <div
      className={`${flexRow} flex flex-col items-center gap-6 rounded-2xl p-10 shadow-[0_0_16px] shadow-[#e6edff] lg:w-[1280px] lg:justify-between lg:pl-28`}
    >
      {children}
    </div>
  );
};

const ImageWrapper = ({ children }: Children) => {
  return (
    <div className="relative mb-6 h-56 w-64 lg:m-0 lg:h-[20rem] lg:w-[30rem]">
      {children}
    </div>
  );
};

const TextWrapper = ({ children }: Children) => {
  return (
    <div className="flex flex-col items-center gap-6 lg:w-[31rem] lg:items-start lg:gap-2">
      {children}
    </div>
  );
};

const CardTitle = ({ children }: Children) => {
  return (
    <h2 className="font-poppins text-xl font-bold lg:text-2xl">{children}</h2>
  );
};

const CardText = ({ children }: Children) => {
  return (
    <p className="text-center font-openSans text-sm text-grayishBlue lg:text-start lg:text-lg">
      {children}
    </p>
  );
};

const Cards = () => {
  return (
    <section className="flex flex-col items-center gap-10 lg:gap-8">
      <Container flexRowReverse>
        <ImageWrapper>
          <Image
            className="object-contain"
            src="/assets/illustration-grow-together.svg"
            alt=""
            fill
          />
        </ImageWrapper>
        <TextWrapper>
          <CardTitle>Grow Together</CardTitle>
          <CardText>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </CardText>
        </TextWrapper>
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
        <TextWrapper>
          <CardTitle>Flowing Conversations</CardTitle>
          <CardText>
            You wouldn&apos;t paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </CardText>
        </TextWrapper>
      </Container>
      <Container flexRowReverse>
        <ImageWrapper>
          <Image
            className="object-contain"
            src="/assets/illustration-your-users.svg"
            alt=""
            fill
          />
        </ImageWrapper>
        <TextWrapper>
          <CardTitle>Your Users</CardTitle>
          <CardText>
            It takes no time at all to integrate Huddle with your app&apos;s
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </CardText>
        </TextWrapper>
      </Container>
    </section>
  );
};

export default Cards;
