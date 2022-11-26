import { useState } from 'react';
import BookingModal from '../../Shared/Modal/BookingModal';

const Product = ({ product }) => {     
     const [book, setBook] = useState(null)
     const { category, product_name, image, location, resale_price, original_price, years_of_use, posted_date, sellers_name, isVerified ,condition} = product;

     return (
          <div className='my-4'>
               <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <img className="object-cover w-full h-64" src={image} alt="Article" />

                    <div className="p-6">
                         <div>
                              <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{category}</span>
                              <p className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline">{product_name}</p>
                         </div>

                         <div className="mt-1">
                              <div className="flex items-center">
                                   <div className="flex items-center">
                                        <p className="font-semibold text-gray-700 dark:text-gray-200 flex items-center" role="link">
                                             {sellers_name}
                                             {isVerified && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 text-blue-500">
                                                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                             </svg>
                                             }
                                        </p>
                                   </div>
                                   <div className="mx-1 text-xs text-gray-600 dark:text-gray-300">. {posted_date}</div>
                              </div>
                         </div>

                         <div>
                              <ol className="space-y-4 list-decimal list-inside text-gray-500 dark:text-gray-400 mt-4">
                                   <>
                                        <p className='text-gray-700 font-semibold'>Details:</p>
                                        <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                                             <li>resale price: {resale_price}</li>
                                             <li>original price: {original_price}</li>
                                             <li>Location: {location}</li>
                                             <li>Used: {years_of_use}</li>
                                             {
                                                  condition && <li>condition: {condition}</li>
                                             }

                                        </ul>
                                   </>

                              </ol>
                         </div>
                         <div>
                              <label onClick={()=>setBook(product)} htmlFor="booking-modal" className="btn btn-accent mt-4 ml-4">Book now</label>
                         </div>

                    </div>
               </div>
               {book && 
                    
                    <BookingModal
                         // product={product}
                         book={book}
                         setBook={setBook}
                    ></BookingModal>
               }
          </div>
     );
};

export default Product;