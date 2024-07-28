const Supporters = () => {
  const logos = [
    { src: "https://i.ibb.co/JntL9Pp/3.png", alt: "Logo 3" },
    { src: "https://i.ibb.co/RDDbyG2/Container.png", alt: "Logo 3" },
    { src: "https://i.ibb.co/1mtDj7S/image-5.png", alt: "Logo 3" },
  ];
  return (
    <div
      className="bg-no-repeat bg-contain bg-left lg:bg-center"
      style={{
        backgroundImage:
          'url("https://i.ibb.co/YjT9T4g/circle-1.png"), url("https://i.ibb.co/YjT9T4g/circle-1.png")',
        backgroundPosition: "left center, right center",
      }}
    >
      <div className="container mx-auto px-4 w-full py-8 lg:py-12">
        <h2
          className="text-center font-bold text-xl sm:text-2xl lg:text-3xl text-[#000] mb-4"
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          Supported By
        </h2>
        <div
          className="flex overflow-x-auto lg:justify-center lg:gap-x-4 items-center w-full no-scrollbar"
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 scale-90 lg:scale-100"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay={500 + index * 200}
              data-aos-duration="500"
            >
              <img src={logo.src} alt={logo.alt} className="mx-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supporters;
