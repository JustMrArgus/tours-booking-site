const AboutSection2 = () => {
  return (
    <section className="flex items-center gap-8 p-7 px-14 font-lato justify-between">
      <div className="max-w-220">
        <img
          src="/img/about-page2.jpg"
          alt="Image of tour"
          className="max-w-full rounded-md"
        />
      </div>
      <div className="flex flex-col gap-9">
        <h2 className="text-5xl opacity-75">Why us?</h2>
        <p className="max-w-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vero
          quam placeat. Tempore alias quas corporis numquam deserunt, saepe,
          beatae corrupti odio rerum iusto veritatis, magni veniam. Nihil,
          consequuntur enim.
        </p>
        <p className="max-w-200">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          obcaecati eligendi, voluptatibus omnis vitae pariatur natus aliquid
          aperiam maiores culpa facilis possimus animi distinctio asperiores
          velit nobis aspernatur earum quia.
        </p>
      </div>
    </section>
  );
};

export default AboutSection2;
