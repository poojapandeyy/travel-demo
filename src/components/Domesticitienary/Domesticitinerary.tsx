import { useState } from 'react';
import { LiaMap } from "react-icons/lia";


const Domesticitinerary = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpandCollapse = () => {
        setIsExpanded(!isExpanded);
    };
    
    
    const [expandedIndex, setExpandedIndex] = useState(null);

    const faqs = [
            {
            day : "Day 1 :",
            name : "International Airport departure transfer",
            activities : "Check-in is 2.5 hours prior to departure, and it is best not to skim on time as queues can be long and slow. Your booked airport transfer will be at your hotel ready to take you to the airport in time, allowing approximately 30mins driving time depending on time of day. At the airport security will check your flight ticket – either hard copy or on your mobile – along with your passport before you are allowed to enter the departure hall."
            },
            {
                day : "Day 2 :",
                name : "Sightseeing – UNSESCO World Heritage Sites",
                activities : "Check-in is 2.5 hours prior to departure, and it is best not to skim on time as queues can be long and slow. Your booked airport transfer will be at your hotel ready to take you to the airport in time, allowing approximately 30mins driving time depending on time of day. At the airport security will check your flight ticket – either hard copy or on your mobile – along with your passport before you are allowed to enter the departure hall."
            },
            {
                day : "Day 3 :",
                name : "Kathmandu to Namo Buddha transfer with visit to Bhakatpur",
                activities : "Check-in is 2.5 hours prior to departure, and it is best not to skim on time as queues can be long and slow. Your booked airport transfer will be at your hotel ready to take you to the airport in time, allowing approximately 30mins driving time depending on time of day. At the airport security will check your flight ticket – either hard copy or on your mobile – along with your passport before you are allowed to enter the departure hall."
            },
            {
                day : "Day 4 :",
                name : "Namo Buddha to Nuwakot transfer",
                activities : "Check-in is 2.5 hours prior to departure, and it is best not to skim on time as queues can be long and slow. Your booked airport transfer will be at your hotel ready to take you to the airport in time, allowing approximately 30mins driving time depending on time of day. At the airport security will check your flight ticket – either hard copy or on your mobile – along with your passport before you are allowed to enter the departure hall."
            },
            {
                day : "Day 5 :",
                name : " Nuwakot to Pokhara transfer",
                activities : "Check-in is 2.5 hours prior to departure, and it is best not to skim on time as queues can be long and slow. Your booked airport transfer will be at your hotel ready to take you to the airport in time, allowing approximately 30mins driving time depending on time of day. At the airport security will check your flight ticket – either hard copy or on your mobile – along with your passport before you are allowed to enter the departure hall."
            },

        ];
        const toggleExpand = (index:any) => {
            setExpandedIndex(expandedIndex === index ? null : index);
        
    }

  return (
    <div id="itinerary" className="px-4 md:px-20 lg:px-36 mt-10 w-full md:w-4/5 lg:w-3/4">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <LiaMap size={32} color="blue" />
                <div className="text-2xl font-bold">Itinerary</div>
            </div>
        
        <button className="bg-blue-600 rounded-md px-2 py-1 text-white font-medium " 
        onClick={toggleExpandCollapse}>
            {isExpanded ? 'Collapse All' : 'Expand All'}
        </button>
       
        </div>
        <div className="bg-slate-100 mt-4 rounded w-full lg:w-2/3">
            <div className="text-gray-700 font-medium text-lg pl-3 pt-2">Important Notice</div>
            <p className="p-2 pt-2 text-md md:text-sm lg:text-xs text-red-500 text-justify">The Civil Aviation Authority of Nepal (CAAN) has implemented new rules for helicopter landing at Kalapatthar. In a shared helicopter, there are either 5 passengers or 2 passengers, and the cost is split, and in the case of 5 passengers, the helicopter doesn't land. The cost must be split among two passengers for landing at Kalapatthar.</p><br/>
            <p className="p-2 pt-2 text-md md:text-sm lg:text-xs text-red-500 text-justify">In a private helicopter, if there are 2 passengers, the helicopter lands, and in the case of 5, it doesn't land. There must be either a single passenger or two passengers for the landing at Kalapatthar.</p><br/>
            <p className="p-2 pt-2 text-md md:text-sm lg:text-xs text-red-500 text-justify">In both sharing and private helicopters the helicopter lands at the Everest View Hotel for breakfast.</p>
        </div>

        <div className='font-bold text-xl pt-5 text-blue-600'>SEE ALL DAYS ITIENERARY</div>
        {faqs.map((faq, index) => (
            isExpanded && (
             <div key={index} className="mb-4 pt-2">
             <div
               className="flex justify-between items-center bg-blue-100 p-4 rounded cursor-pointer"
               onClick={() => toggleExpand(index)}
             >
              
               <div className='flex items-center gap-0 md:gap-2 lg:gap-3'>
               <div className="text-sm md:text-md lg:text-lg font-medium  text-blue-700">{faq.day}</div>
               <div className="text-sm md:text-md lg:text-lg font-medium ">{faq.name}</div>
               </div>
               <div>{expandedIndex === index ? '-' : '+'}</div>
             </div>
             <div
               className={`overflow-hidden transition-max-height duration-900 ease-in-out ${expandedIndex === index ? 'max-h-screen' : 'max-h-0'}`}
             >
               <div className="p-4 bg-gray-100 rounded-b">
                 <p>{faq.activities}</p>
               </div>
             </div>
           </div>
            )
        ))}

       


    </div>
  )
}

export default Domesticitinerary
