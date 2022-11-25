import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';

const BookingModal = ({ book }) => {
     console.log("book", book)     
     const { user } = useContext(AuthContext);
     const { register, handleSubmit } = useForm();
     const date = new Date()

     const handleBooking = (data) =>{
          const bookings = {
               name : user?.displayName,
               email: user?.email,
               item: book?.product_name,
               price: book?.resale_price,
               phone: data?.phone,
               location: data?.location,
               date
          }

          fetch('http://localhost:5000/bookings',{
               method: 'POST',
               headers: {
                    'content-type' : 'application/json'
               },
               body: JSON.stringify(bookings)
          })
          .then(res => res.json())
          .then(data =>{
               console.log(data)
               if(data.acknowledged){
                    toast.success('booking confirmed')
               }
               else{
                    toast.error(data.message)
               }
          })

     }

     return (
          <div>
               <input type="checkbox" id="booking-modal" className="modal-toggle" />
               <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                         <form onSubmit={handleSubmit(handleBooking)}>
                              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                   <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="username">Username</label>
                                        <input {...register('name')} type="text" defaultValue={user?.displayName} disabled className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   </div>

                                   <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                                        <input {...register('email')} defaultValue={user?.email} disabled type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   </div>

                                   <div>
                                        <label className="text-gray-700 dark:text-gray-200" >Item name</label>
                                        <input  defaultValue={book?.product_name} {...register('item')} disabled type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   </div>

                                   <div>
                                        <label className="text-gray-700 dark:text-gray-200" >Price</label>
                                        <input {...register('price')} defaultValue={book?.resale_price} disabled type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   </div>

                                   <div>
                                        <label className="text-gray-700 dark:text-gray-200" >Phone number</label>
                                        <input {...register('phone',{required: true})} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   </div>

                                   <div>
                                        <label className="text-gray-700 dark:text-gray-200">Meeting location</label>
                                        <input {...register('location',{required: true})} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   </div>
                              </div>
                              <div className="modal-action">
                                   <label htmlFor="booking-modal" className="btn btn-outline">Cancel</label>
                                   <button type='submit' className="btn">Book</button>
                              </div>
                         </form>

                    </div>
               </div>
          </div>
     );
};

export default BookingModal;