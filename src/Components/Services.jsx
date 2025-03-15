import React from 'react';

import service1 from '../assets/image/service1.png'
import car from '../assets/image/car.png'
import health from '../assets/image/health.png'
const Services = () => {
    return (
        // service section
        <div className='w-11/12 mx-auto mt-[140px] mb-8 md:mb-[140px]'>
            <h2 className='text-[#179800] font-sora text-2xl md:text-4xl text-center md:text-left font-semibold mb-3 md:mb-12'>Services</h2>
         
            <div className='w-11/12  mx-auto grid grid-cols-1 gap-6  md:grid-cols-3 lg:grid-cols-3'>
                 {/* first card */}
                <div  className='bg-[#EFEBE3] rounded-2xl  flex flex-col justify-center items-center p-4'>
                    <div className=' w-32 h-32 md:w-40 md:h-40 rounded-full mt-4 md:mt-8  bg-white flex justify-center items-center'>
                    <img src={service1} alt="" />
                    </div>
                    <h2 className='text-center mb-3 mt-6 text-[#111111] font-sora font-semibold text-xl md:text-2xl'>24/7 Services </h2>
                    <p className=' mb-4 md:mb-11 text-center font-sora text-[16px] md:text-xl font-light text-[#111111]'>We provide 24/7 services, ensuring round-the-clock support, reliability, and instant assistance.</p>
                </div>
                  {/* 2nd card */}
                    <div  className='bg-[#EFEBE3] rounded-2xl flex flex-col justify-center items-center p-4'>
                    <div className='w-32 h-32 md:w-40 md:h-40 rounded-full mt-4 md:mt-8  bg-white flex justify-center items-center'>
                    <img src={car} alt="" />
                    </div>
                    <h2 className='text-center mb-3 mt-6 text-[#111111] font-sora font-semibold text-xl md:text-2xl'>Fast Delivery </h2>
                    <p className=' mb-4 md:mb-11 text-center font-sora text-[16px] md:text-xl font-light text-[#111111]'>We ensure fast delivery with speed, reliability, and efficiency for your convenience.</p>
                </div>
                    {/* 3rd card */}
                      <div  className='bg-[#EFEBE3] rounded-2xl  flex flex-col justify-center items-center p-4'>
                    <div className='w-32 h-32 md:w-40 md:h-40 rounded-full mt-4 md:mt-8  bg-white flex justify-center items-center'>
                    <img src={health} alt="" />
                    </div>
                    <h2 className='text-center mb-3 mt-6 text-[#111111] font-sora font-semibold text-xl md:text-2xl'>Healthy Products</h2>
                    <p className='mb-4 md:mb-11 text-center font-sora text-[16px] md:text-xl font-light text-[#111111]'>We offer healthy products made with natural, high-quality ingredients for your well-being.</p>
                </div>
               
            </div>

            
        </div>

 

    );
};

export default Services;