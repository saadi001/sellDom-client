import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loading from '../../Loading/Loading';

const MyOrders = () => {
     const { user } = useContext(AuthContext);

     const { data: bookings, isLoading } = useQuery({
          queryKey: ['bookings', user?.email],
          queryFn: async () => {
               const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`)
               const data = await res.json()
               console.log(data)
               return data
          }

     })

     if (isLoading) {
          return <Loading></Loading>
     }
     return (
          <div className='p-2'>
               <h2 className='text-2xl font-semibold'>My orders</h2>
               <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">

                         <thead>
                              <tr>
                                   <th></th>
                                   <th>Image</th>
                                   <th>product name</th>
                                   <th>price</th>
                                   <th>Phone Number</th>
                                   <th>location</th>
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   bookings ?
                                        bookings.map((booking, i) => <tr key={booking._id}>
                                             <th>{1 + i}</th>
                                             <td><div className="avatar">
                                                  <div className="w-20 rounded">
                                                       <img src={booking?.img} alt="product" />
                                                  </div>
                                             </div></td>
                                             <td>{booking?.item}</td>
                                             <td>{booking?.price}</td>
                                             <td>{booking?.phone}</td>
                                             <td>{booking?.location}</td>
                                        </tr>) : <p className='mt-2 text-center'>No orders Found</p>
                              }

                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default MyOrders;