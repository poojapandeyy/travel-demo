
import Flight from "../../assets/image/icon-flight.gif";
import International from "../../assets/image/icon-international.png";
import Domestic from "../../assets/image/icon-domestic.png";
import Visa from "../../assets/image/icon-visa.png";

import Car from "../../assets/image/icon-eurail.png";

import Event from "../../assets/image/icon-event.png";
import Aboutus from "../../assets/image/icon-aboutus.png";

import Banner3 from "../../assets/image/banner3.jpg";

const Icons = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7  gap-2  pt-8 px-4 md:px-16">
          <div className="flex flex-col justify-center items-center">
            <img
              src={Flight}
              alt="Flighticon"
              style={{ width: "70px", height: "70px" }}
            />
            <span className="text-sm font-sans text-black">Flight</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img src={International} alt="Internationalicon" className="h-auto w-auto" />
            <span className="text-sm font-sans text-black">International</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img src={Domestic} alt="Domesticicon" />
            <span className="text-sm font-sans text-black">Domestic</span>
          </div>

        

          <div className="flex flex-col justify-center items-center">
            <img src={Visa} alt="Visaicon" />
            <span className="text-sm font-sans text-black">Visa</span>
          </div>

         

          <div className="flex flex-col justify-center items-center">
            <img src={Car} alt="Eurailicon" />
            <span className="text-sm font-sans text-black">Car</span>
          </div>

         
         

          <div className="flex flex-col justify-center items-center">
            <img src={Event} alt="Eventicon" />
            <span className="text-sm font-sans text-black">Event</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img src={Aboutus} alt="Aboutusicon" />
            <span className="text-sm font-sans text-black">About Us</span>
          </div>
        </div>
      </div>
      <div className="pt-8 px-5 md:px-16">
        <img src={Banner3} alt="Banner" className="banner-sm rounded-md" />
      </div>
    </div>
  );
};

export default Icons;
