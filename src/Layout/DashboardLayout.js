import React, { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import logo from '../assets/logo.svg'


const DashboardLayout = () => {
     const navigate = useNavigate();
     const { user, logOut } = useContext(AuthContext)
     const userLogout = () => {
          logOut()
               .then(() => {
                    navigate('/')
               })
               .catch(err => console.error(err))
     }

     const menuItems = <>
          <li><Link to='/blog' >Blog</Link></li>
          {
               user?.uid ? <>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><p onClick={userLogout}>sign out</p></li>
               </>
                    :
                    <>
                         <li><Link to='/login'>Log in</Link></li>
                         <li><Link to='/signup'>Sign up</Link></li>
                    </>
          }
     </>
     return (
          <div className='max-w-screen-xl mx-auto'>
               <div className="drawer">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                         {/* <!-- Navbar --> */}
                         <div className="w-full navbar bg-base-300 ">
                              <div className="flex-none lg:hidden">
                                   <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                   </label>
                              </div>
                              <div className="flex-1 px-2 mx-2">
                                   <Link to='/' className='flex items-center'>
                                        <div className='h-8 w-8 mr-2'><img className='h-full w-full' src={logo} alt="" /></div>
                                        <p className='text-xl font-serif'>SellDom</p>
                                   </Link>
                              </div>
                              <div className="flex-none hidden lg:block">
                                   <ul className="menu menu-horizontal font-serif text-sm uppercase">
                                        {/* <!-- Navbar menu content here --> */}
                                        {menuItems}
                                   </ul>
                              </div>
                         </div>
                         <div className="drawer drawer-mobile">
                              <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                              <div className="drawer-content ">



                                   <label htmlFor="my-drawer-2" className="btn btn-outline btn-accent drawer-button lg:hidden m-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                   </svg>
                                   </label>
                                   <Outlet></Outlet>
                              </div>
                              <div className="drawer-side">
                                   <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                                   <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                                        <li><Link to='/dashboard'>My Orders</Link></li>
                                        <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                                        
                                   </ul>

                              </div>
                         </div>

                    </div>
                    <div className="drawer-side">
                         <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                         <ul className="menu p-4 w-80 bg-base-100 font-serif text-sm uppercase">
                              {menuItems}
                         </ul>
                    </div>
               </div>

          </div>
     );
};

export default DashboardLayout;