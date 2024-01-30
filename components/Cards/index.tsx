import Image from "next/image";

const Cards = () => {
  return (
    <section>
      <div>
        <div className="relative w-[1023.46px] h-[837.84px]">
          <Image
            className="object-contain"
            src="/assets/illustration-grow-together.svg"
            alt=""
            fill
          />
        </div>
        <h2>Grow Together</h2>
        <p>
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </p>
      </div>
      <div>
        <div className="relative w-[1023.46px] h-[837.84px]">
          <Image
            className="object-contain"
            src="/assets/illustration-flowing-conversation.svg"
            alt=""
            fill
          />
        </div>
        <h2>Flowing Conversations</h2>
        <p>
          You wouldn&apos;t paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>
      </div>
      <div>
        <div className="relative w-[1023.46px] h-[837.84px]">
          <Image
            className="object-contain"
            src="/assets/illustration-your-users.svg"
            alt=""
            fill
          />
        </div>
        <h2>Your Users</h2>
        <p>
          It takes no time at all to integrate Huddle with your app&apos;s
          authentication solution. This means, once signed in to your app, your
          users can start chatting immediately.
        </p>
      </div>
    </section>
  );
};

export default Cards;
