import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Loading/Loading';
import CategoryDetails from './CategoryDetails';

const Categories = () => {
     const { data: categories, isLoading } = useQuery({
          queryKey: ['categories'],
          queryFn: async () => {
               try {
                    const res = await fetch('http://localhost:5000/categories');
                    const data = await res.json()
                    console.log(data)
                    return data;
               }
               catch (error) {
                    console.error(error)
               }
          }
     })

     if (isLoading) {
          return <Loading></Loading>
     }
     return (
          <div className='max-w-5xl mx-3 md:mx-auto mt-10'>
               <h1 className='text-2xl font-semibold font-mono my-3 '>categories</h1>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                         categories.map(category => <CategoryDetails
                              key={category._id}
                              category={category}
                         ></CategoryDetails>)
                    }
               </div>
          </div>
     );
};

export default Categories;