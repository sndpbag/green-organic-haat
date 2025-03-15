import React from 'react';
import logoHeader from '../assets/logo-header.png'
import healthy from '../assets/healthy.png'
import hero from '../assets/hero.png'
import { FaCartShopping } from 'react-icons/fa6';
import { IoSearchOutline } from 'react-icons/io5';
const Navbar = () => {
    const links = <>
    <li><a href="#" className='text-[#111111] text-sm bg-transparent'>Product</a></li>
    <li><a href="#" className='text-[#111111] text-sm bg-transparent'>Services</a></li>
    <li><a href="#" className='text-[#111111] text-sm bg-transparent'>Contact us</a></li>
    </>
    return (
        <section 
        className='pt-5'
        style={{ background: 'linear-gradient(180deg, rgb(255, 255, 255), rgb(239, 235, 227) 100%)', minHeight: '100vh'}}>
            <div className="navbar w-11/12 mx-auto p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="hidden md:block"><img className='w-full h-14' src={logoHeader} alt="logo" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <img className='block md:hidden w-14 h-14' src={healthy} alt="" />
                    <div className='md:flex hidden items-center gap-4'>
                    <a href="#"><IoSearchOutline className='text-xl' /></a>
                    <a href="#"><FaCartShopping className='text-xl' /></a>
                    <a className="btn text-[#111111] rounded-lg">Login</a>
                    <a className="btn bg-[#179800] text-white rounded-lg">Register</a>
                    </div>
                </div>
            </div>

            {/* bannar */}
            <div className='max-w-[800px] mx-auto space-y-4 md:space-y-8 text-center pt-5 md:pt-20'>
                <h1 className='text-[#111111] font-semibold text-3xl lg:text-4xl'>Freshness <span className='text-[#179800]'>You Can
               <br /> Count</span> On, Prices You’ll Love!</h1>
               {/* content */}
               <p className='text-[#111111] md:text-xl text-base'>
               Shop your daily essentials at unbeatable prices. From fresh produce to pantry staples, we’ve got you covered every day!
               </p>
               {/* img */}
               <img className='w-[600px] h-[500px] mx-auto' src={hero} alt="" />
            </div>
        </section>
    );
};

export default Navbar;