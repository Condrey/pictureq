export default function Page() {
  return (
    <div className="space-y-4 py-8">
      <section>
        <Paragraph>
          Welcome to PictureQ, a place where daily inspiration meets beautiful
          visuals. At PictureQ, we believe in the power of words to uplift,
          motivate, and inspire. That is why we have created a platform that
          shares daily Bible quotes paired with stunning imagery to bring you
          encouragement, peace, and wisdom throughout your day. Whether you are
          seeking comfort, strength, or a moment of reflection, PictureQ offers
          a thoughtful and meaningful way to connect with the Word.
        </Paragraph>
      </section>

      <section>
        <Heading>Our mission</Heading>
        <Paragraph>
          Our mission is simple: to provide daily spiritual nourishment through
          powerful Bible verses. We strive to make these messages more
          accessible, shareable, and visually engaging for people of all
          backgrounds and beliefs. PictureQ is here to help you stay rooted in
          faith, find daily inspiration, and share that inspiration with others.
        </Paragraph>
      </section>

      <section>
        <Heading>Why PictureQ?</Heading>
        <Paragraph>
          We know that life can be challenging, and sometimes, all we need is a
          moment of reflection. By pairing Bible verses with carefully curated
          images, we aim to create an experience that is both visually beautiful
          and spiritually uplifting. Whether it is a morning reminder, a mid-day
          pause, or an evening reflection, PictureQ is here to help guide you on
          your spiritual journey.
        </Paragraph>
      </section>

      <section>
        <Heading>Our Vision</Heading>
        <Paragraph>
          We envision a world where individuals can start and end each day with
          a word of hope and encouragement. Through the simple act of sharing
          Bible quotes, we hope to foster a greater sense of community, inspire
          positive change, and bring people closer together through the wisdom
          of scripture.
        </Paragraph>
      </section>

      <section>
        <Heading>How It Works</Heading>
        <Paragraph>
          Each day, PictureQ delivers a new Bible quote, paired with an
          inspiring image, right to your feed. You can easily share these quotes
          on social media, send them to friends and family, or simply reflect on
          them throughout the day. Our goal is to provide a seamless way for you
          to integrate Scripture into your daily routine.
        </Paragraph>
      </section>

      <section>
        <Heading>Join Us</Heading>
        <Paragraph>
          We invite you to be part of the PictureQ community. Share, reflect,
          and be inspired as you spread the love and wisdom of the Bible with
          those around you. Together, we can create a space of encouragement,
          growth, and spiritual connection. Thank you for being part of this
          journey with us.
        </Paragraph>
      </section>
    </div>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className=" text-pretty max-w-prose leading-relaxed md:leading-loose   text-justify first-letter:text-3xl">
      {children}
    </p>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-center sm:text-start capitalize text-2xl font-bold line-clamp-1 break-words text-ellipsis">
      {children}
    </h1>
  );
}
