
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaWhatsapp, FaRegCopyright } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Links from "./link";


const Footer = () => {
  const footeritems = [
    'ABOUT US', 'CONTACT US', 'CAREER', 'DATA PRIVACY POLICY', 'TERMS AND CONDITION', 'AWARDS WE HAVE REACHED'
  ];

  return (
    <div className='pt-8 px-4 sm:px-6 md:px-14'>
      <div className='pb-5 border-b-2 flex flex-col justify-center items-center'>
        <div className='flex gap-5'>
          <FaFacebook className='text-pink-500 hover:text-black' size={20} />
          <FaInstagram size={20} className='text-pink-500 hover:text-black' />
          <FaYoutube size={20} className='text-pink-500 hover:text-black' />
          <FaPinterest size={20} className='text-pink-500 hover:text-black' />
          <FaTwitter size={20} className='text-pink-500 hover:text-black' />
          <FaWhatsapp size={20} className='text-pink-500 hover:text-black' />
        </div>
        <div className='flex flex-wrap justify-center gap-4 sm:gap-6 pt-5'>
          {footeritems.map((footeritem, index) => (
            <div key={index} className='text-xs text-gray-700 hover:text-black'>
              {footeritem}
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col border-b-2 justify-center items-center py-2'>
        <Links />
      </div>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-1 border-b-2 py-2 text-center px-4 sm:px-6 md:px-14'>
        <FaRegCopyright size={14} />
        <span className='text-xs sm:text-sm md:text-base lg:text-lg'>2020 Raj and Rose Travel & Tours Pvt. Ltd. <a href='https://domeinfosys.com/' className='hover:underline'>Powered by Dome Infosys</a></span>
      </div>
    </div>
  );
}

export default Footer;
