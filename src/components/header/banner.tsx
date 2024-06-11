
import HomeBanner from "../../assets/image/homebanner.jpg";
import Navbar from "./navbar";
import { IoSearchSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="relative">
      <img
        src={HomeBanner}
        alt="homebanner"
        className="h-[350px] md:h-[450px] w-full object-cover z-10"
      />
      <Navbar />
      <div className="flex flex-col absolute top-0 left-0 right-0 justify-center items-center h-full gap-3">
        <div className="flex items-center p-4 bg-black bg-opacity-50 rounded">
          <IoSearchSharp size={20} color="white" />
          <input
            type="text"
            placeholder="Where to follow your heartbeat?"
            className="p-2 rounded bg-gray-800 text-white bg-opacity-0 w-auto md:w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
