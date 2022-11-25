import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Signup = () => {
     const {createUser,updateUserProfile } = useContext(AuthContext)
     const [signUpError, setSignUpError] = useState('');
     const { register, formState: { errors }, handleSubmit } = useForm();
     const location = useLocation();
     const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';

     const handleSignup = data => {
          const { name, role, email, password } = data;

          createUser(email, password)
               .then(result => {
                    const user = result.user;
                    console.log(user)
                    setSignUpError('')
                    toast.success('Sign in successful.')
                    navigate(from, {replace: true})
                    const userInfo = {
                         displayName : name
                    }
                    updateUserProfile(userInfo)
                    .then(()=>{
                         saveUser(name,role,email,password)
                    })
                    .catch(error=>console.error(error))
               })
               .catch(error => {
                    setSignUpError(error.message)
                    console.error(error.message)
                    const errMessage = error.message.split('/')[1].slice(0, -1).slice(0, -1);
                    setSignUpError(errMessage)
               })
     }

     const saveUser = (name,role,email,password) =>{
          const user = {name, role, email, password};

          fetch('http://localhost:5000/users',{
               method: 'POST',
               headers: {
                    'content-type' : 'application/json'
               },
               body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data =>{

          })

     }
     return (
          <div>
               <div class="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <h1 class="text-3xl font-semibold text-center text-gray-700 dark:text-white uppercase font-serif">Sign up</h1>

                    <form onSubmit={handleSubmit(handleSignup)} className="mt-6">
                         <div>
                              <label for="username" class="block text-sm text-gray-800 dark:text-gray-200">Name<span className='text-red-500'>*</span></label>
                              <input {...register('name', { required: 'Name is required' })} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                              {errors.name && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-[2px]">
                                   <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                              </svg>
                                   {errors.name?.message}</p>}
                         </div>

                         <div className='mt-4'>
                              <label for="username" class="block text-sm text-gray-800 dark:text-gray-200">Options</label>
                              <select {...register('role')} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                   <option value='buyer' selected>buyer</option>
                                   <option value='seller'>seller</option>

                              </select>
                         </div>

                         <div className='mt-4'>
                              <label for="username" class="block text-sm text-gray-800 dark:text-gray-200">Email<span className='text-red-500'>*</span></label>
                              <input {...register('email', { required: 'Email adress is required' })} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                              {errors.email && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-[2px]">
                                   <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                              </svg>{errors.email?.message}</p>}
                         </div>

                         <div class="mt-4">
                              <div class="flex items-center justify-between">
                                   <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Password<span className='text-red-500'>*</span></label>
                              </div>

                              <input {...register('password', { required: 'Password adress is required', minLength: { value: 6, message: 'password must have at least 6 character.' } })} type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                              {errors.password && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-[2px]">
                                   <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                              </svg>{errors.password?.message}</p>}
                              {
                                   signUpError && <div className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-[2px]">
                                   <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                              </svg>{signUpError}</div>
                              }
                         </div>

                         <div class="mt-6">
                              <button class="w-full px-4 py-2 uppercase tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                   Sign up
                              </button>
                         </div>
                    </form>                    

                    <p class="mt-8 text-xs font-light text-center text-gray-400"> Already have an account? <Link to='/login' class="font-medium text-gray-700 dark:text-gray-200 hover:underline">login</Link></p>
               </div>
          </div>
     );
};

export default Signup;