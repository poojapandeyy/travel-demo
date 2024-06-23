import { MdOutlineDateRange } from "react-icons/md";

const Departure = () => {
  return (
    <div id="departure" className="pl-4 md:pl-20 lg:pl-36 lg:w-3/4 mt-5">
      <div className="flex justify-start gap-3 mb-5">
        <MdOutlineDateRange size={32} color="blue" />
        <div className="text-2xl font-bold">Departure Dates</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 items-center border-2 rounded-sm p-6 gap-6">
        <div className="md:col-span-1">
          <div className="font-medium">15 August 2024</div>
          <div className="text-sm text-gray-400">Kathmandu</div>
        </div>
        <div className="md:col-span-1">
          <div className="font-medium">1 September 2024</div>
          <div className="text-sm text-gray-400">Kathmandu</div>
        </div>
        <div className="md:col-span-1">
          <div className="font-medium">15</div>
          <div className="text-sm text-gray-400">Seats</div>
        </div>
        <div className="md:col-span-1">
          <div className="font-medium">
            From <label className="line-through font-medium">4599</label>
          </div>
          <div className="font-medium">4499</div>
          <div className="text-sm text-gray-400">
            Saving <label>$100</label>
          </div>
        </div>
        <div className="md:col-span-1">
          <button className="border-2 rounded-none px-4 py-3 text-pink-600">
            Make Enquiry
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Departure;
