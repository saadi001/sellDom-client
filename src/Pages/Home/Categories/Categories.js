import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Loading/Loading';

const Categories = () => {
     const {data: categories,isLoading} = useQuery({
          queryKey: ['categories'],
          queryFn: async()=>{
               try{
                    const res = await fetch('http://localhost:5000/categories');
                    const data = await res.json()
                    console.log(data)
                    return data;
               }
               catch(error){
                    console.error(error)
               }
          }
     })

     if(isLoading){
          return <Loading></Loading>
     }
     return (
          <div className='max-w-5xl mx-auto my-5'>
               <h1>categories {categories.length}</h1>
          </div>
     );
};

export default Categories;