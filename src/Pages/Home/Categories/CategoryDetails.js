import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryDetails = ({ category }) => {
     const { category_name, image,_id } = category;
     const navigate = useNavigate();

     const categoryById = id =>{
          navigate(`/category/${id}`)
     }
     return (
          <div>
               <div onClick={()=>categoryById(_id)} className="w-full cursor-pointer overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800 border">
                    <img className="object-cover w-full h-56" src={image} alt="category" />

                    <div className="py-2 text-center">
                         <p className="block text-2xl font-bold text-gray-800 dark:text-white">{category_name}</p>
                    </div>
               </div>
          </div>
     );
};

export default CategoryDetails;