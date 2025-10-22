/** @format */

import { Avatar } from "antd";
import {
  Applicants,
  Calender,
  Dollar,
  Time,
} from "../../../assets/LandingPage";
import ArrowButton from "../../../shared/Buttons/ArrowButton";
import AvTe from "./AvTe";
import AvatarGroupe from "./AvatarGroupe";
import CreativeCard from "../../../shared/Cards/CreativeCard";
import CreativeButton from "../../../shared/Buttons/CreativeButton";
import CreativeBadge from "../../../shared/Badge/CreativeBadge";

const BountiesCard = ({
  cardImg,
  title,
  status,
  viewDetails,
  application,
  pricerange,
  dayesRemaining,
  discription,
  owner,
  date,
  applicationList,
}) => {
  return (
    <div className='max-w-[100rem] w-full lg:w-[90%] xl:w-[100%] m-auto py-2 px-4 sm:px-0'>
      <CreativeCard className='w-full p-4 sm:p-6 lg:p-9 flex flex-col md:flex-row gap-6 md:gap-10' hoverable={true}>
        {/* Image Section */}
        <div className='w-full md:w-[242px] h-auto flex-shrink-0'>
          <img
            src={cardImg}
            className='w-full h-auto object-cover rounded-lg'
            alt={title}
          />
        </div>

        {/* Content Section */}
        <div className='w-full md:w-[75%] space-y-3 sm:space-y-5'>
          {/* Title and Status Section */}
          <div>
            <div className='flex flex-col sm:flex-row justify-between gap-3 sm:gap-0'>
              <div className='flex gap-3 items-center flex-wrap'>
                <h1 className='text-[16px] sm:text-[18px] font-bold'>
                  {title}
                </h1>
                <CreativeBadge variant="info">
                  {status}
                </CreativeBadge>
              </div>

              <div className='flex gap-2 items-center justify-end sm:justify-start'>
                <CreativeButton
                  variant="info"
                  size="sm"
                  onClick={viewDetails}
                >
                  View Details →
                </CreativeButton>
              </div>
            </div>

            {/* Stats Section */}
            <div className='flex flex-wrap gap-x-4 gap-y-2 sm:justify-between mt-3 sm:mt-0 sm:w-1/2 text-gray-600'>
              <AvTe svg={<Applicants />} text={application} />
              <AvTe svg={<Dollar />} text={pricerange} />
              <AvTe svg={<Calender />} text={dayesRemaining} />
            </div>
          </div>

          {/* Description */}
          <div className='text-[14px] sm:text-[16px] line-clamp-2 text-gray-600'>
            <p>{discription}</p>
          </div>

          {/* Footer Section */}
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-3 sm:mt-5'>
            <div className='flex flex-col xs:flex-row gap-3 sm:gap-5 items-start xs:items-center'>
              <div className='flex items-center gap-3'>
                <Avatar icon={owner.icon} size='' />
                <h2 className='font-semibold text-[14px] sm:text-[16px]'>
                  {owner.name}
                </h2>
              </div>
              <div className='flex items-center gap-1'>
                <Time />
                <p className='text-gray-600 text-[13px] sm:text-[15px]'>
                  {date}
                </p>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <AvatarGroupe applicationList={applicationList} size='' />
              <h1 className='text-[13px] sm:text-[15px]'>Applicants</h1>
            </div>
          </div>
        </div>
      </CreativeCard>
    </div>
  );
};

export default BountiesCard;
