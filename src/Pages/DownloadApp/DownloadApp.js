import React from 'react';
import download from '../../assets/Download.svg'

const DownloadApp = () => {
     return (
          <div className='max-w-5xl h-64 mx-auto mt-10 md:flex flex-row items-center  rounded-lg bg-teal-400'>
               <div className='h-64 w-1/2 hidden md:block'>
                    <img className='h-full w-full' src={download} alt="" />
               </div>
               <div className='p-5 text-white'>
                    <p className='text-2xl'>Download the app</p>
                    <p>Buying and selling is easier from our app. To buy and the sell download our app.</p>
                    <button className='btn mt-2'>Download</button>
               </div>
          </div>
     );
};

export default DownloadApp;