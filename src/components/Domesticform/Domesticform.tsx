
import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const Domesticform = () => {
  const [formData, setFormData] = useState({
    date: "",
    travelers: "",
  });

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();

    // Here you can handle form submission logic, such as sending data to a backend server
    console.log("Form submitted:", formData);

    // Reset form fields after submission
    setFormData({
      date: "",
      travelers: "",
    });
  };

  return (
    <div className="sticky top-0 max-w-lg mx-auto px-4 lg:px-6 py-4 bg-gray-100 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <h1 className="bg-green-800 text-white text-lg font-serif text-center py-2">
          Stress-free Booking Guarantee
        </h1>
        <div className="flex flex-col mt-4">
          <div>All-inclusive price</div>
          <div className="flex items-center space-x-4 mt-1">
            <div className="text-green-800 text-xl font-bold">US$1399</div>
            <div className="line-through text-black text-md">US$1599</div>
            <div className="text-white text-sm bg-green-800">per person</div>
          </div>
        </div>
        <div className="mt-3 flex justify-between bg-slate-300">
          <div className="py-3 text-white pl-2 text-lg">
            We Offer Group Discount Price
          </div>
          <IoMdAddCircle size={25} color="blue" />
        </div>

        <div className="mt-3">
          <label className="text-md font-semibold">Pick your Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-gray-700 outline-none hover:cursor-pointer"
          />
        </div>
        <div className="mt-3">
          <label>Number of travelers</label>
          <input
            type="number"
            name="travelers"
            value={formData.travelers}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-gray-700 outline-none hover:cursor-pointer"
          />
        </div>
        <div className="flex justify-between mt-3">
          <div className="text-lg font-medium text-black">Total Price</div>
          <div className="text-xl font-bold text-black">US$1599</div>
        </div>
        <div className="flex justify-between items-center text-white mt-3">
          <button
            type="submit"
            className="bg-blue-600 rounded-md px-8 py-2 text-xl font-semibold"
          >
            Instant Booking
          </button>
          <IoCartOutline
            size={40}
            className="bg-blue-600 rounded-md px-2 py-2 text-xl font-semibold"
          />
        </div>
      </form>
    </div>
  );
};

export default Domesticform;


































































// import { IoMdAddCircle } from "react-icons/io";
// import { IoCartOutline } from "react-icons/io5";


// const Domesticform = () => {
//   return (
//     <div className="sticky top-0 max-w-lg mx-auto px-4 lg:px-6 py-4 bg-gray-100 rounded-lg shadow-md">
//         <form>
//             <h1 className="bg-green-800 text-white text-lg font-serif text-center py-2">Stress-free Booking Guarantee</h1>
//             <div className="flex flex-col mt-4">
//             <div>All-inclusive price</div>
//             <div className=" flex items-center space-x-4 mt-1">
//             <div className="text-green-800 text-xl font-bold">US$1399</div>
//             <div className="line-through text-blacl text-md">US$1599</div>
//             <div className="text-white text-sm bg-green-800">per person</div>
//             </div>
//             </div>
//             <div className="mt-3 flex justify-between bg-slate-300">
              
//             <div className="py-3  text-white pl-2 text-lg">We Offer Group Discount Price</div>
//             <IoMdAddCircle size={25} color="blue" />
//             </div>

//             <div className="mt-3">
//                 <label className="text-md font-semibold">Pick your Date</label>
//                 <input 
//                 type="date"
//                 name="date"
//                 className="w-full px-3 py-2 border rounded-md text-gray-700 outline-none hover:cursor-pointer"
//                 />
//             </div>
//             <div className="mt-3">
//                 <label>Number of travelers</label>
//                 <input
//                 type="number"
//                 name="travelers"
//                 className="w-full px-3 py-2 border rounded-md text-gray-700 outline-none hover:cursor-pointer"
//                 />
//             </div>
//             <div className="flex justify-between mt-3">
//                 <div className="text-lg font-medium text-black">Total Price</div>
//                 <div className="text-xl font-bold text-black">US$1599</div>
//             </div>
//             <div className="flex justify-between items-center text-white mt-3">
//                 <button className="bg-blue-600 rounded-md px-8 py-2 text-xl font-semibold">Instant Booking</button>
//                <IoCartOutline size={40} className="bg-blue-600 rounded-md px-2 py-2 text-xl font-semibold" /> 
//             </div>
//         </form>
      
//     </div>
//   )
// }

// export default Domesticform