import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import Product from '../../Product/Product';

const CategoryProducts = () => {
     const categoriesProduct = useLoaderData();
     const { category_name } = categoriesProduct;

     const { data: products, isLoading } = useQuery({
          queryKey: ['products', category_name],
          queryFn: async () => {
               const res = await fetch(`https://seldom-server.vercel.app/products?category=${category_name}`);
               const data = await res.json();
               return data;

          }
     })

     if (isLoading) {
          return <Loading></Loading>
     }


     return (
          <div className='max-w-screen-lg mx-auto'>               
               <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                         products.map(product => <Product
                              key={product._id}
                              product={product}
                         ></Product>)
                    }
               </div>
          </div>

     );
};

export default CategoryProducts;