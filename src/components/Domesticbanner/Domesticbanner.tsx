import domesticbanner from "../../assets/image/IFET-image1.jpg"
import Domesticform from "../Domesticform/Domesticform";


const Domesticbanner = () => {
    const images = [
        {src:domesticbanner, alt:"banner" }
    ];
  return (
    <div className="pt-6 flex flex-col gap-y-6 md:flex-row justify-center gap-x-16 mr-3 items-center">
          <div className="pl-4 md:pl-7 lg:pl-14 self-stretch">
          {images.map((image, index)=>(
                <div key={index} className="relative w-auto h-full ">
                    <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover h-full"
                    />
                    <div className="absolute left-4  bottom-2 px-3 py-2 rounded-md bg-orange-500 text-white text-sm font-medium text-justify">8 TRIP PHOTOS</div>
                </div>

            ))}
          </div>

    <div className="shadow rounded-md">
            <div className="sticky">
              <Domesticform />
            </div>
          </div> 
    </div>
 

  )
}

export default Domesticbanner








// import domesticbanner from "../../assets/image/IFET-image1.jpg";
// import Domesticform from "../Domesticform/Domesticform";

// const Domesticbanner = () => {
//   const images = [
//     { src: domesticbanner, alt: "banner" }
//   ];

//   return (
//     <div className="pt-6 flex flex-col md:flex-row justify-center items-start gap-x-16 mr-3">
//       {/* Left side with images */}
//       <div className="pl-4 md:pl-7 lg:pl-14 flex-shrink-0">
//         {images.map((image, index) => (
//           <div key={index} className="relative w-full md:w-auto h-96 md:h-full">
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="object-cover w-full h-full"
//             />
//             <div className="absolute left-4 bottom-2 px-3 py-2 rounded-md bg-orange-500 text-white text-sm font-medium">
//               8 TRIP PHOTOS
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Right side with sticky form */}
//       <div className="sticky top-24 md:top-0 self-start mt-6 md:mt-0 flex-shrink-0 w-full md:w-96">
//         <div className="shadow rounded-md">
//           <Domesticform />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Domesticbanner;
