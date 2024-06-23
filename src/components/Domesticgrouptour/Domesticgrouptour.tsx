import { useState } from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import Image1 from '../../assets/image/IFET-image1.jpg'
import Image2 from '../../assets/image/IFET-image2.jpg'
import Image3 from '../../assets/image/IFET-image3.jpg'
import Image4 from '../../assets/image/IFET-image4.jpg'
import Image5 from '../../assets/image/IFET-image5.jpg'
import Image6 from '../../assets/image/IFET-image6.jpg'
import { Link } from 'react-router-dom';
import PATH from '../../constant/path';


const Domesticgrouptour = () => {
    const images = [
    {id:1, src: Image1, alt: 'BANGKOK', time: '4D3N', cities: 'BANGKOK', tours: 'More Korea Tour'},
    { src: Image2, alt: 'KUALA LUMPUR', time: '4D3N', cities: 'KUALA LUMPUR', tours: 'More Korea Tour'},
    { src: Image3, alt: 'TAIPEI', time: '3D2N', cities: 'TAIPEI', tours: 'More Korea Tour'},
    { src: Image4, alt: 'SINGAPORE', time: '4D3N', cities: 'SINGAPORE', tours: 'More Korea Tour'},
    { src: Image5, alt: 'HO CHI MINH', time: '4D3N', cities: 'HO CHI MINH', tours: 'More Korea Tour'},
    { src: Image6, alt: '4D3N Korea Delight', time: '4D3N', cities: '2 Cities', tours: 'More Korea Tour'}
    ] 
     
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
      Domestic Group Tour
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
              className="min-w-[250px] max-w-[400px] flex-shrink-0 bg-white shadow-lg rounded-md overflow-hidden p-2 slide"
            >
               <Link
                
                to={`${PATH.detail}/${image.id}`}
                className="text-black hover:text-blue-500 hover:underline"
              >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
              />
              </Link>
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
  )
}

export default Domesticgrouptour
