import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AddProduct = () => {
     const { register, formState: { errors }, handleSubmit } = useForm();
     const { user,loading, setLoading } = useContext(AuthContext);
     const navigate = useNavigate()
     let today = new Date();
     let dd = String(today.getDate()).padStart(2, '0');
     let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
     let yyyy = today.getFullYear();     
     const date = mm + '/' + dd + '/' + yyyy;
    
     const imageHostKey = process.env.REACT_APP_imageHostingKey;   
     // condition product details e add korte hobe 

     const handleAddproduct = (data) => {
          setLoading(true)
          // console.log(data)
          const { product_name, category, resale_price, original_price, years_of_use, condition, location } = data;          
          const image = data.img[0]
          const formData = new FormData();
          formData.append('image', image)
          const url =`https://api.imgbb.com/1/upload?key=63767107697823bd4d26d5b8bb78e4a0`
          fetch(url,{
               method: 'POST',
               body: formData
          })
          .then(res => res.json())
          .then(imageData =>{
               if(imageData.success){
                    console.log(imageData.data.url)
                    const product = {
                         product_name,
                         category, 
                         resale_price,
                         original_price,
                         years_of_use,
                         condition,
                         location,
                         sellers_name: user?.displayName,
                         image: imageData.data.url,
                         posted_date: date
                    }
                    fetch('http://localhost:5000/products',{
                         method: 'POST',
                         headers: {
                              'content-type' : 'application/json'
                         },
                         body: JSON.stringify(product)
                    })
                    .then(res => res.json())
                    .then(result => {
                         console.log(result)
                         setLoading(false)
                         toast.success(`${product_name} added successfully`)
                         navigate('/dashboard')
                         
                         
                    })
               }
          })


     }

     return (
          <div className='p-2'>
               <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add A Product</h2>

                    <form onSubmit={handleSubmit(handleAddproduct)}>
                         <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                              <div>
                                   <label className="text-gray-700 dark:text-gray-200" for="username">Product Name</label>
                                   <input {...register('product_name', { required: 'This field is required' })} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   {errors.product_name && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-[2px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                   </svg>
                                        {errors.product_name?.message}</p>}
                              </div>

                              <div>
                                   <label className="text-gray-700 dark:text-gray-200" for="username">Product category</label>
                                   <select {...register('category', { required: 'This field is required' })} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                        <option disabled selected>category</option>
                                        <option value='MotherBoard'>MotherBoard</option>
                                        <option value='Gpu'>Gpu</option>
                                        <option value='Mouse'>Mouse</option>

                                   </select>
                                   {errors.category && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-[2px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                   </svg>
                                        {errors.category?.message}</p>}
                              </div>

                              <div>
                                   <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Resale Price</label>
                                   <input {...register('resale_price', { required: 'This field is required' })} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   {errors.resale_price && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-[2px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                   </svg>
                                        {errors.resale_price?.message}</p>}
                              </div>

                              <div>
                                   <label className="text-gray-700 dark:text-gray-200" for="password">Original Price</label>
                                   <input {...register('original_price', { required: 'This field is required' })} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   {errors.original_price && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-[2px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                   </svg>
                                        {errors.original_price?.message}</p>}
                              </div>

                              <div>
                                   <label className="text-gray-700 dark:text-gray-200" for="password">Years of usage</label>
                                   <input {...register('years_of_use', { required: 'This field is required' })} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   {errors.years_of_use && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-[2px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                   </svg>
                                        {errors.years_of_use?.message}</p>}
                              </div>

                              <div>
                                   <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Condition</label>
                                   <select {...register('condition', { required: 'This field is required' })} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                        <option disabled selected>Your product condition</option>
                                        <option value='excellent'>excellent</option>
                                        <option value='good'>good</option>
                                        <option value='fair'>fair</option>

                                   </select>
                                   {errors.condition && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-[2px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                   </svg>
                                        {errors.condition?.message}</p>}
                              </div>

                              <div>
                                   <label className="text-gray-700 dark:text-gray-200" for="password">image</label>
                                   <input {...register('img')} type="file" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                              </div>

                              <div>
                                   <label className="text-gray-700 dark:text-gray-200" for="password">Location</label>
                                   <input {...register('location', { required: 'This field is required' })} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   {errors.location && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-[2px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                   </svg>
                                        {errors.location?.message}</p>}
                              </div>
                         </div>

                         <div className="flex justify-end mt-6">
                              <button type='submit' className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                         </div>
                    </form>
               </section>
          </div>
     );
};

export default AddProduct;