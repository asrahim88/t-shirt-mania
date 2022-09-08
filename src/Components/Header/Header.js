import { Navbar } from 'flowbite-react';
import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    const [bgColorChange, setBgColorChange] = useState(false);
    const changeBgNavbar = () => {
        if (window.scrollY >= 80) {
            setBgColorChange(true);
        } 
        else {
            setBgColorChange(false);
        }
    }
    window.addEventListener('scroll', changeBgNavbar);
    return (
        <div className='sticky top-0 w-full'>
            <div className={bgColorChange ? 'bg-blue-200' : "bg-transparent text-white"}>
                <div className='md:mx-auto md:w-10/11 ld:mx-auto lg:w-10/12'>
                    <Navbar
                        fluid={true}
                        rounded={true}
                        style={{ backgroundColor: 'transparent'}}

                    >
                        <Navbar.Brand href="https://flowbite.com/">
                            <span className="self-center  text-xl font-semibold dark:text-white">
                                👕𝕥-ＳℍιℝŤ-Ｍ𝔸𝐍ᶤΔ👕
                            </span>
                        </Navbar.Brand>
                        <div className="flex md:order-2">
                            <Navbar.Toggle />
                        </div>
                        <Navbar.Collapse >
                            <CustomLink
                                to="/home"
                                active={true}
                            >
                                <span className='block w-full text-center'>
                                    Home
                                </span>
                            </CustomLink>
                            <CustomLink to="/about">
                                <span className='block w-full text-center'>
                                    About
                                </span>
                            </CustomLink>
                            <CustomLink to="/orders">
                                <span className='block w-full text-center'>
                                    Order Review
                                </span>
                            </CustomLink>
                            <CustomLink to="/pricing">
                                <span className='block w-full text-center'>
                                    Pricing
                                </span>
                            </CustomLink>
                            <CustomLink to="/contact">
                                <span className='block w-full text-center'>
                                    Contact
                                </span>
                            </CustomLink>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </div>
    );
};

export default Header;