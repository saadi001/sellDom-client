import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Loading/Loading';

const AllBuyers = () => {
     const { data: allBuyer = [], refetch, isLoading } = useQuery({
          queryKey: ["allBuyers"],
          queryFn: async () => {
               const res = await fetch('https://seldom-server.vercel.app/usersByRole?role=buyer')
               const data = res.json()
               return data;
          }
     })

     const handleDeleteBuyer = buyer => {
          fetch(`https://seldom-server.vercel.app/seller/${buyer._id}`, {
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

     const handleMakeAdmin = id =>{
          fetch(`https://seldom-server.vercel.app/users/admin/${id}`,{
               method: 'PUT',
               headers:{
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
               }
          })
          .then(res => res.json())
          .then(data => {
               if(data.modifiedCount>0){
                    toast.success('Make admin successful')
                    refetch()
               }
          })
     }

     if(isLoading){
          return <Loading></Loading>
     }
     return (
          <div>
               <div className='p-2'>
                    <h2 className='text-xl font-semibold mb-1'>All Buyers</h2>
                    {
                         allBuyer ? allBuyer.map(buyer => <div className='my-3' key={buyer._id}>
                              <div className='p-3 max-w-lg flex justify-between items-center border rounded-lg shadow-xl'>
                                   <div className='font-serif'>
                                        <p>{buyer?.name}</p>
                                        <p>{buyer?.email}</p>
                                   </div>
                                   <div className='flex items-center'>
                                        <button onClick={() => handleDeleteBuyer(buyer)} className='btn btn-sm btn-error mr-2'>Delete</button>
                                        {buyer?.author !== 'admin' ? <button onClick={()=>handleMakeAdmin(buyer._id)} className='btn btn-accent btn-sm'>Make admin</button>
                                        : <button className='btn btn-sm disabled'>Admin</button>     
                                   }
                                   </div>
                              </div>
                         </div>): <p className='text-center'>No Buyer found</p>
                    }
               </div>
          </div>
     );
};

export default AllBuyers;