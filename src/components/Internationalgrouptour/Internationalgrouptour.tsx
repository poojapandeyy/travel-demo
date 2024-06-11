import { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import IGTimage1 from "../../assets/image/IGT-image1.jpg";
import IGTimage2 from "../../assets/image/IGT-image2.jpg";
import IGTimage3 from "../../assets/image/IGT-image3.jpg";
import IGTimage4 from "../../assets/image/IGT-image4.jpg";
import IGTimage5 from "../../assets/image/IGT-image5.jpg";

const Internationalgrouptour = () => {
  const images = [
    {
      src: IGTimage1,
      alt: "PICTUREQUE DUBAI WITH ABU DHABI",
      time: "7D5N",
      cities: "2Cities",
      tours: "More Korea Tour",
    },
    {
      src: IGTimage2,
      alt: "MOROCCO DISCOVERIES",
      time: "7D5N",
      cities: "12Cities",
      tours: "More Korea Tour",
    },
    {
      src: IGTimage3,
      alt: "EXPERIANCR SOUTH AFRICA WITH SAFARI",
      time: "5D5N",
      cities: "2Cities",
      tours: "More Korea Tour",
    },
    {
      src: IGTimage4,
      alt: "EGYPTIAN GRANDEUR",
      time: "7D5N",
      cities: "6Cities",
      tours: "More Korea Tour",
    },
    {
      src: IGTimage5,
      alt: "kIA ORA WITH NEW ZEALAND",
      time: "7D5N",
      cities: "10Cities",
      tours: "More Korea Tour",
    },
    {
      src: IGTimage2,
      alt: "MOROCCO DISCOVERIES",
      time: "7D5N",
      cities: "12Cities",
      tours: "More Korea Tour",
    },
    {
      src: IGTimage3,
      alt: "EXPERIANCR SOUTH AFRICA WITH SAFARI",
      time: "5D5N",
      cities: "2Cities",
      tours: "More Korea Tour",
    },
    {
      src: IGTimage4,
      alt: "EGYPTIAN GRANDEUR",
      time: "7D5N",
      cities: "6Cities",
      tours: "More Korea Tour",
    },
    {
      src: IGTimage5,
      alt: "kIA ORA WITH NEW ZEALAND",
      time: "7D5N",
      cities: "10Cities",
      tours: "More Korea Tour",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <>
      <div className="text-black font-bold text-2xl mb-4 pt-8 pl-14 pr-14">
      International Group Tours
      </div>

      <div className=" relative slide-container px-14">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
        >
          <MdOutlineNavigateNext className="rotate-180" size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
        >
          <MdOutlineNavigateNext size={24} />
        </button>
        <div className="flex space-x-10 overflow-hidden w-[99vw]">
          <div
            className="slide-container "
            style={{ transform: `translateX(-${currentIndex * 450}px)`,overflow:"auto !important" }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-[447px] flex-shrink-0 bg-white shadow-lg rounded-md overflow-hidden p-2 slide"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 flex gap-8">
                  <div className="flex gap-1 items-center">
                    <SlCalender size={14} color="blue" />
                    <div className="text-sm text-gray-600">{image.time}</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <FaLocationDot size={14} color="blue" />
                    <div className="text-sm text-gray-600">
                      {" "}
                      {image.cities}{" "}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">
                    {image.alt}
                  </h3>
                </div>
                <div className="flex justify-between">
                  <button className="text-sm text-blue-500 rounded-md bg-slate-100 hover:text-blue-800">
                    Depature & Info
                  </button>
                  <button className="text-sm text-gray-600 rounded-md hover:text-black bg-gray-200 p-1">
                    {image.tours}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Internationalgrouptour;
