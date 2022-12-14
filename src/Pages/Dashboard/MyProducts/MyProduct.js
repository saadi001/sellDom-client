import { useQuery } from '@tanstack/react-query';
import React, { useContext,  } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loading from '../../Loading/Loading';

const MyProduct = () => {
     const {user} = useContext(AuthContext)
     // const [advertiseContent, setAdvertiseContent] = useState('Advertise')
     const {data:myProduct,refetch, isLoading} = useQuery({
          queryKey: ['myProduct',user?.displayName],
          queryFn: async()=>{
               const res = await fetch(`https://seldom-server.vercel.app/myProducts?sellers_name=${user?.displayName}`)
               const data =await res.json()
               return data;
          }
     })

     const handleDeleteProduct = product => {
          fetch(`https://seldom-server.vercel.app/myProducts/${product._id}`,{
               method: 'DELETE',               
          })
          .then(res => res.json())
          .then(data=>{
               console.log(data)
               if(data.deletedCount>0){
                    refetch()
                    toast.success(`${product?.product_name} deleted successfully`)
               }
          })

     }

     const saveAdvertisement = product =>{
          const {image, product_name, resale_price} = product;
          const adProduct = {image,product_name,resale_price}
          fetch('https://seldom-server.vercel.app/advertise',{
               method: 'POST',
               headers: {
                    'content-type' : 'application/json'
               },
               body: JSON.stringify(adProduct)
          })
          .then(res => res.json())
          .then(data =>{
               console.log(data)
               // setAdvertiseContent('advertise running')
          })

     }

     if(isLoading){
          return <Loading></Loading>
     }
     return (
          <div className='p-2'>
               <h2 className='text-xl font-semibold mb-2'>My Products</h2>
               <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">

                         <thead>
                              <tr>
                                   <th></th>
                                   <th>Image</th>
                                   <th>product name</th>
                                   <th>sales_status</th>
                                   <th>price</th>
                                   <th>Action</th>
                                   <th>Advertise</th>
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   myProduct ?
                                        myProduct.map((product, i) => <tr key={product._id}>
                                             <th>{1 + i}</th>
                                             <td><div className="avatar">
                                                  <div className="w-20 rounded">
                                                       <img src={product?.image} alt="product" />
                                                  </div>
                                             </div></td>
                                             <td>{product?.product_name}</td>
                                             <td>{product?.sales_status}</td>
                                             <td>{product?.resale_price}</td>
                                             <td><button onClick={()=>handleDeleteProduct(product)}  className='btn btn-sm btn-error'>Delete</button></td>
                                             <td><button onClick={()=>saveAdvertisement(product)} className='btn btn-sm btn-accent'>Advertise</button></td>
                                        </tr>) : <p className='mt-2 text-center'>No product found</p>
                              }
                              

                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default MyProduct;