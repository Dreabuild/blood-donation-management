import { BsArrowRight, BsInstagram } from "react-icons/bs";

const Header = () => {
  const people = [
    {
      src: "https://i.ibb.co/c1LXghY/3e0e1a0b84a3c4361e2ee49279d9a493.webp",
      alt: "Logo 3",
    },
    {
      src: "https://i.ibb.co/30JSkDZ/f9b911fd4e6cfdbb6c18ef92981f075d.jpg",
      alt: "Logo 4",
    },
    {
      src: "https://i.ibb.co/qymjrzN/5cade34d40dec35399c81a2835d72e68.webp",
      alt: "Logo 5",
    },
    {
      src: "https://i.ibb.co/hmLDjYP/f4b37c28a7dffa800449fd61b8adc53c.webp",
      alt: "Logo 6",
    },
    {
      src: "https://i.ibb.co/8K2yPHs/78322222432b13f65d6b5aac2b5ce11e.webp",
      alt: "Logo 7",
    },
  ];
  return (
    <div
      className="bg-[#010101]"
      style={{
        backgroundImage: 'url("https://i.ibb.co/NyRG6zh/Line-8.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="container mx-auto pt-6 sm:pt-8 lg:pt-10 px-4">
        <div className="flex items-center justify-between">
          <div>
            <p
              className="font-bold text-white text-lg sm:text-xl lg:text-2xl cursor-pointer"
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              SBDCMS(.)Org
            </p>
          </div>
          <div className="flex items-center gap-x-2 sm:gap-x-4">
            <a
              href="https://www.instagram.com/sbdcms"
              className="bg-[#F9E6E6] text-[#BF0000] text-sm sm:text-lg lg:text-xl px-2 py-1 sm:px-3 sm:py-2 hover:px-4 transition-all"
              data-aos="fade-down"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="200"
              data-aos-duration="500"
            >
              <BsInstagram className="w-6 h-6" />
            </a>
            <a
              href="mailto:saifa@sbdcms.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#BF0000] text-[#fff] text-sm sm:text-lg lg:text-xl px-2 py-1 sm:px-3 sm:py-2 flex items-center gap-x-1 sm:gap-x-2 lg:gap-x-3 hover:gap-x-4 transition-all"
              data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              Hospitals Waitlist{" "}
              <BsArrowRight className="text-xl lg:text-2xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center min-h-[60vh] lg:min-h-[70vh] py-8">
        <div className="flex -space-x-4 items-center justify-center mb-8 lg:mb-16">
          {people.map((person, index) => (
            <img
              src={person.src}
              alt={person.alt}
              className="w-[55px] h-[55px] sm:w-[72px] sm:h-[72px] border-2 border-white rounded-full object-cover"
              style={{ zIndex: 5 + -index }}
              key={index}
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay={200 + index * 50}
              data-aos-duration="500"
            />
          ))}
        </div>

        <p
          className="text-[#fff] text-2xl sm:text-3xl lg:text-4xl font-bold text-center"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay={400}
          data-aos-duration="500"
        >
          Smart Blood Donation Case Management System
        </p>
        <p
          className="text-[#F9E6E6] text-xl sm:text-2xl lg:text-3xl text-center lg:-mt-3 md:-mt-2"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay={600}
          data-aos-duration="500"
        >
          For Hospitals in Bangladesh
        </p>
        <a
          href="https://bloodlink.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#BF0000] text-[#fff] text-lg sm:text-xl lg:text-2xl px-6 py-3 sm:px-8 sm:py-4 mt-8 lg:mt-16 flex items-center gap-x-2 hover:gap-x-3 transition-all"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay={800}
          data-aos-duration="500"
        >
          Project Guide <BsArrowRight className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Header;
