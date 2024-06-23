import { useState } from 'react';
import { BsChatText } from 'react-icons/bs';

const Domesticfaqs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      number: "Que1",
      question: "What is the best time to visit Everest Base Camp?",
      answer: "The best time to visit Everest Base Camp is during the pre-monsoon (March to May) and post-monsoon (September to November) seasons."
    },
    {
      number: "Que2",
      question: "How difficult is the Everest Base Camp trek?",
      answer: "The trek to Everest Base Camp is considered moderately difficult. It requires good physical fitness and acclimatization to high altitudes."
    },
    {
      number: "Que3",
      question: "What should I pack for the trek?",
      answer: "You should pack warm clothing, a good pair of trekking boots, a sleeping bag, a first aid kit, and necessary permits and documents."
    },
    {
      number: "Que4",
      question: "Are permits required for the trek?",
      answer: "Yes, you need TIMS and Sagarmatha National Park permits for the Everest Base Camp trek."
    },
    {
      number: "Que5",
      question: "Can beginners do the Everest Base Camp trek?",
      answer: "Yes, beginners can do the trek with proper preparation and physical fitness training."
    },
  ];

  const toggleExpand = (index:any) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id='faqs' className="pl-4 md:pl-20 lg:pl-36 mt-10 w-full md:w-4/5 lg:w-3/4">
      <div className="flex items-center gap-3 mb-6">
        <BsChatText size={28} color="blue" />
        <div className="text-2xl font-bold">FAQs</div>
      </div>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex justify-between items-center bg-blue-100 p-4 rounded cursor-pointer"
            onClick={() => toggleExpand(index)}
          >
           
            <div className='flex items-center gap-3'>
            <div className="text-sm md:text-md lg:text-lg font-medium gap-2 text-blue-700">{faq.number}</div>
            <div className="text-sm md:text-md lg:text-lg font-medium gap-2">{faq.question}</div>
            </div>
            <div>{expandedIndex === index ? '-' : '+'}</div>
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-900 ease-in-out ${expandedIndex === index ? 'max-h-screen' : 'max-h-0'}`}
          >
            <div className="p-4 bg-gray-100 rounded-b">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Domesticfaqs;
