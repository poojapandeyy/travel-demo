import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineStar } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

const Domesticreview = () => {
  return (
    <div id="review" className="w-full mt-5 bg-slate-200 shadow-md">
      <div className="pl-4 md:pl-20 lg:pl-36 pt-10 flex items-center gap-3">
        <AiOutlineLike size={32} color="blue" />
        <div className="text-2xl font-bold ">Client's Review</div>
      </div>
      <div className="flex flex-col gap-3 bg-white rounded-md ml-20 md:ml-30 lg:ml-36 w-3/5 p-5 mt-5 ">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center gap-2 ">
            <div className="flex items-center gap-2 ">
              <MdOutlineStar size={22} color="yellow" />
              <MdOutlineStar size={22} color="yellow" />
              <MdOutlineStar size={22} color="yellow" />
              <MdOutlineStar size={22} color="yellow" />
            </div>
          </div>
          <div className="pr-3">
            <FcGoogle size={22} />
          </div>
        </div>
        <div className="text-md font-medium">It was a life changing experiance</div>
        <div className="text-md font-normal text-justify">It was a life changing experience! Our guide Abhishek, Diksha, FT went above and beyond and were always ready to help with a smile. We could not have done it without this amazing team! Felt like a family and enjoyed every moment of this beautiful journey. We highly recommend this group of people.
        </div>
        <>
            <div className="flex flex-col justify-center ">
            <div className="font-medium text-pink-500">Elina Khanal</div>
            <div className="font-normal">Nepal</div>
            <div className="font-normal text-sm">May 03,2022</div>
            </div>
        </>
      </div>

      <div className="flex flex-col gap-3 bg-white rounded-md  ml-20 md:ml-30 lg:ml-36 w-3/5 p-5 mt-5 ">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center gap-2 ">
            <div className="flex items-center gap-2 ">
              <MdOutlineStar size={22} color="yellow" />
              <MdOutlineStar size={22} color="yellow" />
              <MdOutlineStar size={22} color="yellow" />
              <MdOutlineStar size={22} color="yellow" />
            </div>
          </div>
          <div className="pr-3">
            <FcGoogle size={22} />
          </div>
        </div>
        <div className="text-md font-medium">It was a life changing experiance</div>
        <div className="text-md font-normal text-justify">It was a life changing experience! Our guide Abhishek, Diksha, FT went above and beyond and were always ready to help with a smile. We could not have done it without this amazing team! Felt like a family and enjoyed every moment of this beautiful journey. We highly recommend this group of people.
        </div>
        <>
            <div className="flex flex-col justify-center">
            <div className="font-medium text-pink-500">Prabhat Karna</div>
            <div className="font-normal">USA</div>
            <div className="font-normal text-sm">July 09,2023</div>
            </div>
        </>
      </div>

    </div>
  );
};

export default Domesticreview;
