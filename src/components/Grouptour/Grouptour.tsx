import React from "react";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import Package1 from "../../assets/image/package1.jpg";
import Package2 from "../../assets/image/package2.jpg";
import Package3 from "../../assets/image/package3.jpg";
import Package4 from "../../assets/image/package4.jpg";
import Package5 from "../../assets/image/package5.jpg";
import Package6 from "../../assets/image/package6.jpg";
import Package7 from "../../assets/image/package7.jpg";
import Package8 from "../../assets/image/package8.jpg";
import Package9 from "../../assets/image/package9.jpg";
import Package10 from "../../assets/image/package10.jpg";
import Package11 from "../../assets/image/package11.jpg";
import Package12 from "../../assets/image/package12.jpg";

type PackageType = {
  id: number;
  main: string;
  images: string[];
  title: string;
};

const packages: PackageType[] = [
  { id: 1, main: Package1, images: [Package2, Package3, Package4], title: "Korea" },
  { id: 2, main: Package5, images: [Package6, Package7, Package8], title: "Europe" },
  { id: 3, main: Package9, images: [Package10, Package11, Package12], title: "Dubai" }
];

type PackageCardProps = {
  main: string;
  images: string[];
  title: string;
};

const PackageCard: React.FC<PackageCardProps> = ({ main, images, title }) => (
  <div className="p-2 border rounded-lg">
    <div className="mb-1">
      <img src={main} alt="Packagephoto" className="object-cover w-full h-40 md:h-48 lg:h-56 rounded-lg" />
    </div>
    <div className="grid grid-cols-3 gap-1 h-fit">
      {images.map((img, idx) => (
        <img key={idx} src={img} alt="Packagephoto" className="object-cover w-full h-20 md:h-24 lg:h-28 rounded-lg" />
      ))}
    </div>
    <div className="flex gap-8 pt-3">
      <div className="flex gap-1 items-center">
        <SlCalender size={14} color="blue" />
        <div className="text-sm text-gray-600">5D4N</div>
      </div>
      <div className="flex gap-1 items-center">
        <FaLocationDot size={14} color="blue" />
        <div className="text-sm text-gray-600">3 Cities</div>
      </div>
    </div>
    <div className="pt-1">
      <h3 className="text-black font-bold text-lg">{title}</h3>
    </div>
  </div>
);

const Grouptour: React.FC = () => (
  <div className="pt-8">
    <div className="text-black font-bold text-2xl flex justify-start items-start px-4 sm:px-6 md:px-14">
      Guaranteed Group Tour
    </div>
    <div className="pt-8 px-4 sm:px-6 md:px-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {packages.map(pkg => (
          <PackageCard key={pkg.id} {...pkg} />
        ))}
      </div>
    </div>
  </div>
);

export default Grouptour;
