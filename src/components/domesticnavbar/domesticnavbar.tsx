import { GrOverview } from "react-icons/gr";
import { GrLocationPin } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { BsChatText } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";

const Domesticnavbar = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="sticky top-0 w-full pt-8 pb-2 border-b-2 bg-white z-50">
      <nav className="max-w-full overflow-x-auto whitespace-nowrap">
        <div className="flex justify-between items-center px-8 pl-4 md:pl-20 lg:pl-36">
          <div className="flex space-x-14 font-medium">
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                handleScroll("overview");
              }}
              className="flex flex-col justify-center items-center hover:cursor-pointer group"
            >
              <GrOverview
                size={22}
                className="group-hover:text-blue-500 group-hover:underline"
              />
              <div className="text-black group-hover:text-blue-500 group-hover:underline">
                Overview
              </div>
            </a>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                handleScroll("itinerary");
              }}
              className="flex flex-col justify-center items-center hover:cursor-pointer group"
            >
              <GrLocationPin size={28} className="group-hover:text-blue-500" />
              <div className="text-black group-hover:text-blue-500">
                Itinerary
              </div>
            </a>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                handleScroll("inclusion");
              }}
              className="flex flex-col justify-center items-center hover:cursor-pointer group"
            >
              <CiLocationOn size={28} className="group-hover:text-blue-500" />
              <div className="text-black group-hover:text-blue-500">
                Inclusion
              </div>
            </a>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                handleScroll("departure");
              }}
              className="flex flex-col justify-center items-center hover:cursor-pointer group"
            >
              <MdOutlineDateRange
                size={25}
                className="group-hover:text-blue-500"
              />
              <div className="text-black group-hover:text-blue-500">
                Departure Dates
              </div>
            </a>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                handleScroll("faqs");
              }}
              className="flex flex-col justify-center items-center hover:cursor-pointer group"
            >
              <BsChatText size={23} className="group-hover:text-blue-500" />
              <div className="text-black group-hover:text-blue-500">FAQs</div>
            </a>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                handleScroll("review");
              }}
              className="flex flex-col justify-center items-center hover:cursor-pointer group"
            >
              <AiOutlineLike size={25} className="group-hover:text-blue-500" />
              <div className="text-black group-hover:text-blue-500">
                Client Reviews
              </div>
            </a>
          </div>
          <div className=" hidden md:flex">
            <button className="px-2 py-1 rounded-md bg-blue-500 text-white font-xs hover:bg-blue-900">
              SEND INQUIRY
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Domesticnavbar;
