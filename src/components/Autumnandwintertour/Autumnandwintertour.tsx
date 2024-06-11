import { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import Korea from "../../assets/image/AWT-korea.jpg";
import Koreawinter from "../../assets/image/AWT-koreawinter.jpg";
import Koreafallinlove from "../../assets/image/AWT-koreafallinlove.jpg";
import Osaka from "../../assets/image/AWT-osaka.jpg";
import Japana from "../../assets/image/AWT-japan.jpg";
import Europe from "../../assets/image/AWT-europe.jpg";

const Autumandwintertour = () => {
  const images = [
    { src: Korea, alt: "Colors of Korea", tours: "More Korea Tour" },
    {
      src: Koreawinter,
      alt: "Korea Winter Wellness Festivals",
      tours: "More Korea Tour",
    },
    {
      src: Koreafallinlove,
      alt: "Fall in Love with Korea",
      tours: "More Korea Tour",
    },
    { src: Osaka, alt: "Uniquely Osaka", tours: "More Osaka Tour" },
    { src: Japana, alt: "Scenic Japan", tours: "More Japan Tour" },
    { src: Europe, alt: "Glimpse of Europe", tours: "More Europe Tour" },
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
        Autumn & Winter Tour
      </div>

      <div className=" relative slide-container px-5 md:px-14">
        <button
          onClick={prevSlide}
          className="absolute  left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10 "
        >
          <MdOutlineNavigateNext className="rotate-180" size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10 "
        >
          <MdOutlineNavigateNext size={24} />
        </button>
        <div className="flex space-x-10 overflow-hidden w-full md:w-[99vw]">
          <div
            className="slide-container "
            style={{
              transform: `translateX(-${currentIndex * 450}px)`,
              overflow: "auto !important",
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white shadow-lg rounded-md overflow-hidden p-2 slide"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 flex gap-8">
                  <div className="flex gap-1 items-center">
                    <SlCalender size={14} color="blue" />
                    <div className="text-sm text-gray-600">5D3N</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <FaLocationDot size={14} color="blue" />
                    <div className="text-sm text-gray-600"> 3 Cities </div>
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

export default Autumandwintertour;
