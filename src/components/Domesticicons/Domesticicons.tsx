import { CiCalendar } from "react-icons/ci";
import { TbClockDown } from "react-icons/tb";
import { PiMountains } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { FaRegFlag } from "react-icons/fa6";
import { BiSolidGroup } from "react-icons/bi";
import { PiPersonSimpleHikeBold } from "react-icons/pi";
import { WiDayCloudy } from "react-icons/wi";

const Domesticicons = () => {
  return (
    <div className="mt-7 px-4 md:px-20 lg:px-36 w-full md:w-4/5 lg:w-3/4">
      <div className="text-black font-bold text-xl mb-5">Good to Know</div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="flex items-center gap-4">
          <CiCalendar size={40} className="text-pink-700" />
          <div className="flex flex-col justify-center">
            <div className="text-md font-medium text-gray-700">Duration</div>
            <div className="font-semibold text-lg text-black">5 Hours</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <TbClockDown size={35} className="text-pink-700" />
          <div className="flex flex-col justify-center">
            <div className="text-md font-medium text-gray-700">Difficulty Level</div>
            <div className="font-semibold text-lg text-black">Easy</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <PiMountains size={35} className="text-pink-700" />
          <div className="flex flex-col justify-center">
            <div className="text-md font-medium text-gray-700">Max. Altitude</div>
            <div className="font-semibold text-lg text-black">5545m</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <GrGroup size={35} className="text-pink-700" />
          <div className="flex flex-col justify-center">
            <div className="text-md font-medium text-gray-700">Group Size</div>
            <div className="font-semibold text-lg text-black">2+</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <CiLocationOn size={35} className="text-pink-700" />
          <div className="flex flex-col justify-center">
            <div className="text-md font-medium text-gray-700">Trips Start</div>
            <div className="font-semibold text-lg text-black">Kathmandu</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FaRegFlag size={35} className="text-pink-700" />
          <div className="flex flex-col justify-center">
            <div className="text-md font-medium text-gray-700">Trip Ends</div>
            <div className="font-semibold text-lg text-black">Kathmandu</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <BiSolidGroup size={40} className="text-pink-700" />
          <div className="flex flex-col justify-center">
            <div className="text-md font-medium text-gray-700">Group Style</div>
            <div className="font-semibold text-lg text-black">Private</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <PiPersonSimpleHikeBold size={35} className="text-pink-700" />
          <div className="flex flex-col justify-center">
            <div className="text-md font-medium text-gray-700">Activities</div>
            <div className="font-semibold text-lg text-black">Trekking</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <WiDayCloudy size={35} className="text-pink-700" />
          <div className="flex flex-col justify-center">
            <div className="text-md font-medium text-gray-700">Best Season</div>
            <div className="font-semibold text-lg text-black">Throughout Year</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Domesticicons;
