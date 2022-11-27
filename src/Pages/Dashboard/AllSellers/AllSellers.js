import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
     const { data: allSeller = [],refetch } = useQuery({
          queryKey: ["allSellers"],
          queryFn: async () => {
               const res = await fetch('http://localhost:5000/usersByRole?role=seller')
               const data = res.json()
               return data;
          }
     })

     const handleDeleteSeller = seller => {
          fetch(`http://localhost:5000/seller/${seller._id}`, {
               method: 'DELETE',
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                         refetch()
                         toast.success(`${seller?.name} deleted successfully`)
                    }
               })

     }

     return (
          <div className='p-2'>
               <h2 className='text-xl font-semibold mb-1'>All Sellers</h2>
               {
                    allSeller && allSeller.map(seller => <div className='my-3' key={seller._id}>
                         <div className='p-3 max-w-md flex justify-between items-center border rounded-lg shadow-xl'>
                              <div className='font-serif'>
                                   <p>{seller?.name}</p>
                                   <p>{seller?.email}</p>
                              </div>
                              <div>
                                   <button onClick={()=>handleDeleteSeller(seller)} className='btn btn-sm btn-error'>Delete</button>
                              </div>
                         </div>
                    </div>)
               }
          </div>
     );
};

export default AllSellers;