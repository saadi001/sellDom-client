import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryProducts = () => {
     const data = useLoaderData();
     const {category_name} = data;
     return (
          <div>
               {category_name}
          </div>
     );
};

export default CategoryProducts;