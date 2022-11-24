import React from 'react';
import { useNavigate } from 'react-router-dom';
import noFound from '../../assets/notFound.gif';

const NotFound = () => {
     const navigate = useNavigate();
     const goHomepage = () => {
          navigate('/')
     }
     return (
          <div className='flex h-screen items-center justify-center'>
               <div className='md:w-1/2 mx-auto relative flex '>
                    <img className=' w-full' src={noFound} alt="" />
                    <div onClick={goHomepage} className='absolute h-8 w-32 bottom-5 right-8 cursor-pointer'></div>
               </div>
          </div>
     );
};

export default NotFound;