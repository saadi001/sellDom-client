import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import React from 'react';

const Advertisement = () => {
     const { data: advertisement } = useQuery({
          queryKey: ['advertisement'],
          queryFn: async () => {
               const res = await fetch('http://localhost:5000/advertise')
               const data = await res.json()
               return data;
          }
     })
     return (
          <div className='w-full max-w-5xl mx-auto rounded-md'>

               <>
                    <Swiper
                         // navigation={true}
                         modules={[Autoplay, Navigation]}
                         autoplay={{
                              delay: 3000,
                              disableOnInteraction: false,
                         }}
                         className="mySwiper"
                    >
                         {
                              advertisement && advertisement.map(ad => <SwiperSlide>
                                   <div className='bg-cyan-100'>
                                        <img
                                             className="object-cover w-9/12 h-28 relative"
                                             src={ad.image}
                                             alt=" slide 1"
                                        />
                                        <div className='absolute top-1 right-5 text-xl md:text-4xl  font-serif text-slate-500'>
                                        <p>{ad.product_name}</p>
                                        <p className='text-sm md:text-base'>BDT {ad.resale_price}</p>
                                        
                                        </div>                                        
                                   </div>

                              </SwiperSlide>)
                         }                        
                    </Swiper>
               </>
               <p className='text-xs text-right uppercase'>ad</p>
          </div>
     );
};

export default Advertisement;