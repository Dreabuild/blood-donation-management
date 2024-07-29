// import React from 'react';

const Saifa = () => {
  return (
    <div className="flex items-center justify-center min-h-screen font-sans ">
      <div className="w-[500px] pl-1">
        <h1
          className="font-bold text-[42px] mb-2"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          Saifa Rahman
        </h1>
        <p
          className="italic text-xl mb-2"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="400"
          data-aos-duration="500"
        >
          I’m the 17-year-old co-founder of{" "}
          <a
            href="https://www.sbdcms.org"
            target="_blank"
            className="underline hover:no-underline"
          >
            SBDCMS (Smart Blood Donation Case Management System)
          </a>
          ; aimed for 6,000 Hospitals in{" "}
          <img
            src="https://i.ibb.co/pnMwdFY/image.png"
            width={24}
            height={24}
            className="inline"
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="1000"
            data-aos-duration="500"
          />
        </p>
        <h1
          className="font-bold text-[36px] mb-2"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="600"
          data-aos-duration="500"
        >
          Reach Out
        </h1>
        <div className="flex items-center gap-x-3 ">
          <a
            href="mailto:saifa@sbdcms.org"
            target="_blank"
            className="underline hover:no-underline text-lg font-medium"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="700"
            data-aos-duration="500"
          >
            Email
          </a>
          <a
            href="https://www.instagram.com/sbdcms"
            target="_blank"
            className="underline hover:no-underline text-lg font-medium"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="800"
            data-aos-duration="500"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Saifa;
