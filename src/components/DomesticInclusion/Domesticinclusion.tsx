import { CiLocationOn } from "react-icons/ci";

const Domesticinclusion = () => {
    const Included = {
      inclusion1: "Transportation to Kathmandu domestic airport from the hotel and back.",
      inclusion2: "Our vehicle will be at your disposal waiting at the airport till you need for the transfer.",
      inclusion3: "Service of guides on Heli Tour, daily wages-medical insurance, meals and other allowance.",
      inclusion4: "Comprehensive medical kits and First Aid Kit (for precaution against accidents and sudden illness."
    }
  
    const Excluded = {
      exclusion1: "Nepal Visa-International airfare-personal travel and medical insurance.",
      exclusion2: "Expenses of personal nature, gratitude (tips) hard/soft, and other major drinks throughout the flight and in Kathmandu.",
      exclusion3: "Personal gear for the day ride (down jackets and personal belongings) medical kit.",
      exclusion4: "Emergency evacuation and breaking away from the proposed duration flight where the refund will not be entertained, however, the office will issue a letter to claim from your valid insurance."

    }
  
    return (
      <div id="inclusion" className="pl-4 md:pl-20 lg:pl-36 mt-10 w-full md:w-4/5 lg:w-3/4">
        <div className="flex items-center gap-2 py-3">
        <CiLocationOn size={28} className="text-blue-600 font-semibold" />
        <div className="text-black font-bold text-2xl">Inclusion</div>
        </div>
        <h2 className="font-semibold text-xl text-blue-600">What's  Included</h2>
        <ul className="list-disc ml-5 mt-5">
          {Object.values(Included).map((item, index) => (
            <li className="text-justify text-md md:text-lg lg:text-xl font-sans mt-3" key={index}>{item} </li>
          ))}
        </ul>

        <h2 className=" font-semibold text-xl mt-5 text-blue-600">What's not Included</h2>
        <ul className="list-disc ml-5 mt-5">
            {Object.values(Excluded).map((item, index) => (
                <li className="text-justify text-md md:text-lg lg:text-xl font-sans mt-3" key={index}>{item}</li>

            ))}
        </ul>
      </div>
    )
  }
  

export default Domesticinclusion
