const AboutSection1 = () => {
  return (
    <section className="flex items-center gap-8 py-7 px-14 font-lato  justify-between">
      <div className="flex flex-col gap-9">
        <h2 className="text-5xl opacity-75">Who are we?</h2>
        <p className="max-w-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum
          velit dolore voluptatibus, cumque corrupti debitis corporis qui sint,
          inventore enim nisi minima fugit amet, dolorum tempore! Beatae, harum
          laudantium! Ratione magnam explicabo, quod debitis rem fugit deleniti
          obcaecati, doloribus illo nisi porro natus totam sequi a quas! Labore
          fugiat non illum, dignissimos ex nemo voluptates sunt quod ratione
          iure?
        </p>
        <p className="max-w-200">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          obcaecati eligendi, voluptatibus omnis vitae pariatur natus aliquid
          aperiam maiores culpa facilis possimus animi distinctio asperiores
          velit nobis aspernatur earum quia.
        </p>
      </div>
      <div className="max-w-220">
        <img
          src="/img/about-page1.jpg"
          alt="Image of tour"
          className="max-w-full rounded-md"
        />
      </div>
    </section>
  );
};

export default AboutSection1;
