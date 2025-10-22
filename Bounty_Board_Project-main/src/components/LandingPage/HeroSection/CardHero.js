/** @format */

import {
  Applicants,
  Bounties,
  Hunters,
  Projects,
} from "../../../assets/LandingPage/HeroSection/index.js";

const CardHero = () => {
  const CardData = [
    { image: Bounties, number: "1203", disc: "Total bounties posted" },
    { image: Applicants, number: "973", disc: "Total applicants" },
    { image: Hunters, number: "383", disc: "Active Hunters" },
    { image: Projects, number: "753", disc: "completed projects" },
  ];

  return (
    <div className='max-w-[100rem] w-full px-4 sm:px-6 lg:w-[90%] xl:w-[70%] m-auto pt-6 sm:pt-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-3 sm:mt-5'>
        {CardData &&
          CardData?.map((c, index) => {
            return (
              <div
                key={index}
                className='flex bg-white p-4 sm:p-5 gap-3 sm:gap-5 shadow-md sm:shadow-lg shadow-gray-200 rounded-lg w-full'
              >
                <div className='flex-shrink-0'>
                  <c.image />
                </div>
                <div>
                  <h1 className='font-semibold text-lg sm:text-xl'>
                    {c.number}
                  </h1>
                  <p className='text-gray-400 text-xs sm:text-sm'>{c.disc}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CardHero;
