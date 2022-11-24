import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import logo from '../assets/logo.svg'

const Main = () => {
     const menuItems = <>
          <li><Link>Navbar Item 1</Link></li>
          <li><Link>Navbar Item 2</Link></li>
     </>
     return (
          <div>
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
                                   <ul className="menu menu-horizontal font-serif text-sm">
                                        {/* <!-- Navbar menu content here --> */}
                                        {menuItems}
                                   </ul>
                              </div>
                         </div>
                         {/* <!-- Page content here --> */}
                         <Outlet></Outlet>
                         <Footer></Footer>
                    </div>
                    <div className="drawer-side">
                         <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                         <ul className="menu p-4 w-80 bg-base-100 font-serif">
                              {menuItems}
                         </ul>
                    </div>
               </div>
          </div>
     );
};

export default Main;