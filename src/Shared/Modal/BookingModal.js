import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const BookingModal = ({product}) => {
     const {user}= useContext(AuthContext);          

     return (
          <div>               
               <input type="checkbox" id="booking-modal" className="modal-toggle" />
               <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                         <form>
                              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                   <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="username">Username</label>
                                        <input id="username" type="text" defaultValue={user?.displayName} disabled className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   </div>

                                   <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                                        <input id="emailAddress" defaultValue={user?.email} disabled type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   </div>

                                   <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="password">Item name</label>
                                        <input defaultValue={product?.product_name} disabled type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   </div>

                                   <div>
                                        <label className="text-gray-700 dark:text-gray-200" >Price</label>
                                        <input defaultValue={product?.resale_price} disabled  type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   </div>

                                   <div>
                                        <label className="text-gray-700 dark:text-gray-200" >Phone number</label>
                                        <input  type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   </div>

                                   <div>
                                        <label className="text-gray-700 dark:text-gray-200">Meeting location</label>
                                        <input  type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   </div>
                              </div>
                             
                         </form>
                         <div className="modal-action">                         
                              <label htmlFor="booking-modal" className="btn btn-outline">Cancel</label>
                              <label className="btn">Book</label>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default BookingModal;