import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
     const { data: allBuyer = [], refetch } = useQuery({
          queryKey: ["allBuyers"],
          queryFn: async () => {
               const res = await fetch('http://localhost:5000/usersByRole?role=buyer')
               const data = res.json()
               return data;
          }
     })

     const handleDeleteBuyer = buyer => {
          fetch(`http://localhost:5000/seller/${buyer._id}`, {
               method: 'DELETE',
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                         refetch()
                         toast.success(`${buyer?.name} deleted successfully`)
                    }
               })

     }
     return (
          <div>
               <div className='p-2'>
                    <h2 className='text-xl font-semibold mb-1'>All Sellers</h2>
                    {
                         allBuyer && allBuyer.map(buyer => <div className='my-3' key={buyer._id}>
                              <div className='p-3 max-w-md flex justify-between items-center border rounded-lg shadow-xl'>
                                   <div className='font-serif'>
                                        <p>{buyer?.name}</p>
                                        <p>{buyer?.email}</p>
                                   </div>
                                   <div>
                                        <button onClick={() => handleDeleteBuyer(buyer)} className='btn btn-sm btn-error'>Delete</button>
                                   </div>
                              </div>
                         </div>)
                    }
               </div>
          </div>
     );
};

export default AllBuyers;