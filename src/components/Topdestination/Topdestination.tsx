
import Image1 from '../../assets/image/ITD-image1.jpg'
import Image2 from '../../assets/image/ITD-image2.jpg'
import Image3 from '../../assets/image/ITD-image3.jpg'
import Image4 from '../../assets/image/ITD-image4.jpg'
import Image5 from '../../assets/image/ITD-image5.jpg'
import Image6 from '../../assets/image/ITD-image6.jpg'
import Image7 from '../../assets/image/ITD-image7.jpg'
import Image8 from '../../assets/image/ITD-image8.jpg'
import Image9 from '../../assets/image/ITD-image9.jpg'
import Image10 from '../../assets/image/ITD-image10.jpg'
import Image11 from '../../assets/image/ITD-image11.jpg'

import FAQS from '../../assets/image/faqs.jpg'


const Internationaltopdestination = () => {
    const images = [
     {src: Image1, alt: 'International top Destination', place: 'SOUTH KOREA'},
     {src: Image2, alt: 'International top Destination', place: 'JAPAN'},
     {src: Image3, alt: 'International top Destination', place: 'HONG KONG'},
     {src: Image4, alt: 'International top Destination', place: 'SINGAPORE'},
     {src: Image5, alt: 'International top Destination', place: 'EUROPE'},
     {src: Image6, alt: 'International top Destination', place: 'HOLYLAND'},
     {src: Image7, alt: 'International top Destination', place: 'UAE'},
     {src: Image8, alt: 'International top Destination', place: 'CHINA' }
    ]


    const imageslink = [
        {src: Image9 },
        {src: Image10},
        {src: Image11}
    ]



  return (
    <div className='pt-8 pl-14 pr-14 pb-14 border-b-2'>
      <div className='text-2xl text-black font-bold mb-4'>International Top Destination</div>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4'>
        {images.map((image, index) => (
          <div key={index} className='relative w-84 h-68'>
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white text-sm font-semibold'>
              {image.place}
            </div>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 pt-8'>
       { imageslink.map((imagelink, index) => (
            <div key={index} className='border-2 rounded'>
                <img src={imagelink.src} className='w-full h-full object-cover' />
            </div>
        ))}
      </div>
      <div className='pt-8'>
        <img src={FAQS} className='w-full h-full rounded-md' />
      </div>
    </div>
  )
}

export default Internationaltopdestination
