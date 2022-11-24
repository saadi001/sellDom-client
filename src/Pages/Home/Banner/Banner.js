import React from 'react';
import './Banner.css';

const Banner = () => {
     return (
          <div className='banner h-[400px] max-w-5xl mx-auto flex justify-center items-center my-6'>               
               <div className='text-center'>
                    <p className='text-5xl text-emerald-400 font-serif'>SellDom</p>
                    <p className='text-2xl text-white'>A PC Accesories Resale Platform</p>
               </div>
          </div>
     );
};

export default Banner;